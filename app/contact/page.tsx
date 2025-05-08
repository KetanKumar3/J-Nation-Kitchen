import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ContactForm from "@/components/contact-form"
import ContactFAQ from "@/components/contact-faq"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-beige-50">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-brown-950 pt-20">
        <div className="container mx-auto px-4 py-16 md:py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Get In <span className="text-yellow-500">Touch</span>
            </h1>
            <p className="text-gray-300 text-lg mb-8">
              We'd love to hear from you! Reach out with questions, feedback, or to make a reservation.
            </p>
          </div>
        </div>
        
      </section>

      {/* Contact Information */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div>
              <h2 className="text-3xl font-bold mb-8">Contact Information</h2>

              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="bg-yellow-500 p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-brown-950" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Our Location</h3>
                    <p className="text-gray-700">123 Jamaica Street, Kingston, Jamaica</p>
                    <p className="text-gray-700">Located in the heart of downtown, near Central Park</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-yellow-500 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-brown-950" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Phone Number</h3>
                    <p className="text-gray-700">Main: (876) 123-4567</p>
                    <p className="text-gray-700">Reservations: (876) 123-4568</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-yellow-500 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-brown-950" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Email Address</h3>
                    <p className="text-gray-700">General Inquiries: info@jnationkitchen.com</p>
                    <p className="text-gray-700">Reservations: reservations@jnationkitchen.com</p>
                    <p className="text-gray-700">Catering: catering@jnationkitchen.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-yellow-500 p-3 rounded-full mr-4">
                    <Clock className="h-6 w-6 text-brown-950" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Opening Hours</h3>
                    <div className="grid grid-cols-2 gap-2">
                      <p className="text-gray-700">Monday - Friday:</p>
                      <p className="text-gray-700">9:00 AM - 10:00 PM</p>
                      <p className="text-gray-700">Saturday:</p>
                      <p className="text-gray-700">10:00 AM - 11:00 PM</p>
                      <p className="text-gray-700">Sunday:</p>
                      <p className="text-gray-700">10:00 AM - 9:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="font-bold text-lg mb-3">Connect With Us</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-beige-100 hover:bg-red-500 p-3 rounded-full transition-colors group"
                  >
                    <Facebook className="h-6 w-6 text-brown-950 group-hover:text-white" />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-beige-100 hover:bg-red-500 p-3 rounded-full transition-colors group"
                  >
                    <Twitter className="h-6 w-6 text-brown-950 group-hover:text-white" />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-beige-100 hover:bg-red-500 p-3 rounded-full transition-colors group"
                  >
                    <Instagram className="h-6 w-6 text-brown-950 group-hover:text-white" />
                  </a>
                </div>
              </div>

              <div className="bg-beige-100 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-3">Parking Information</h3>
                <p className="text-gray-700 mb-2">
                  Free parking is available in our dedicated lot behind the restaurant.
                </p>
                <p className="text-gray-700">
                  Street parking is also available, and there's a public parking garage one block away.
                </p>
              </div>
            </div>

            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-8 md:py-12 bg-beige-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Find Us</h2>

          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
            <Image src="/placeholder.svg?key=c4anw" alt="J NATION KITCHEN Location Map" fill className="object-cover" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-brown-950 bg-opacity-80 p-4 rounded-lg text-white max-w-md text-center">
                <h3 className="font-bold text-xl mb-2">J NATION KITCHEN</h3>
                <p className="mb-4">123 Jamaica Street, Kingston, Jamaica</p>
                <Button className="bg-yellow-500 hover:bg-red-500 text-brown-950 hover:text-white transition-colors">
                  Get Directions
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <ContactFAQ />

      {/* Call to Action */}
      <section className="py-12 md:py-16 bg-brown-950 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Experience J NATION KITCHEN?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Whether you're joining us for a casual meal, planning a special celebration, or looking to cater an event,
            we're here to make your experience memorable.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-yellow-500 hover:bg-red-500 text-brown-950 hover:text-white font-bold px-8 py-6 transition-colors">
              Make a Reservation
            </Button>
            <Button
              variant="outline"
              className="border-green-600 text-green-600 hover:bg-red-500 hover:border-red-500 hover:text-white font-bold px-8 py-6 transition-colors"
            >
              View Our Menu
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
