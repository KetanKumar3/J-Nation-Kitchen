import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us | J NATION KITCHEN",
  description: "Learn about our story, our team, and our passion for authentic Jamaican cuisine at J NATION KITCHEN.",
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
