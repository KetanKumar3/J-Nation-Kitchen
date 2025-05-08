import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us | J NATION KITCHEN",
  description: "Get in touch with J NATION KITCHEN. Find our location, hours, phone number, and send us a message.",
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
