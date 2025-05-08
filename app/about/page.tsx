import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-beige-50">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-brown-950 pt-20">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="text-yellow-500">Story</span>
            </h1>
            <p className="text-gray-300 text-lg mb-8">
              Bringing authentic Jamaican flavors and culture to your neighborhood since 2015
            </p>
          </div>
        </div>
        
      </section>

      {/* Our Journey */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Journey</h2>
              <p className="text-gray-700 mb-4">
                J NATION KITCHEN was born from a passion for sharing authentic Jamaican cuisine and culture. Our
                founder, Chef Marcus, grew up in Kingston, Jamaica, where he learned traditional cooking techniques from
                his grandmother.
              </p>
              <p className="text-gray-700 mb-4">
                After moving to the United States and working in several high-end restaurants, Chef Marcus decided to
                bring the flavors of his homeland to a wider audience. In 2015, J NATION KITCHEN opened its doors with a
                mission to serve authentic Jamaican food made with love and respect for tradition.
              </p>
              <p className="text-gray-700">
                Today, we continue to honor those traditions while adding our own creative touch to classic Jamaican
                dishes.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image src="/placeholder.svg?key=lr3mm" alt="Our Journey" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-12 md:py-16 bg-beige-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Meet Our Team</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Chef Marcus Johnson",
                role: "Founder & Head Chef",
                bio: "With over 20 years of culinary experience, Chef Marcus brings authentic Jamaican flavors to every dish.",
                image: "/placeholder.svg?key=gt4ql",
              },
              {
                name: "Sophia Williams",
                role: "Executive Chef",
                bio: "Trained in Kingston, Sophia specializes in traditional Jamaican cuisine with a modern twist.",
                image: "/placeholder.svg?key=n2np3",
              },
              {
                name: "David Thompson",
                role: "Restaurant Manager",
                bio: "David ensures that every guest at J NATION KITCHEN has an exceptional dining experience.",
                image: "/restaurant-manager-portrait.png",
              },
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="relative h-64">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-green-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-700">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Authenticity",
                description:
                  "We stay true to traditional Jamaican recipes and cooking methods, using authentic ingredients to create genuine flavors.",
                icon: "/placeholder.svg?key=8a0de",
              },
              {
                title: "Community",
                description:
                  "We believe in creating a warm, welcoming space where people can come together to enjoy good food and good company.",
                icon: "/community-icon.png",
              },
              {
                title: "Quality",
                description:
                  "We source the freshest ingredients and prepare everything with care to ensure the highest quality in every dish we serve.",
                icon: "/placeholder.svg?key=1khox",
              },
            ].map((value, index) => (
              <div key={index} className="text-center p-6 bg-beige-50 rounded-lg border border-beige-200">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md">
                  <Image
                    src={value.icon || "/placeholder.svg"}
                    alt={value.title}
                    width={60}
                    height={60}
                    className="w-8 h-8 object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-700">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Jamaican Cuisine */}
      <section className="py-12 md:py-16 bg-brown-950 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Jamaican Cuisine</h2>
              <p className="text-gray-300 mb-4">
                Jamaican cuisine is a vibrant fusion of flavors and techniques from various cultures, including African,
                European, Indian, and Chinese influences. This diverse culinary heritage has created a unique food
                culture that is distinctly Jamaican.
              </p>
              <p className="text-gray-300 mb-4">
                At J NATION KITCHEN, we celebrate this rich culinary tradition with dishes like jerk chicken, curry
                goat, ackee and saltfish, and oxtail stew. Our recipes use authentic spices and cooking methods to bring
                the true taste of Jamaica to your plate.
              </p>
              <p className="text-gray-300">
                We invite you to experience the bold flavors, aromatic spices, and warm hospitality that define Jamaican
                cuisine at J NATION KITCHEN.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-40 rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=200&width=200&query=jerk chicken jamaican dish"
                  alt="Jerk Chicken"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-40 rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=200&width=200&query=ackee and saltfish jamaican dish"
                  alt="Ackee and Saltfish"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-40 rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=200&width=200&query=curry goat jamaican dish"
                  alt="Curry Goat"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-40 rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=200&width=200&query=jamaican rum punch cocktail"
                  alt="Rum Punch"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Restaurant Interior */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Restaurant</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative h-64 md:h-80 rounded-lg overflow-hidden col-span-2">
              <Image
                src="/placeholder.svg?height=400&width=800&query=jamaican restaurant interior with wooden tables and yellow accents"
                alt="Restaurant Interior"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=400&query=jamaican restaurant bar with rum bottles"
                alt="Restaurant Bar"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=400&query=jamaican restaurant outdoor patio seating"
                alt="Outdoor Seating"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-64 md:h-80 rounded-lg overflow-hidden col-span-2">
              <Image
                src="/placeholder.svg?height=400&width=800&query=jamaican restaurant private dining room with wooden decor"
                alt="Private Dining"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 md:py-16 bg-beige-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Come Experience J NATION KITCHEN</h2>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            We invite you to visit us and experience the authentic flavors of Jamaica in a warm, welcoming atmosphere.
            Whether you're joining us for a casual meal or a special celebration, we look forward to serving you.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            {/* <Button className="bg-yellow-500 hover:bg-red-500 text-brown-950 hover:text-white font-bold px-8 py-6 transition-colors">
              Reserve a Table
            </Button> */}
            <Link href="/menu">
              <Button
                variant="outline"
                className="border-green-600 text-green-600 hover:bg-red-500 hover:border-red-500 hover:text-white font-bold px-8 py-6 transition-colors"
              >
                View Our Menu <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
