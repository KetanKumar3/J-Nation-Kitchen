import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Gallery | J NATION KITCHEN",
  description: "Browse photos of our restaurant, delicious Jamaican dishes, and special events at J NATION KITCHEN.",
}

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
