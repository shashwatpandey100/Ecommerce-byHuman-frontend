import { Product } from "@medusajs/medusa"
import { Metadata } from "next"
import { FaArrowRightLong } from "react-icons/fa6"
import { getProductsList, getRegion } from "@lib/data"
import Hero from "../../../modules/home/components/hero"
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
      queryParams: { limit: 5 },
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
      <div className="pb-20 md:pb-24">
        <div className="w-full flex flex-col items-center pt-16 md:pt-20">
          <span className="italic text-[1.45rem] font-[300] font-times">
            Shop products by
          </span>
          <h3 className="uppercase text-[2.35rem]">Categories</h3>
          <ul className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5 pt-12 px-2.5 md:px-2.5">
            <div
              style={{
                backgroundImage:
                  "linear-gradient(to top, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.05)), url(https://imageseu.urbndata.com/is/image/UrbanOutfittersEU/0214341180325_050_d?$xlarge$&fit=constrain&fmt=webp&qlt=80&wid=1080)",
              }}
              className="h-[540px] bg-cover bg-top bg-no-repeat flex flex-col items-center justify-center relative"
            >
              <Link
                href="/collections/t-shirts"
                className="rounded-full absolute bottom-4 left-4 border border-white bg-white hover:bg-transparent text-[0.95rem] text-black/80 hover:text-white transition-all duration-200 px-6 py-1.5"
              >
                Shop T-shirts
              </Link>
            </div>
            <div
              style={{
                backgroundImage:
                  "linear-gradient(to top, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.05)), url(https://imageseu.urbndata.com/is/image/UrbanOutfittersEU/0251422730225_011_b?$xlarge$&fit=constrain&fmt=webp&qlt=80&wid=1080)",
              }}
              className="h-[540px] bg-cover bg-top bg-no-repeat flex flex-col items-center justify-center relative"
            >
              <Link
                href="/collections/baseball-caps"
                className="rounded-full absolute bottom-4 left-4 border border-white bg-white hover:bg-transparent text-[0.95rem] text-black/80 hover:text-white transition-all duration-200 px-6 py-1.5"
              >
                Shop Baseball Caps
              </Link>
            </div>
            <div
              style={{
                backgroundImage:
                  "linear-gradient(to top, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.05)), url(https://imageseu.urbndata.com/is/image/UrbanOutfittersEU/0251647150024_061_b?$xlarge$&fit=constrain&fmt=webp&qlt=80&wid=1080)",
              }}
              className="h-[540px] bg-cover bg-top bg-no-repeat flex flex-col items-center justify-center relative"
            >
              <Link
                href="/collections/trucker-caps"
                className="rounded-full absolute bottom-4 left-4 border border-white bg-white hover:bg-transparent text-[0.95rem] text-black/80 hover:text-white transition-all duration-200 px-6 py-1.5"
              >
                Shop Trucker Caps
              </Link>
            </div>
          </ul>
        </div>
        <ul className="flex flex-col py-24">
          <div className="flex md:flex-row flex-col">
            <div className="w-full h-[40vh] md:h-[80vh] bg-cover bg-center bg-no-repeat bg-[url(https://puls-img.chanel.com/c_limit,w_1920/q_auto:good,f_auto,dpr_1.1/1696595574429-lucyside2jpg_3645x2860.jpg)]"></div>
            <div className="w-full h-[60vh] md:h-[80vh] bg-[#fff8f0] flex flex-col items-center justify-center">
              <div className="p-16 w-full">
                <p className="text-[#111] font-mono">
                  Pack it. Strap it. Make it yours.
                </p>
                <h3 className="font-times text-[4rem]">Mini, meet crossbody</h3>
                <p className="text-[#111] font-mono">
                  Our cult-favorite Mini is back and better than ever with a
                  fresh (and adjustable) crossbody look.
                </p>
                <p className="mt-5 text-[#000] font-[500] text-[12px] uppercase flex gap-3 items-center group">
                  Shop now{" "}
                  <FaArrowRightLong className="group-hover:translate-x-[7px] transition-all duration-200" />
                </p>
              </div>
            </div>
          </div>
          <div className="flex md:flex-row-reverse flex-col">
            <div className="w-full h-[40vh] md:h-[80vh] bg-cover bg-center bg-no-repeat bg-[url(https://www.chanel.com/images/q_auto:good,f_auto,fl_lossy,dpr_1.1/w_1280/FSH-1719480834410-bagsd03.jpg)]"></div>
            <div className="w-full h-[60vh] md:h-[80vh] bg-[#fff8f0] flex items-center justify-center">
              <div className="w-full h-full bg-[#fff8f0] flex flex-col items-center justify-center">
                <div className="p-16 w-full">
                  <p className="text-[#111] font-mono">Introducing</p>
                  <h3 className="font-times text-[4rem]">The Café Edit</h3>
                  <p className="text-[#111] font-mono">
                    Our new limited-edition collection features rich pebbled
                    leather or leather texture, and hardware with a luxe
                    tortoise-effect. Crafted for luxurious journeys, wherever
                    you're headed.
                  </p>
                  <p className="mt-5 text-[#000] font-[500] text-[12px] uppercase flex gap-3 items-center group">
                    Shop The Café Edit
                    <FaArrowRightLong className="group-hover:translate-x-[7px] transition-all duration-200" />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ul>
        <div className="flex flex-col gap-4 px-4 sm:px-16">
          <div className="w-full flex justify-between pb-4 border-b mb-4">
            <h3 className="uppercase text-[0.84rem] font-[600] text-black">
              Our Latest Drops
            </h3>
            <LocalizedClientLink href="#">
              <p className="text-[#000] font-[500] text-[12px] uppercase flex gap-3 items-center group">
                Shop now{" "}
                <FaArrowRightLong className="group-hover:translate-x-[7px] transition-all duration-200" />
              </p>
            </LocalizedClientLink>
          </div>
          <ul className="grid grid-cols-2 small:grid-cols-5 gap-x-4 gap-y-24 small:gap-y-36">
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
