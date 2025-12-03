import { ProductsClient } from "./ProductsClient"
import { Suspense } from "react"

export const metadata = {
  title: "Products | FreshSip",
  description: "Browse our collection of premium cold-pressed organic juices",
}

export default function ProductsPage() {
  return (
    <Suspense>
      <ProductsClient />
    </Suspense>
  )
}
