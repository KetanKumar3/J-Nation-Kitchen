import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ReservationForm from "@/components/reservation-form"
import FoodCategoryIcons from "@/components/food-category-icons"
import TestimonialSlider from "@/components/testimonial-slider"

export default function Home() {
  return (
    <div className="min-h-screen bg-beige-50">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-brown-950 pt-20">
        <div className="container mx-auto px-4 py-12 md:py-24 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 z-10">
            <Image src="/images.png" alt="J NATION KITCHEN" className="object-cover" width={96} height={96} />
            <p className="text-yellow-500 font-medium mb-2">Authentic Jamaican Cuisine</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Welcome to <br />
              <span className="text-yellow-500">J NATION</span> KITCHEN
            </h1>
            <p className="text-gray-300 mb-8 max-w-md">
              Experience the true taste of Jamaica with our carefully crafted dishes made from traditional recipes.
            </p>
            <Button className="bg-yellow-500 hover:bg-red-500 text-brown-950 hover:text-white font-bold px-8 py-6 transition-colors">
              Order Now
            </Button>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <Image
              src="/placeholder.svg?key=vadmc"
              alt="Delicious Jamaican Food"
              width={500}
              height={500}
              className="rounded-lg"
              priority
            />
          </div>
        </div>
       
      </section>

      {/* Food Categories */}
      {/* <FoodCategoryIcons /> */}

      {/* Best Selling Items */}
      <section className="py-12 md:py-16 bg-beige-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-black">Best Selling Items</h2>
            <div className="flex space-x-2">
              <Button variant="outline" size="icon" className="rounded-full border-green-600 text-green-600">
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full border-green-600 text-green-600">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              {
                name: "Rum Punch Cocktail",
                price: 7.99,
                image: "/placeholder.svg?key=n1q6l",
              },
              {
                name: "Jerk Chicken with Rice",
                price: 12.99,
                image: "/placeholder.svg?key=l02yj",
              },
              {
                name: "Ackee and Saltfish",
                price: 14.99,
                image: "/placeholder.svg?key=3b4kz",
              },
              {
                name: "Coconut Rum Mojito",
                price: 8.99,
                image: "/placeholder.svg?key=c7vt2",
              },
            ].map((item, index) => (
              <Card key={index} className="overflow-hidden border-none shadow-md bg-white">
                <CardContent className="p-0">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    width={200}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-medium text-sm md:text-base mb-1">{item.name}</h3>
                    <div className="flex items-center mb-2">
                      {Array(5)
                        .fill(0)
                        .map((_, i) => (
                          <Star key={i} className="h-3 w-3 fill-yellow-500 text-yellow-500" />
                        ))}
                      <span className="text-xs text-gray-500 ml-1">5.0</span>
                    </div>
                    <p className="font-bold text-green-600">${item.price}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Promotional Banners */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-green-600 rounded-lg p-6 col-span-1 flex items-center">
              <div className="mr-4">
                <Image
                  src="/placeholder.svg?key=kc36l"
                  alt="Free Delivery"
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
              <div className="text-white">
                <h3 className="font-bold text-xl mb-1">FREE DELIVERY</h3>
                <p className="text-sm">On all orders over $25</p>
              </div>
            </div>

            <div className="bg-yellow-500 rounded-lg p-6 col-span-2 flex items-center">
              <div className="mr-4 hidden md:block">
                <Image
                  src="/placeholder.svg?key=l7jui"
                  alt="Quality Food"
                  width={120}
                  height={120}
                  className="object-contain"
                />
              </div>
              <div className="text-black">
                <h3 className="font-bold text-xl mb-1">AUTHENTIC JAMAICAN CUISINE</h3>
                <p className="text-sm md:text-base">
                  Our chefs prepare authentic Jamaican dishes using traditional recipes and the freshest ingredients
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Items */}
      <section className="py-12 md:py-16 bg-beige-100">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-black">Our Popular Items</h2>
            <div className="flex space-x-2">
              <Button variant="outline" size="icon" className="rounded-full border-green-600 text-green-600">
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full border-green-600 text-green-600">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <Tabs defaultValue="all" className="mb-8">
            {/* <TabsList className="bg-beige-200 p-1">
              <TabsTrigger value="all" className="data-[state=active]:bg-yellow-500 data-[state=active]:text-black">
                All
              </TabsTrigger>
              <TabsTrigger
                value="breakfast"
                className="data-[state=active]:bg-yellow-500 data-[state=active]:text-black"
              >
                Breakfast
              </TabsTrigger>
              <TabsTrigger value="lunch" className="data-[state=active]:bg-yellow-500 data-[state=active]:text-black">
                Lunch
              </TabsTrigger>
              <TabsTrigger value="dinner" className="data-[state=active]:bg-yellow-500 data-[state=active]:text-black">
                Dinner
              </TabsTrigger>
              <TabsTrigger value="drinks" className="data-[state=active]:bg-yellow-500 data-[state=active]:text-black">
                Drinks
              </TabsTrigger>
            </TabsList> */}

            <TabsContent value="all" className="mt-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {[
                  {
                    name: "Jamaican Patties",
                    price: 3.99,
                    image: "/placeholder.svg?key=125dj",
                  },
                  {
                    name: "Oxtail Stew",
                    price: 16.99,
                    image: "/placeholder.svg?key=ueauk",
                  },
                  {
                    name: "Curry Goat",
                    price: 15.99,
                    image: "/placeholder.svg?height=200&width=200&query=jamaican curry goat",
                  },
                  {
                    name: "Fried Plantains",
                    price: 4.99,
                    image: "/placeholder.svg?height=200&width=200&query=fried plantains",
                  },
                  {
                    name: "Escovitch Fish",
                    price: 14.99,
                    image: "/placeholder.svg?height=200&width=200&query=jamaican escovitch fish",
                  },
                  {
                    name: "Festival Dumplings",
                    price: 3.99,
                    image: "/placeholder.svg?height=200&width=200&query=jamaican festival dumplings",
                  },
                  {
                    name: "Blue Mountain Coffee",
                    price: 4.99,
                    image: "/placeholder.svg?height=200&width=200&query=jamaican blue mountain coffee",
                  },
                  {
                    name: "Jerk Pork",
                    price: 13.99,
                    image: "/placeholder.svg?height=200&width=200&query=jamaican jerk pork",
                  },
                ].map((item, index) => (
                  <Card key={index} className="overflow-hidden border-none shadow-md bg-white">
                    <CardContent className="p-0">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        width={200}
                        height={200}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-4">
                        <h3 className="font-medium text-sm md:text-base mb-1">{item.name}</h3>
                        <div className="flex items-center mb-2">
                          {Array(5)
                            .fill(0)
                            .map((_, i) => (
                              <Star key={i} className="h-3 w-3 fill-yellow-500 text-yellow-500" />
                            ))}
                          <span className="text-xs text-gray-500 ml-1">5.0</span>
                        </div>
                        <p className="font-bold text-green-600">${item.price}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Other tabs would have similar content */}
            <TabsContent value="breakfast" className="mt-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {/* Breakfast items would go here */}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Reservation Section */}
      <section className="py-12 md:py-16 bg-beige-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ReservationForm />

            <div className="bg-brown-950 rounded-lg p-8 flex flex-col justify-center">
              <h3 className="text-yellow-500 text-xl font-bold mb-4">Lorem Epsum dolor</h3>
              <h2 className="text-white text-3xl font-bold mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit  sed do eiusmod
              </h2>
              <p className="text-gray-300 mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <Image
                src="/placeholder.svg?height=200&width=400&query=jamaican restaurant interior with wooden tables"
                alt="Restaurant Interior"
                width={400}
                height={200}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 md:py-16 bg-beige-100">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-12">Why Choose J NATION KITCHEN?</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                title: "Authentic Jamaican Flavors",
                description: "Experience the true taste of Jamaica with our authentic recipes",
                icon: "/placeholder.svg?height=60&width=60&query=jamaican flag icon",
              },
              {
                title: "Quality Ingredients",
                description: "We use only the freshest ingredients for the best flavor",
                icon: "/placeholder.svg?height=60&width=60&query=fresh ingredients icon",
              },
              {
                title: "Fast Delivery",
                description: "Hot and fresh food delivered to your doorstep quickly",
                icon: "/placeholder.svg?height=60&width=60&query=fast delivery icon",
              },
              {
                title: "Friendly Service",
                description: "Our staff provides warm Jamaican hospitality",
                icon: "/placeholder.svg?height=60&width=60&query=friendly service icon",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md">
                  <Image
                    src={item.icon || "/placeholder.svg"}
                    alt={item.title}
                    width={60}
                    height={60}
                    className="w-8 h-8 object-contain"
                  />
                </div>
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialSlider />

      {/* Instagram Feed */}
      {/* <section className="py-8 bg-brown-950">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-5 gap-1">
            {[1, 2, 3, 4, 5].map((item) => (
              <div key={item} className="relative aspect-square overflow-hidden">
                <Image
                  src={`/placeholder.svg?height=200&width=200&query=jamaican food instagram post ${item}`}
                  alt={`Instagram post ${item}`}
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section> */}

      <Footer />
    </div>
  )
}
