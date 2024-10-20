import { Region } from "@medusajs/medusa"
import { Text } from "@medusajs/ui"

import InteractiveLink from "@modules/common/components/interactive-link"
import ProductPreview from "@modules/products/components/product-preview"
import { ProductCollectionWithPreviews } from "types/global"

export default function ProductRail({
  collection,
  region,
}: {
  collection: ProductCollectionWithPreviews
  region: Region
}) {
  const { products } = collection

  if (!products) {
    return null
  }

  return (
    <div className="py-10 small:py-16 px-16">
      <div className="flex justify-between mb-8">
        <span className="w-full"></span>
        <Text className="text-[2rem] uppercase w-full flex justify-center">{collection.title}</Text>
        <span className="w-full flex justify-end">
        <InteractiveLink href={`/collections/${collection.handle}`}>
          View all
        </InteractiveLink>
        </span>
      </div>
      <ul className="grid grid-cols-2 small:grid-cols-4 gap-x-4 gap-y-24 small:gap-y-36">
        {products &&
          products.map((product) => (
            <li key={product.id}>
              <ProductPreview
                productPreview={product}
                region={region}
                isFeatured
              />
            </li>
          ))}
      </ul>
    </div>
  )
}
