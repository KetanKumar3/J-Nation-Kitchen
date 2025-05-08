import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Catering Services | J NATION KITCHEN",
  description:
    "Professional Jamaican catering services for corporate events, weddings, and private parties. Authentic cuisine made with the freshest ingredients.",
}

export default function CateringLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
