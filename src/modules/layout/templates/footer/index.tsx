import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { getCategoriesList, getCollectionsList } from "@lib/data"
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";

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
       <footer className="w-full bg-[#fff6ee] border-t h-max relative flex flex-col">

       <div className="h-[calc(100%-78px)] w-full bg-black text-white grid grid-cols-2 justify-center md:grid-cols-3 gap-y-8 py-16 px-8 sm:px-20">
      {/* First Column: Logo and Company Info */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center mb-3">
      
              <h1 className="text-base-100 font-bold tracking-[0.05rem] text-2xl">BY HUMANS</h1>
        </div>
        <p className="text-[0.95rem] font-[300] text-base/70 mb-3">
          We are dedicated to providing high-quality products that make a difference in your life.
        </p>
        <div className="flex gap-4 mb-3">
          <LocalizedClientLink 
            href="/contact" 
            className="text-[0.95rem] font-[300] text-base/70 opacity-7"
          >
            Email: contact@company.com
          </LocalizedClientLink>
        </div>
        <div className="flex gap-2 mb-3">
          <LocalizedClientLink 
            href="/contact" 
            className="text-[0.95rem] font-[300] text-base/70"
          >
            <FaInstagramSquare className="text-[18px]"/>
          </LocalizedClientLink>

          <LocalizedClientLink 
            href="/contact" 
            className="text-[0.95rem] font-[300] text-base/70"
          >
            <FaSquareFacebook className="text-[18px]"/>
          </LocalizedClientLink>
        </div>
        
      </div>

      {/* Second Column: Menu Links */}
      <div className="flex flex-col gap-1 ms-[7.25rem]">
        <h3 className="uppercase text-[1.05rem] font-[500] text-base-100 mb-3">
          Quick Links
        </h3>
        <LocalizedClientLink
          href="/about"
          className="hover:underline text-[0.95rem] font-[300] text-base/70"
        >
          About Us
        </LocalizedClientLink>
        <LocalizedClientLink
          href="/make-a-return"
          className="hover:underline text-[0.95rem] font-[300] text-base/70"
        >
          Make a Return
        </LocalizedClientLink>
        <LocalizedClientLink
          href="/contact-us"
          className="hover:underline text-[0.95rem] font-[300] text-base/70"
        >
          Contact Us
        </LocalizedClientLink>
        <LocalizedClientLink
          href="/products"
          className="hover:underline text-[0.95rem] font-[300] text-base/70"
        >
          Products
        </LocalizedClientLink>
        <LocalizedClientLink
          href="/cart"
          className="hover:underline text-[0.95rem] font-[300] text-base/70"
        >
          Cart
        </LocalizedClientLink>
      </div>

      
      {/* Third Column: Newsletter */}
      <div className="flex flex-col gap-1">
        <h3 className="uppercase text-[1.05rem] font-[500] text-base-100 mb-3">
          Join Our Newsletter
        </h3>
        <span className="pb-2 text-[0.85rem] font-[300] text-gray-50"  > We are dedicated to providing high-quality products </span>
        <form  className="mb-4 relative">
          <input 
            type="email" 
            placeholder="Enter your email"
            className="w-full px-3 py-2 text-black/70 focus:outline-none text-[0.95rem] border border-gray-300 rounded mb-2"
            required
          />
          <button 
            type="submit" 
            className="w-fit  absolute top-[2px] h-fit bottom-0 right-[3px] bg-black text-white py-2  px-5 text-[0.85rem] "
          >
            Subscribe
          </button>
          <div className="flex justify-center gap-5 mt-3">

             <img
                src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/phonepe-icon.png"
                alt="phonepe image"
                className="w-max object-cover object-center h-[36px]"
              /> 
              <img
                src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/google-pay-icon.svg"
                alt="googlepay image"
                className="w-max object-cover object-center h-[36px]"
              /> 
              

              </div>
        </form>
      </div>


   
    </div>
        {/*  <div className="h-[calc(100%-78px)] w-full grid grid-cols-2 md:grid-cols-4 gap-y-8 py-16 px-8 sm:px-20">
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
              >
                Facebook
              </LocalizedClientLink>
              <LocalizedClientLink
                href={`/collections/`}
                className="hover:underline text-[0.95rem] font-[300] text-black/70"
              >
                Youtube
              </LocalizedClientLink>
            </div>
            <div className="flex flex-col gap-1">
              
            </div>
          </div> */}
        <div className="min-h-[78px] w-full border-t border-black/50 flex flex-col sm:flex-row justify-between items-center py-6 gap-y-4 px-4 sm:px-16 text-[0.85rem]">
          <p className="w-full sm:w-max flex justify-between gap-3 text-[0.85rem] font-[500]">
            <LocalizedClientLink href="/privacy" className="hover:underline">
              Privacy Policy
            </LocalizedClientLink>
            <LocalizedClientLink href="/terms-and-conditions" className="hover:underline">
              Terms and Conditions
            </LocalizedClientLink>
            <LocalizedClientLink href="/help" className="hover:underline">
              Help
            </LocalizedClientLink>
          </p>
          <p className="font-[500]">© 2024 ByHuman.</p>
        </div>
      </footer>
    </>
  )
}
