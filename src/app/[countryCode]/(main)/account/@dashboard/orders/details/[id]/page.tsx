import { Metadata } from "next"
import { notFound } from "next/navigation"

import { retrieveOrder } from "@lib/data"
import OrderDetailsTemplate from "@modules/order/templates/order-details-template"

type Props = {
  params: { id: string }
}

// Add this function to generate static params
export async function generateStaticParams() {
  // If you can't pre-fetch all order IDs, you can return an empty array
  // This means only statically generated pages will work during export
  return []
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const order = await retrieveOrder(params.id).catch(() => null)

  if (!order) {
    notFound()
  }

  return {
    title: `Order #${order.display_id}`,
    description: `View your order`,
  }
}

export default async function OrderDetailPage({ params }: Props) {
  const order = await retrieveOrder(params.id).catch(() => null)

  if (!order) {
    notFound()
  }

  return <OrderDetailsTemplate order={order} />
}