import type { Metadata } from "next"
import BlogClientPage from "./BlogClientPage"

export const metadata: Metadata = {
  title: "Blog - FreshSip",
  description: "Read articles about organic juices, health tips, and healthy living.",
}

export default function BlogPage() {
  return <BlogClientPage />
}
