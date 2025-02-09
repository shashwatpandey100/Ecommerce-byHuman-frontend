import { Metadata } from "next"
import { notFound } from "next/navigation"

import { getCategoryByHandle, listCategories, listRegions } from "@lib/data"
import CategoryTemplate from "@modules/categories/templates"
import { SortOptions } from "@modules/store/components/refinement-list/sort-products"

type Props = {
  params: { category: string[]; countryCode: string }
  searchParams: {
    sortBy?: SortOptions
    page?: string
  }
}

type StaticParams = {
  countryCode: string
  category: string[]
}[]

export async function generateStaticParams(): Promise<StaticParams> {
  try {
    const product_categories = await listCategories()
    console.log("Categories:", product_categories)

    if (!product_categories || product_categories.length === 0) return []

    const countryCodes: string[] | undefined = await listRegions().then(
      (regions) => {
        console.log("Regions:", regions)
        return regions?.flatMap((r) => r.countries.map((c) => c.iso_2))
      }
    )

    console.log("Country Codes:", countryCodes)

    if (!countryCodes || countryCodes.length === 0) return []

    const categoryHandles: string[] = product_categories.map(
      (category) => category.handle
    )
    console.log("Category Handles:", categoryHandles)

    const staticParams: StaticParams = countryCodes.flatMap((countryCode) =>
      categoryHandles.map((handle) => ({
        countryCode,
        category: [handle],
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
  try {
    const { product_categories } = await getCategoryByHandle(
      params.category
    ).then((product_categories) => product_categories)

    const title = product_categories
      .map((category) => category.name)
      .join(" | ")

    const description =
      product_categories[product_categories.length - 1].description ??
      `${title} category.`

    return {
      title: `${title} | Medusa Store`,
      description,
      alternates: {
        canonical: `${params.category.join("/")}`,
      },
    }
  } catch (error) {
    notFound()
  }
}

export default async function CategoryPage({ params, searchParams }: Props) {
  const { sortBy, page } = searchParams

  const { product_categories } = await getCategoryByHandle(
    params.category
  ).then((product_categories) => product_categories)

  if (!product_categories) {
    notFound()
  }

  return (
    <CategoryTemplate
      categories={product_categories}
      sortBy={sortBy}
      page={page}
      countryCode={params.countryCode}
    />
  )
}
