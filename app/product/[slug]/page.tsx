"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { useCart } from "@/lib/cart-context"
import { fadeIn, slideUp } from "@/lib/motion-variants"
import Link from "next/link"
import { useParams } from "next/navigation"


interface ProductDetailPageProps {
  params: { slug: string }
}

// Mock product data
const productData: Record<string, any> = {
  "fresh-watermelon": {
    id: "1",
    name: "Fresh Watermelon Juice",
    price: 40,
    rating: 4.8,
    reviews: 124,
    description:
      "Refreshing and hydrating watermelon juice packed with vitamins and minerals. Perfect for hot summer days.",
    images: ["/watermelon-juice-bottle-front.jpg", "/watermelon-juice-bottle-side.jpg", "/watermelon-juice-bottle-close.jpg"],
    category: "Healthy Juices",
    nutrition: {
      calories: 45,
      protein: "1g",
      carbs: "11g",
      fat: "0.5g",
      fiber: "1g",
    },
    ingredients: ["Organic Watermelon", "Filtered Water", "Lemon Juice"],
    storage: "Keep refrigerated. Consume within 3 days of opening.",
    delivery: "Same-day delivery available within 50km of Bangalore",
    relatedProducts: [
      { id: "4", slug: "grape-goodness", name: "Grape Goodness", price: 40, image: "/grape-juice.jpg" },
      { id: "2", slug: "papaya-paradise", name: "Papaya Paradise", price: 40, image: "/papaya-juice.jpg" },
    ],
  },
  "papaya-paradise": {
    id: "2",
    name: "Papaya Paradise",
    price: 40,
    rating: 4.9,
    reviews: 156,
    description: "Tropical papaya juice rich in vitamin C and digestive enzymes. A taste of paradise in every sip.",
    images: ["/papaya-juice-bottle.jpg", "/papaya-fresh-fruit.jpg"],
    category: "Healthy Juices",
    nutrition: {
      calories: 50,
      protein: "1g",
      carbs: "12g",
      fat: "0.3g",
      fiber: "2g",
    },
    ingredients: ["Organic Papaya", "Filtered Water"],
    storage: "Keep refrigerated. Consume within 3 days.",
    delivery: "Same-day delivery available within 50km of Bangalore",
    relatedProducts: [],
  },
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { slug } = useParams();               
  const product = productData[slug as string];
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)
  const { addItem } = useCart()
  

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="heading-md mb-4">Product not found</h1>
          <Link href="/products" className="btn-primary">
            Back to Products
          </Link>
        </div>
      </div>
    )
  }

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity,
      image: product.images[0],
      slug: params.slug,
    })
  }

  return (
    <main className="min-h-screen pt-20 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          {/* Image Gallery */}
          <motion.div initial="hidden" animate="visible" variants={fadeIn} className="space-y-4">
            {/* Main Image */}
            <div className="relative h-96 md:h-[500px] bg-card-bg rounded-2xl overflow-hidden">
              <Image
                src={product.images[selectedImage] || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Thumbnails */}
            {product.images.length > 1 && (
              <div className="flex gap-3">
                {product.images.map((img: string, idx: number) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition ${
                      selectedImage === idx ? "border-primary" : "border-border"
                    }`}
                  >
                    <Image
                      src={img || "/placeholder.svg"}
                      alt={`View ${idx + 1}`}
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </motion.div>

          {/* Product Info */}
          <motion.div initial="hidden" animate="visible" variants={slideUp} className="sticky top-32 h-fit space-y-6">
            <div>
              <p className="text-primary font-semibold text-sm uppercase tracking-wide mb-2">{product.category}</p>
              <h1 className="heading-md mb-3">{product.name}</h1>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className={i < Math.floor(product.rating) ? "text-accent" : "text-neutral/30"}>
                      ★
                    </span>
                  ))}
                </div>
                <span className="text-foreground font-semibold">{product.rating}</span>
                <span className="text-subtle">({product.reviews} reviews)</span>
              </div>

              <p className="text-lg text-subtle leading-relaxed mb-6">{product.description}</p>
            </div>

            {/* Price & Stock */}
            <div className="bg-card-bg rounded-lg p-6 space-y-4">
              <div className="flex items-baseline gap-2">
                <span className="heading-sm text-primary">₹{product.price}</span>
                <span className="text-sm text-subtle">per bottle</span>
              </div>

              {/* Quantity */}
              <div className="space-y-3">
                <p className="text-sm font-semibold text-foreground">Quantity</p>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 flex items-center justify-center bg-neutral/20 hover:bg-primary hover:text-white rounded-lg transition"
                  >
                    -
                  </button>
                  <span className="text-lg font-semibold w-8 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 flex items-center justify-center bg-neutral/20 hover:bg-primary hover:text-white rounded-lg transition"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Add to Cart */}
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={handleAddToCart}
                className="w-full btn-primary pt-3 pb-3"
              >
                Add to Cart
              </motion.button>
            </div>

            {/* Delivery Info */}
            <div className="text-sm text-subtle space-y-2">
              <p>📦 {product.delivery}</p>
              <p>❄️ {product.storage}</p>
            </div>
          </motion.div>
        </div>

        {/* Additional Info Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          {/* Nutrition */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card-bg rounded-2xl p-8"
          >
            <h3 className="heading-sm mb-6">Nutritional Information</h3>
            <div className="space-y-4">
              {Object.entries(product.nutrition).map(([key, value]) => (
                <div key={key} className="flex justify-between pb-3 border-b border-border last:border-0">
                  <span className="text-foreground capitalize">{key}</span>
                  <span className="font-semibold text-primary">{String(value)}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Ingredients */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card-bg rounded-2xl p-8"
          >
            <h3 className="heading-sm mb-6">Ingredients</h3>
            <ul className="space-y-3">
              {product.ingredients.map((ingredient: string, idx: number) => (
                <li key={idx} className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                  <span className="text-foreground">{ingredient}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Related Products */}
        {product.relatedProducts.length > 0 && (
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h3 className="heading-md mb-8">Related Products</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {product.relatedProducts.map((related: any) => (
                <Link key={related.id} href={`/product/${related.slug}`} className="group">
                  <div className="bg-card rounded-2xl overflow-hidden hover:shadow-lg transition">
                    <div className="relative h-48 bg-card-bg">
                      <Image
                        src={related.image || "/placeholder.svg"}
                        alt={related.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-serif font-bold mb-2 group-hover:text-primary transition">{related.name}</h4>
                      <p className="text-primary font-bold">₹{related.price}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </main>
  )
}
