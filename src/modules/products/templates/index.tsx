import { Region } from "@medusajs/medusa"
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"
import React, { Suspense } from "react"

import ImageGallery from "@modules/products/components/image-gallery"
import ProductActions from "@modules/products/components/product-actions"
import ProductOnboardingCta from "@modules/products/components/product-onboarding-cta"
import ProductTabs from "@modules/products/components/product-tabs"
import RelatedProducts from "@modules/products/components/related-products"
import ProductInfo from "@modules/products/templates/product-info"
import SkeletonRelatedProducts from "@modules/skeletons/templates/skeleton-related-products"
import { notFound } from "next/navigation"
import ProductActionsWrapper from "./product-actions-wrapper"

type ProductTemplateProps = {
  product: PricedProduct
  region: Region
  countryCode: string
}

const ProductTemplate: React.FC<ProductTemplateProps> = ({
  product,
  region,
  countryCode,
}) => {
  if (!product || !product.id) {
    return notFound()
  }

  return (
    <>
      <div
        className="flex flex-col small:flex-row small:items-start relative bg-[#fbf7f45a]"
        data-testid="product-container"
      >
        <div className="block w-full md:w-[860px] md:overflow-hidden relative md:sticky md:top-[60px]">
          <ImageGallery images={product?.images || []} />
        </div>
        <div className="flex flex-col w-full md:w-[calc(100vw-860px)] px-6 gap-y-12">
          <div className="flex flex-col w-full pt-8 gap-y-6">
            <ProductInfo product={product} />
          </div>
          <ProductOnboardingCta />
          <Suspense
            fallback={
              <ProductActions
              disabled={true}
              product={product}
              region={region}
              />
            }
          >
            <ProductActionsWrapper id={product.id} region={region} />
          </Suspense>
          <ProductTabs product={product} />
        </div>
      </div>
      <div
        className="content-container py-16 small:py-32 bg-[#fbf7f45a]"
        data-testid="related-products-container"
      >
        <Suspense fallback={<SkeletonRelatedProducts />}>
          <RelatedProducts product={product} countryCode={countryCode} />
        </Suspense>
      </div>
    </>
  )
}

export default ProductTemplate
