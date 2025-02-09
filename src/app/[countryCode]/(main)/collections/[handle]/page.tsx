import { Metadata } from "next"
import { notFound } from "next/navigation"

import {
  getCollectionByHandle,
  getCollectionsList,
  listRegions,
} from "@lib/data"
import CollectionTemplate from "@modules/collections/templates"
import { SortOptions } from "@modules/store/components/refinement-list/sort-products"

type Props = {
  params: { handle: string; countryCode: string }
  searchParams: {
    page?: string
    sortBy?: SortOptions
  }
}

export const PRODUCT_LIMIT = 12

type StaticParams = {
  countryCode: string
  handle: string
}[]

export async function generateStaticParams(): Promise<StaticParams> {
  try {
    const { collections } = await getCollectionsList()
    console.log("Collections:", collections)

    if (!collections || collections.length === 0) return []

    const countryCodes: string[] | undefined = await listRegions().then((regions) => {
      console.log("Regions:", regions)
      return regions?.flatMap((r) => r.countries.map((c) => c.iso_2))
    })

    console.log("Country Codes:", countryCodes)

    if (!countryCodes || countryCodes.length === 0) return []

    const collectionHandles: string[] = collections.map((collection) => collection.handle)
    console.log("Collection Handles:", collectionHandles)

    const staticParams: StaticParams = countryCodes.flatMap((countryCode) =>
      collectionHandles.map((handle) => ({
        countryCode,
        handle,
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
  const collection = await getCollectionByHandle(params.handle)

  if (!collection) {
    notFound()
  }

  const metadata = {
    title: `${collection.title} | Medusa Store`,
    description: `${collection.title} collection`,
  } as Metadata

  return metadata
}

export default async function CollectionPage({ params, searchParams }: Props) {
  const { sortBy, page } = searchParams

  const collection = await getCollectionByHandle(params.handle).then(
    (collection) => collection
  )

  if (!collection) {
    notFound()
  }

  return (
    <CollectionTemplate
      collection={collection}
      page={page}
      sortBy={sortBy}
      countryCode={params.countryCode}
    />
  )
}
