"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

const testimonials = [
  {
    name: "Marcus Johnson",
    role: "Regular Customer",
    text: "The jerk chicken here is absolutely amazing! Authentic Jamaican flavors that remind me of home. The staff is friendly and the atmosphere is great.",
    rating: 5,
  },
  {
    name: "Sarah Williams",
    role: "Food Blogger",
    text: "I've tried Jamaican food all over the city, and J NATION KITCHEN is by far the best. Their curry goat is perfectly seasoned and the plantains are always cooked to perfection.",
    rating: 5,
  },
  {
    name: "David Thompson",
    role: "First-time Visitor",
    text: "Visited for the first time last weekend and was blown away by the flavors. The rum punch cocktail is a must-try! Will definitely be coming back.",
    rating: 5,
  },
]

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-12 md:py-16 bg-beige-100">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-12">What Our Customers Say</h2>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <Card className="border-none shadow-md bg-white">
                    <CardContent className="p-8">
                      <div className="flex items-center mb-4">
                        {Array(testimonial.rating)
                          .fill(0)
                          .map((_, i) => (
                            <Star key={i} className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                          ))}
                      </div>
                      <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                      <div className="flex items-center">
                        <div className="w-12 h-12 rounded-full bg-green-600 mr-4 flex items-center justify-center text-white font-bold">
                          {testimonial.name.charAt(0)}
                        </div>
                        <div>
                          <h4 className="font-semibold">{testimonial.name}</h4>
                          <p className="text-gray-500 text-sm">{testimonial.role}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <Button
            variant="outline"
            size="icon"
            className="absolute top-1/2 -left-4 -translate-y-1/2 rounded-full border-green-600 text-green-600 hover:bg-red-500 hover:border-red-500 hover:text-white bg-white transition-colors"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute top-1/2 -right-4 -translate-y-1/2 rounded-full border-green-600 text-green-600 hover:bg-red-500 hover:border-red-500 hover:text-white bg-white transition-colors"
            onClick={nextSlide}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
