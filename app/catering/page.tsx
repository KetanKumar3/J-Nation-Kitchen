"use client";

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import CateringBookingForm from "@/components/catering-booking-form"
import CateringTestimonials from "@/components/catering-testimonials"
import CateringFAQ from "@/components/catering-faq"
import {useRef,useCallback} from 'react'

export default function CateringPage() {

  const bookingFormRef = useRef<HTMLElement | null>(null); // Explicitly type the ref

  const scrollToBookingForm = useCallback(() => {
    bookingFormRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [bookingFormRef]);

  return (
    <div className="min-h-screen bg-beige-50">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-brown-950 pt-20">
        <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 z-10">
           <Image src="/images.png" alt="J NATION KITCHEN" className="object-cover" width={96} height={96} />
            <p className="text-yellow-500 font-medium mb-2">Professional Catering Services</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Authentic Jamaican <br />
              <span className="text-yellow-500">Catering</span> For Any Event
            </h1>
            <p className="text-gray-300 mb-8 max-w-md">
              Bring the vibrant flavors of Jamaica to your next event with our professional catering services. From
              corporate functions to weddings and private parties.
            </p>
            <Button className="bg-yellow-500 hover:bg-red-500 text-brown-950 hover:text-white font-bold px-8 py-6 transition-colors">
              Book Now
            </Button>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <Image
              src="/placeholder.svg?key=23h8d"
              alt="Jamaican Catering Service"
              width={500}
              height={500}
              className="rounded-lg"
              priority
            />
          </div>
        </div>

      </section>

      {/* Services Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Catering Services</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              We offer a range of catering services to suit your needs, from full-service catering with staff to
              drop-off options for more casual events.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Corporate Events",
                description:
                  "Impress your clients and colleagues with our professional catering services for meetings, conferences, and corporate functions.",
                image: "/placeholder.svg?key=geyje",
              },
              {
                title: "Private Parties",
                description:
                  "Celebrate special occasions with family and friends with our custom catering packages for birthdays, anniversaries, and family gatherings.",
                image: "/placeholder.svg?key=ty2tr",
              },
              {
                title: "Weddings",
                description:
                  "Make your special day memorable with our wedding catering services, featuring custom menus and professional service staff.",
                image: "/placeholder.svg?key=h3ubr",
              },
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="relative h-48">
                  <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-700 mb-4">{service.description}</p>
                  <Button
                    variant="outline"
                    className="border-green-600 text-green-600 hover:bg-red-500 hover:border-red-500 hover:text-white transition-colors"
                    onClick={scrollToBookingForm}
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-12 md:py-16 bg-beige-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Catering Packages</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Choose from our carefully curated catering packages or work with our team to create a custom menu for your
              event.
            </p>
          </div>

          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Jamaican Essentials",
                price: "$25",
                description: "Perfect for casual gatherings and smaller events",
                features: [
                  "Jerk Chicken",
                  "Rice and Peas",
                  "Fried Plantains",
                  "Garden Salad",
                  "Jamaican Patties",
                  "Non-alcoholic Beverages",
                ],
                popular: false,
              },
              {
                title: "Island Feast",
                price: "$40",
                description: "Our most popular option for medium to large events",
                features: [
                  "Jerk Chicken & Pork",
                  "Curry Goat",
                  "Rice and Peas",
                  "Fried Plantains",
                  "Festival Dumplings",
                  "Garden Salad",
                  "Jamaican Patties",
                  "Rum Cake",
                  "Non-alcoholic Beverages",
                ],
                popular: true,
              },
              {
                title: "Caribbean Luxury",
                price: "$60",
                description: "Premium selection for special occasions and upscale events",
                features: [
                  "Jerk Chicken, Pork & Fish",
                  "Curry Goat",
                  "Oxtail Stew",
                  "Ackee and Saltfish",
                  "Rice and Peas",
                  "Steamed Vegetables",
                  "Fried Plantains",
                  "Festival Dumplings",
                  "Premium Dessert Selection",
                  "Rum Punch & Non-alcoholic Options",
                ],
                popular: false,
              },
            ].map((pkg, index) => (
              <div
                key={index}
                className={`rounded-lg overflow-hidden shadow-md ${
                  pkg.popular ? "border-2 border-yellow-500 relative bg-white" : "bg-white"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 right-0 bg-yellow-500 text-brown-950 py-1 px-4 font-medium">
                    Most Popular
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{pkg.title}</h3>
                  <p className="text-gray-700 mb-4">{pkg.description}</p>
                  <div className="text-3xl font-bold text-green-600 mb-4">
                    {pkg.price} <span className="text-sm text-gray-500">per person</span>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <Check className="h-5 w-5 text-green-600 mr-2" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full ${
                      pkg.popular
                        ? "bg-yellow-500 hover:bg-red-500 text-brown-950 hover:text-white"
                        : "bg-green-600 hover:bg-red-500 text-white hover:text-white"
                    } transition-colors`}
                  >
                    Select Package
                  </Button>
                </div>
              </div>
            ))}
          </div> */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* ... your package data ... */}
            {[
              {
                title: "Jamaican Essentials",
                price: "$25",
                description: "Perfect for casual gatherings and smaller events",
                features: [
                  "Jerk Chicken",
                  "Rice and Peas",
                  "Fried Plantains",
                  "Garden Salad",
                  "Jamaican Patties",
                  "Non-alcoholic Beverages",
                ],
                popular: false,
              },
              {
                title: "Island Feast",
                price: "$40",
                description: "Our most popular option for medium to large events",
                features: [
                  "Jerk Chicken & Pork",
                  "Curry Goat",
                  "Rice and Peas",
                  "Fried Plantains",
                  "Festival Dumplings",
                  "Garden Salad",
                  "Jamaican Patties",
                  "Rum Cake",
                  "Non-alcoholic Beverages",
                ],
                popular: true,
              },
              {
                title: "Caribbean Luxury",
                price: "$60",
                description: "Premium selection for special occasions and upscale events",
                features: [
                  "Jerk Chicken, Pork & Fish",
                  "Curry Goat",
                  "Oxtail Stew",
                  "Ackee and Saltfish",
                  "Rice and Peas",
                  "Steamed Vegetables",
                  "Fried Plantains",
                  "Festival Dumplings",
                  "Premium Dessert Selection",
                  "Rum Punch & Non-alcoholic Options",
                ],
                popular: false,
              },
            ].map((pkg, index) => (
              <div
                key={index}
                className={`rounded-lg overflow-hidden shadow-md flex flex-col ${ // Added flex and flex-col
                  pkg.popular ? "border-2 border-yellow-500 relative bg-white" : "bg-white"
                  }`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 right-0 bg-yellow-500 text-brown-950 py-1 px-4 font-medium">
                    Most Popular
                  </div>
                )}
                <div className="p-6 flex-grow flex flex-col justify-between"> {/* Added flex-grow and justify-between */}
                  <div>
                    <h3 className="text-xl font-bold mb-2">{pkg.title}</h3>
                    <p className="text-gray-700 mb-4">{pkg.description}</p>
                    <div className="text-3xl font-bold text-green-600 mb-4">
                      {pkg.price} <span className="text-sm text-gray-500">per person</span>
                    </div>
                    <ul className="space-y-2 mb-6">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-center">
                          {/* Assuming you have a Check icon component */}
                          {/* <Check className="h-5 w-5 text-green-600 mr-2" /> */}
                          <Check className="h-5 w-5 text-green-600 mr-2" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button
                    className={`w-full mt-4 ${ // Added mt-4 for a little space above the button
                      pkg.popular
                        ? "bg-yellow-500 hover:bg-red-500 text-brown-950 hover:text-white"
                        : "bg-green-600 hover:bg-red-500 text-white hover:text-white"
                      } transition-colors`}
                  >
                    Select Package
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8 text-gray-700">
            <p>
              All packages require a minimum of 20 guests. Prices may vary based on event location and specific
              requirements.
            </p>
            <p className="mt-2">
              <Button
                variant="link"
                className="text-green-600 hover:text-red-500 transition-colors underline font-medium"
              >
                Contact us for custom packages and special dietary requirements
              </Button>
            </p>
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-12 md:py-16 " ref={bookingFormRef}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Book Our Catering Service</h2>
              <p className="text-gray-700 mb-4">
                Fill out the form below to inquire about our catering services for your upcoming event. Our team will
                get back to you within 24 hours to discuss your requirements in detail.
              </p>
              <p className="text-gray-700 mb-8">
                For urgent inquiries, please call us directly at <span className="font-bold">(876) 123-4567</span>.
              </p>

              <div className="bg-beige-100 rounded-lg p-6 mb-6">
                <h3 className="font-bold text-lg mb-2">Why Choose Our Catering?</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                    <span>Authentic Jamaican cuisine made with fresh, quality ingredients</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                    <span>Flexible packages to accommodate different budgets and preferences</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                    <span>Professional service staff to ensure your event runs smoothly</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                    <span>Special dietary accommodations available (vegetarian, vegan, gluten-free)</span>
                  </li>
                </ul>
              </div>
            </div>

            <CateringBookingForm />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <CateringTestimonials />

      {/* FAQ Section */}
      <CateringFAQ />

      <Footer />
    </div>
  )
}
