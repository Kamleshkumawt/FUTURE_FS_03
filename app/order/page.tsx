import type { Metadata } from "next"
import OrderPageClient from "./orderPageClient"

export const metadata: Metadata = {
  title: "Order Now - FreshSip",
  description: "Quick and easy ordering for fresh organic juices. Same-day delivery within 50km of Bangalore.",
}

export default function OrderPage() {
  return <OrderPageClient />
}
