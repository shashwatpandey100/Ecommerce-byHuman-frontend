"use client"

import { Popover, Transition } from "@headlessui/react"
import { Cart } from "@medusajs/medusa"
import { Fragment, useEffect, useRef, useState } from "react"
import { Button, useToggleState } from "@medusajs/ui"
import { formatAmount } from "@lib/util/prices"
import DeleteButton from "@modules/common/components/delete-button"
import LineItemOptions from "@modules/common/components/line-item-options"
import LineItemPrice from "@modules/common/components/line-item-price"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Thumbnail from "@modules/products/components/thumbnail"
import { SlBag } from "react-icons/sl"
import { TfiClose } from "react-icons/tfi"

const freeDeliveryPrice = 2000

const CartDropdown = ({
  cart: cartState,
}: {
  cart?: Omit<Cart, "beforeInsert" | "afterLoad"> | null
}) => {
  const [activeTimer, setActiveTimer] = useState<NodeJS.Timer | undefined>(
    undefined
  )

  const totalItems =
    cartState?.items?.reduce((acc, item) => {
      return acc + item.quantity
    }, 0) || 0

  const itemRef = useRef<number>(totalItems || 0)

  const toggleState = useToggleState()

  return (
    <div className="</div>h-full z-50">
      <Popover className="re</Popover>lative h-full">
        {({ open, close }) => (
          <>
            <Popover.Button
              data-testid="nav-cart-button"
              className="h-full focus:outline-none"
            >
              <div className="hover:text-ui-fg-base flex gap-1.5 relative">
                <span className="flex items-center justify-center relative">
                  <SlBag className="mt-1 text-[24px]" />
                  <span className="mt-[5px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[10px] text-black h-[16px] aspect-square flex items-center justify-center">
                    {totalItems}
                  </span>
                </span>
              </div>
            </Popover.Button>
            <Transition
              show={open}
              as={Fragment}
              enter="transition ease-out duration-150"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Popover.Panel
                data-testid="nav-cart-dropdown"
                className="flex flex-col fixed top-0 right-0 w-full pr-4 sm:pr-0 sm:w-[38%] 2xl:w-1/4 sm:min-w-min h-[100vh] z-30 bg-white text-sm text-black border-l border-black/5"
              >
                <div className="bg-white border-b py-5 px-4 flex items-center justify-center text-[#111] relative">
                  <button className="absolute left-0 px-6" onClick={close}>
                    <TfiClose className="text-[16px]" />
                  </button>
                  <h3 className="font-mono font-[600] text-[16px]">
                    Cart({totalItems})
                  </h3>
                </div>
                <div className="bg-[#f6f6f9] py-5 px-14 flex flex-col items-center justify-center">
                  {2000 - cartState?.subtotal / 100 < 0 ? (
                    <span className="font-[600] text-[13px] text-[#111] font-mono">
                      Yay! you have free delivery on this order.
                    </span>
                  ) : (
                    <span className="font-[600] text-[13px] text-[#111] font-mono">
                      Only INR {freeDeliveryPrice - cartState?.subtotal / 100}{" "}
                      left to take advantage of free delivery.
                    </span>
                  )}
                  <p className="rounded-full bg-black/10 h-[2px] w-full mt-2 relative overflow-hidden">
                    <span
                      style={{
                        width: `${(cartState?.subtotal / 100 / 2000) * 100}%`,
                      }}
                      className="absolute left-0 h-full bg-black rounded-full transition-all duration-1000"
                    ></span>
                  </p>
                </div>
                {cartState && cartState.items?.length ? (
                  <>
                    <div className="overflow-y-scroll max-h-[402px] px-4 py-6 grid grid-cols-1 gap-y-4 no-scrollbar">
                      {cartState.items
                        .sort((a, b) => {
                          return a.created_at > b.created_at ? -1 : 1
                        })
                        .map((item) => (
                          <div
                            className="grid grid-cols-[110px_1fr] gap-x-0"
                            key={item.id}
                            data-testid="cart-item"
                          >
                            <LocalizedClientLink
                              href={`/products/${item.variant.product.handle}`}
                              className="h-24"
                            >
                              <Thumbnail
                                thumbnail={item.thumbnail}
                                size="square"
                              />
                            </LocalizedClientLink>
                            <div className="flex flex-col justify-between flex-1">
                              <div className="flex flex-col flex-1">
                                <div className="flex items-start justify-between">
                                  <div className="flex flex-col overflow-ellipsis whitespace-nowrap mr-4 w-[180px]">
                                    <h3 className="text-base-regular overflow-hidden text-ellipsis">
                                      <LocalizedClientLink
                                        href={`/products/${item.variant.product.handle}`}
                                        data-testid="product-link"
                                      >
                                        {item.title}
                                      </LocalizedClientLink>
                                    </h3>
                                    <LineItemOptions
                                      variant={item.variant}
                                      data-testid="cart-item-variant"
                                      data-value={item.variant}
                                    />
                                  </div>
                                  <div className="flex justify-end">
                                    <DeleteButton
                                      id={item.id}
                                      className="mt-1"
                                      data-testid="cart-item-remove-button"
                                    ></DeleteButton>
                                  </div>
                                </div>
                              </div>
                              <span className="flex items-center font-mono">
                                <LineItemPrice
                                  region={cartState.region}
                                  item={item}
                                  style="tight"
                                />
                                <span
                                  data-testid="cart-item-quantity"
                                  data-value={item.quantity}
                                >
                                  &nbsp;for {item.quantity}
                                </span>
                              </span>
                            </div>
                          </div>
                        ))}
                    </div>
                    <div className="py-6 px-4 flex flex-col gap-y-4 text-small-regular border-t absolute bottom-0 w-full">
                      <LocalizedClientLink
                        href="/cart"
                        passHref
                        className="focus:outline-none focus:shadown-none"
                      >
                        <Button
                          className="w-full rounded-none bg-black hover:bg-black/80 py-3.5 focus:outline-none focus:shadown-none active:outline-none"
                          size="large"
                          data-testid="go-to-cart-button"
                        >
                          Go to cart
                        </Button>
                      </LocalizedClientLink>
                      <div className="flex items-center justify-center gap-2">
                        <span className="text-[#111] text-[13px] font-mono">
                          Subtotal (excl. taxes)
                        </span>
                        <span
                          className="text-[13px] font-[500]"
                          data-testid="cart-subtotal"
                          data-value={cartState.subtotal || 0}
                        >
                          {formatAmount({
                            amount: cartState.subtotal || 0,
                            region: cartState.region,
                            includeTaxes: false,
                          })}
                        </span>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="h-full flex items-center justify-center">
                    <div className="flex -mt-28 flex-col gap-y-4 items-center justify-center">
                      <div className="bg-gray-900 text-small-regular flex items-center justify-center w-6 h-6 rounded-full text-white">
                        <span>0</span>
                      </div>
                      <span>Your shopping bag is empty.</span>
                      <div>
                        <LocalizedClientLink href="/store">
                          <>
                            <span className="sr-only">
                              Go to all products page
                            </span>
                            <Button
                              className="rounded-none px-6 py-2.5"
                              onClick={close}
                            >
                              Explore products
                            </Button>
                          </>
                        </LocalizedClientLink>
                      </div>
                    </div>
                  </div>
                )}
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  )
}

export default CartDropdown
