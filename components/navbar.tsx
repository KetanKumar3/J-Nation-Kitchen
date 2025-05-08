"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone } from "lucide-react"

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Menu", href: "/menu" },
  { name: "Catering", href: "/catering" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-brown-950 shadow-md" : "bg-brown-950/80"}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative mr-2">
              {/* <Image src="/placeholder.svg?key=om64z" alt="J NATION KITCHEN" fill className="object-contain" /> */}
              <Image src="/jnation.png" alt="J NATION KITCHEN" className="object-cover" width={64} height={64} />
            </div>
            <span className="text-xl font-bold text-white">
              J <span className="text-yellow-500">NATION</span> <span className="text-sm font-normal">KITCHEN</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={`text-white hover:text-red-400 font-medium transition-colors ${
                  index === 0 ? "text-yellow-500" : ""
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="text-white hover:text-red-400 hidden md:flex">
              <Phone className="h-5 w-5" />
            </Button>

            <Button className="hidden md:flex bg-yellow-500 hover:bg-red-500 text-brown-950 hover:text-white transition-colors">
              Order Online
            </Button>

            <button className="md:hidden text-white hover:text-red-400" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-brown-950 border-t border-brown-800">
          <div className="container mx-auto px-4 py-4">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={`block py-3 text-white hover:text-red-400 ${index === 0 ? "text-yellow-500" : ""}`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Button className="w-full mt-4 bg-yellow-500 hover:bg-red-500 text-brown-950 hover:text-white transition-colors">
              Order Online
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
