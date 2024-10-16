import React from "react"
import { Suspense } from "react"
import { listRegions } from "@lib/data"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import SideMenu from "@modules/layout/components/side-menu"
import Top from "./Top";
import { LuSearch } from "react-icons/lu";
import { BsHandbag } from "react-icons/bs";
import { LiaUserSolid } from "react-icons/lia";

export default async function Nav() {
  const regions = await listRegions().then((regions) => regions)

  return (
    <>
    <Top />
    <div className={`sticky top-0 inset-x-0 z-50 bg-white hover:bg-white group`}>
      <div className="relative h-[100px] mx-auto border-b duration-200 border-ui-border-base">
        <nav className="content-container txt-xsmall-plus text-ui-fg-subtle flex items-center justify-between w-full h-full text-small-regular">
          <div className="flex-1 basis-0 h-full flex items-center">
            <div className="h-full">
              <SideMenu regions={regions} />
            </div>
          </div>

          <div className="flex items-center h-full">
            <LocalizedClientLink
              href="/"
              className="txt-compact-xlarge-plus hover:text-ui-fg-base uppercase"
              data-testid="nav-store-link"
            >
              <img src="https://res.cloudinary.com/dw0bwetr1/image/upload/v1729078059/logo_fdnkfw.png" alt="byHumans" className="w-max object-cover object-center h-[40px]" />
            </LocalizedClientLink>
          </div>

          <div className="flex items-center gap-x-6 h-full flex-1 basis-0 justify-end">
            <div className="hidden small:flex items-center gap-x-6 h-full">
              {process.env.FEATURE_SEARCH_ENABLED && (
                <LocalizedClientLink
                  className="hover:text-ui-fg-base"
                  href="/search"
                  scroll={false}
                  data-testid="nav-search-link"
                >
                  <LuSearch className="text-[20px]" />
                </LocalizedClientLink>
              )}
              <LocalizedClientLink
                className="hover:text-ui-fg-base"
                href="/account"
                data-testid="nav-account-link"
              >
                <LiaUserSolid className="text-[28px]" />
              </LocalizedClientLink>
            </div>
            <Suspense
              fallback={
                <LocalizedClientLink
                  className="hover:text-ui-fg-base flex gap-2"
                  href="/cart"
                  data-testid="nav-cart-link"
                >
                  <BsHandbag /> (0)
                </LocalizedClientLink>
              }
            >
              <CartButton />
            </Suspense>
          </div>
        </nav>
      </div>
    </div>
    </>
  )
}
