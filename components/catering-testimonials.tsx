"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    name: "Jennifer Roberts",
    role: "Corporate Event Planner",
    text: "J NATION KITCHEN catered our company's annual conference, and they were absolutely fantastic. The food was delicious, the presentation was beautiful, and the staff was professional and attentive. Our attendees couldn't stop raving about the jerk chicken and curry goat!",
    image: "/professional-woman-headshot.png",
    rating: 5,
  },
  {
    name: "Michael Thompson",
    role: "Wedding Client",
    text: "We chose J NATION KITCHEN for our wedding reception, and it was the best decision. They created a customized menu that perfectly blended traditional Jamaican flavors with our personal preferences. Our guests were impressed by both the quality and quantity of the food. The service was impeccable!",
    image: "/placeholder.svg?key=cv18z",
    rating: 5,
  },
  {
    name: "Sarah Johnson",
    role: "Birthday Party Host",
    text: "I hired J NATION KITCHEN to cater my husband's 40th birthday party, and they exceeded all expectations. From the initial consultation to the day of the event, they were professional, responsive, and accommodating. The food was absolutely delicious, and they even created a special rum punch that was a huge hit!",
    image: "/placeholder.svg?height=100&width=100&query=smiling woman casual headshot",
    rating: 5,
  },
]

export default function CateringTestimonials() {
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
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">What Our Catering Clients Say</h2>

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
                        <div className="w-16 h-16 relative rounded-full overflow-hidden mr-4">
                          <Image
                            src={testimonial.image || "/placeholder.svg"}
                            alt={testimonial.name}
                            fill
                            className="object-cover"
                          />
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
