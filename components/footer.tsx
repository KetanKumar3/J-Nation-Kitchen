import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="bg-brown-950 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="col-span-1">
            <Link href="/" className="flex items-center mb-4">
              <div className="relative h-12 w-12 mr-2">
                {/* <Image src="/placeholder.svg?key=oi94h" alt="J NATION KITCHEN" fill className="object-contain" /> */}
                <Image src="/jnation.png" alt="J NATION KITCHEN" className="object-cover w-" width={64} height={64}  />
              </div>
              <span className="text-xl font-bold text-white">
                J <span className="text-yellow-500">NATION</span> <span className="text-sm font-normal">KITCHEN</span>
              </span>
            </Link>
            <p className="mb-4">
              Experience authentic Jamaican cuisine with our carefully crafted dishes made from traditional recipes and
              the freshest ingredients.
            </p>
            <div className="flex space-x-4">
              <a href="#" className=" hover:text-red-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className=" hover:text-red-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className=" hover:text-red-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "About", "Menu", "Shop", "Contact", "Reservation"].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase()}`} className=" hover:text-red-400 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-yellow-600 mt-0.5" />
                <span >123 Jamaica Street, Kingston, Jamaica</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-yellow-600" />
                <span >(876) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-yellow-600" />
                <span >info@jnationkitchen.com</span>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Opening Hours</h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span >Monday - Friday</span>
                <span >9:00 AM - 10:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span>10:00 AM - 11:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span >Sunday</span>
                <span>10:00 AM - 9:00 PM</span>
              </li>
            </ul>
            {/* <Button className="mt-4 bg-yellow-500 hover:bg-red-500 text-brown-950 hover:text-white w-full transition-colors">
              Reserve Table
            </Button> */}
          </div>
        </div>

        <div className="border-t border-brown-800 mt-12 pt-8 text-center">
          <p>© {new Date().getFullYear()} J NATION KITCHEN. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
