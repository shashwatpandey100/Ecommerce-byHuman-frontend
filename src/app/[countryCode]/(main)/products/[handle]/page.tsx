import { Metadata } from "next"
import { notFound } from "next/navigation"

import {
  getProductByHandle,
  getProductsList,
  getRegion,
  listRegions,
  retrievePricedProductById,
} from "@lib/data"
import { Region } from "@medusajs/medusa"
import ProductTemplate from "@modules/products/templates"

type StaticParams = {
  countryCode: string
  handle: string
}[]

type Props = {
  params: { countryCode: string; handle: string }
}

export async function generateStaticParams(): Promise<StaticParams> {
  try {
    const countryCodes: string[] | undefined = await listRegions().then((regions) => {
      console.log("Regions:", regions)
      return regions?.flatMap((r) => r.countries.map((c) => c.iso_2))
    })

    console.log("Country Codes:", countryCodes)

    if (!countryCodes || countryCodes.length === 0) return []

    const products = await Promise.all(
      countryCodes.map(async (countryCode) => {
        const response = await getProductsList({ countryCode })
        return response?.response?.products ?? []
      })
    ).then((responses) => responses.flat())

    console.log("Products:", products)

    if (!products || products.length === 0) return []

    const staticParams: StaticParams = countryCodes.flatMap((countryCode) =>
      products.map((product) => ({
        countryCode,
        handle: product.handle,
      }))
    )

    console.log("Generated Params:", staticParams)

    return staticParams
  } catch (error) {
    console.error("Error in generateStaticParams:", error)
    return []
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { handle } = params

  const { product } = await getProductByHandle(handle).then(
    (product) => product
  )

  if (!product) {
    notFound()
  }

  return {
    title: `${product.title} | Medusa Store`,
    description: `${product.title}`,
    openGraph: {
      title: `${product.title} | Medusa Store`,
      description: `${product.title}`,
      images: product.thumbnail ? [product.thumbnail] : [],
    },
  }
}

const getPricedProductByHandle = async (handle: string, region: Region) => {
  const { product } = await getProductByHandle(handle).then(
    (product) => product
  )

  if (!product || !product.id) {
    return null
  }

  const pricedProduct = await retrievePricedProductById({
    id: product.id,
    regionId: region.id,
  })

  return pricedProduct
}

export default async function ProductPage({ params }: Props) {
  const region = await getRegion(params.countryCode)

  if (!region) {
    notFound()
  }

  const pricedProduct = await getPricedProductByHandle(params.handle, region)

  if (!pricedProduct) {
    notFound()
  }

  return (
    <ProductTemplate
      product={pricedProduct}
      region={region}
      countryCode={params.countryCode}
    />
  )
}
