import { Product } from "@medusajs/medusa"
import { Metadata } from "next"

import { getCollectionsList, getProductsList, getRegion } from "@lib/data"
import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "../../../modules/home/components/hero"
import { ProductCollectionWithPreviews } from "types/global"
import { cache } from "react"
import ProductPreview from "@modules/products/components/product-preview"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Link from "next/link"

export const metadata: Metadata = {
  title: "ByHumans - Home",
  description:
    "ByHumans is a platform that connects you to the best products from around the world.",
}

const getLatestProducts = cache(
  async (countryCode: string): Promise<Product[] | null> => {
    const { response } = await getProductsList({
      queryParams: { limit: 4 },
      countryCode,
    })

    return response.products as unknown as Product[]
  }
)

export default async function Home({
  params: { countryCode },
}: {
  params: { countryCode: string }
}) {
  const region = await getRegion(countryCode)

  if (!region) {
    return null
  }

  const products = await getLatestProducts(countryCode)

  return (
    <>
      <Hero />
      <div className="pb-24">
        <div className="w-full flex flex-col items-center pt-20">
          <span className="italic text-[1.45rem] font-[300] font-times">
            Shop products by
          </span>
          <h3 className="uppercase text-[2.35rem]">Categories</h3>
          <ul className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5 pt-12 px-16">
            <div
              style={{
                backgroundImage:
                  "linear-gradient(to top, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(https://puls-img.chanel.com/c_limit,w_1920/q_auto:good,f_auto,dpr_1.1/1696595565200-lucyside1jpg_3645x2860.jpg)",
              }}
              className="h-[300px] bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center relative"
            >
              <Link
                href="store"
                className="absolute bottom-4 left-4 border border-white bg-white hover:bg-transparent text-[0.95rem] text-black/80 hover:text-white transition-all duration-200 px-6 py-2 uppercase"
              >
                Shop T-shirts
              </Link>
            </div>
            <div
              style={{
                backgroundImage:
                  "linear-gradient(to top, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(https://puls-img.chanel.com/c_limit,w_1920/q_auto:good,f_auto,dpr_1.1/1696595583929-jennyportrait1jpg_7056x5760.jpg)",
              }}
              className="h-[300px] bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center relative"
            >
              <Link
                href="store"
                className="absolute bottom-4 left-4 border border-white bg-white hover:bg-transparent text-[0.95rem] text-black/80 hover:text-white transition-all duration-200 px-6 py-2 uppercase"
              >
                Shop Baseball Caps
              </Link>
            </div>
            <div
              style={{
                backgroundImage:
                  "linear-gradient(to top, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(https://puls-img.chanel.com/c_limit,w_1920/q_auto:good,f_auto,dpr_1.1/1696595566741-amandlaside1jpg_3645x2860.jpg)",
              }}
              className="h-[300px] bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center relative"
            >
              <Link
                href="store"
                className="absolute bottom-4 left-4 border border-white bg-white hover:bg-transparent text-[0.95rem] text-black/80 hover:text-white transition-all duration-200 px-6 py-2 uppercase"
              >
                Shop Trucker Caps
              </Link>
            </div>
          </ul>
        </div>
        <ul className="grid grid-cols-2 py-24">
          <div className="w-full h-[70vh] bg-cover bg-center bg-no-repeat bg-[url(https://puls-img.chanel.com/c_limit,w_1920/q_auto:good,f_auto,dpr_1.1/1696595574429-lucyside2jpg_3645x2860.jpg)]"></div>
          <div className="w-full h-[70vh] bg-[#fff6ee] flex items-center justify-center"></div>
          <div className="w-full h-[70vh] bg-[#fff6ee] flex items-center justify-center"></div>
          <div className="w-full h-[70vh] bg-cover bg-center bg-no-repeat bg-[url(https://www.chanel.com/images/q_auto:good,f_auto,fl_lossy,dpr_1.1/w_1280/FSH-1719480834410-bagsd03.jpg)]"></div>
        </ul>
        <div className="flex flex-col gap-4 px-8 sm:px-16">
          <div className="w-full flex justify-between">
            <h3 className="uppercase text-[0.84rem] font-[600] text-black">
              Our Latest Drops
            </h3>
            <LocalizedClientLink
              href="#"
              className="uppercase hover:underline text-[0.84rem] font-[400] text-black"
            >
              See all
            </LocalizedClientLink>
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
      </div>
    </>
  )
}
