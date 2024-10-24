import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { getCategoriesList, getCollectionsList } from "@lib/data"

export default async function Footer() {
  const { collections } = await getCollectionsList(0, 6)

  return (
    <>
      <div className="h-max bg-black w-full flex flex-col sm:flex-row sm:justify-between gap-6 sm:gap-24 text-white text-[1.4rem] px-8 py-16 sm:px-16 sm:py-16">
        <h3 className="w-full sm:w-1/3 font-[300] uppercase">
          Free shipping on all orders. <br /> Designed by stylist, for the
          stylish.
        </h3>
        <p className="flex flex-col gap-6 w-full sm:w-1/2">
          <span className="text-[1rem] font-[300]">
            We want you to love everything about getting Away—which is why we
            offer free returns and exchanges on unused items for the first 100
            days.
          </span>
          <LocalizedClientLink href="#" className="uppercase text-[0.95rem]">
            Exclusions apply. <span className="underline">Learn more</span>
          </LocalizedClientLink>
        </p>
      </div>
      <footer className="w-full bg-[#fff6ee] h-max relative flex flex-col">
        <div className="h-[calc(100%-78px)] w-full grid grid-cols-2 md:grid-cols-4 gap-y-8 py-16 px-8 sm:px-20">
          <div className="flex flex-col gap-1">
            <h3 className="uppercase text-[1.05rem] font-[500] text-black mb-3">
              Shop
            </h3>
            <LocalizedClientLink
              href={`/collections/`}
              className="hover:underline text-[0.95rem] font-[300] text-black/70"
            >
              Shop all
            </LocalizedClientLink>
            {collections &&
              collections.map((collection) => (
                <LocalizedClientLink
                  key={collection.id}
                  href={`/collections/${collection.handle}`}
                  className="hover:underline text-[0.95rem] font-[300] text-black/70"
                >
                  {collection.title}
                </LocalizedClientLink>
              ))}
            <LocalizedClientLink
              href={`/collections/`}
              className="hover:underline text-[0.95rem] font-[300] text-black/70"
            >
              Beanies
            </LocalizedClientLink>
            <LocalizedClientLink
              href={`/collections/`}
              className="hover:underline text-[0.95rem] font-[300] text-black/70"
            >
              Sun Hats
            </LocalizedClientLink>
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="uppercase text-[1.05rem] font-[500] text-black mb-3">
              About
            </h3>
            <LocalizedClientLink
              href={`/collections/`}
              className="hover:underline text-[0.95rem] font-[300] text-black/70"
            >
              About Us
            </LocalizedClientLink>
            <LocalizedClientLink
              href={`/collections/`}
              className="hover:underline text-[0.95rem] font-[300] text-black/70"
            >
              Sustainability
            </LocalizedClientLink>
            <LocalizedClientLink
              href={`/collections/`}
              className="hover:underline text-[0.95rem] font-[300] text-black/70"
            >
              Cookie Policy
            </LocalizedClientLink>
            <LocalizedClientLink
              href={`/collections/`}
              className="hover:underline text-[0.95rem] font-[300] text-black/70"
            >
              Careers
            </LocalizedClientLink>
            <LocalizedClientLink
              href={`/collections/`}
              className="hover:underline text-[0.95rem] font-[300] text-black/70"
            >
              Blogs
            </LocalizedClientLink>
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="uppercase text-[1.05rem] font-[500] text-black mb-3">
              Get Help
            </h3>
            <LocalizedClientLink
              href={`/collections/`}
              className="hover:underline text-[0.95rem] font-[300] text-black/70"
            >
              FAQs
            </LocalizedClientLink>
            <LocalizedClientLink
              href={`/collections/`}
              className="hover:underline text-[0.95rem] font-[300] text-black/70"
            >
              Order Tracking
            </LocalizedClientLink>
            <LocalizedClientLink
              href={`/collections/`}
              className="hover:underline text-[0.95rem] font-[300] text-black/70"
            >
              Make a Return
            </LocalizedClientLink>
            <LocalizedClientLink
              href={`/collections/`}
              className="hover:underline text-[0.95rem] font-[300] text-black/70"
            >
              Contact Us
            </LocalizedClientLink>
            <LocalizedClientLink
              href={`/collections/`}
              className="hover:underline text-[0.95rem] font-[300] text-black/70"
            >
              Warranty
            </LocalizedClientLink>
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="uppercase text-[1.05rem] font-[500] text-black mb-3">
              Social Links
            </h3>
            <LocalizedClientLink
              href={`/collections/`}
              className="hover:underline text-[0.95rem] font-[300] text-black/70"
            >
              X
            </LocalizedClientLink>
            <LocalizedClientLink
              href={`/collections/`}
              className="hover:underline text-[0.95rem] font-[300] text-black/70"
            >
              Linkedin
            </LocalizedClientLink>
            <LocalizedClientLink
              href={`/collections/`}
              className="hover:underline text-[0.95rem] font-[300] text-black/70"
            >
              Instagram
            </LocalizedClientLink>
            <LocalizedClientLink
              href={`/collections/`}
              className="hover:underline text-[0.95rem] font-[300] text-black/70"
            >Facebook</LocalizedClientLink>
            <LocalizedClientLink
              href={`/collections/`}
              className="hover:underline text-[0.95rem] font-[300] text-black/70"
            >
              Youtube
            </LocalizedClientLink>
          </div>
        </div>
        <div className="min-h-[78px] w-full border-t border-black/50 flex flex-col sm:flex-row justify-between items-center py-6 gap-y-4 px-4 sm:px-16 text-[0.85rem]">
          <p className="w-full sm:w-max flex justify-between px-16 sm:px-0 gap-3 text-[0.85rem] font-[500]">
            <LocalizedClientLink href="#" className="hover:underline">
              Privacy Policy
            </LocalizedClientLink>
            <LocalizedClientLink href="#" className="hover:underline">
              Terms and Conditions
            </LocalizedClientLink>
            <LocalizedClientLink href="#" className="hover:underline">
              Help
            </LocalizedClientLink>
          </p>
          <p className="font-[500]">© 2024 ByHuman.</p>
        </div>
      </footer>
    </>
  )
}
