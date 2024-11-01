import { Text, clx } from "@medusajs/ui"

import { PriceType } from "../product-actions"

export default async function PreviewPrice({ price }: { price: PriceType }) {
  return (
    <>
      {price.price_type === "sale" && (
        <Text className="line-through text-black/60 text-center font-[500] text-[12px]" data-testid="original-price">
          {price.original_price}
        </Text>
      )}
      <Text
        className={clx("text-black text-center font-[500] text-[12px]", {
          "text-ui-fg-interactive": price.price_type === "sale",
        })}
        data-testid="price"
      >
        {price.calculated_price}
      </Text>
    </>
  )
}
