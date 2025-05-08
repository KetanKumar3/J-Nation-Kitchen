"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import GalleryModal from "@/components/gallery-modal"

// Gallery image data
const galleryImages = [
  {
    id: 1,
    src: "/placeholder.svg?key=w5aak",
    alt: "Jerk Chicken Dish",
    category: "food",
    title: "Jerk Chicken",
    description: "Our signature jerk chicken, marinated for 24 hours and slow-cooked to perfection.",
  },
  {
    id: 2,
    src: "/placeholder.svg?key=5nf17",
    alt: "Restaurant Interior",
    category: "interior",
    title: "Main Dining Area",
    description: "Our spacious main dining area with comfortable seating and warm lighting.",
  },
  {
    id: 3,
    src: "/placeholder.svg?key=cuf4s",
    alt: "Curry Goat",
    category: "food",
    title: "Curry Goat",
    description: "Tender goat meat slow-cooked in our special curry blend with traditional spices.",
  },
  {
    id: 4,
    src: "/placeholder.svg?key=z0vst",
    alt: "Restaurant Bar",
    category: "interior",
    title: "Bar Area",
    description: "Our well-stocked bar featuring premium Jamaican rums and signature cocktails.",
  },
  {
    id: 5,
    src: "/placeholder.svg?height=600&width=800&query=jamaican chef cooking in restaurant kitchen",
    alt: "Chef Cooking",
    category: "staff",
    title: "Our Chefs at Work",
    description: "Our talented chefs preparing authentic Jamaican dishes with passion and precision.",
  },
  {
    id: 6,
    src: "/placeholder.svg?height=600&width=800&query=jamaican restaurant live music event",
    alt: "Live Music Event",
    category: "events",
    title: "Live Reggae Night",
    description: "Our popular monthly reggae night featuring local musicians and special menu items.",
  },
  {
    id: 7,
    src: "/placeholder.svg?height=600&width=800&query=jamaican ackee and saltfish breakfast",
    alt: "Ackee and Saltfish",
    category: "food",
    title: "Ackee and Saltfish",
    description: "Jamaica's national dish - ackee and saltfish served with fried plantains and festival.",
  },
  {
    id: 8,
    src: "/placeholder.svg?height=600&width=800&query=jamaican restaurant outdoor patio seating",
    alt: "Outdoor Seating",
    category: "interior",
    title: "Outdoor Patio",
    description: "Our beautiful outdoor patio area, perfect for dining on warm evenings.",
  },
  {
    id: 9,
    src: "/placeholder.svg?height=600&width=800&query=jamaican restaurant staff group photo",
    alt: "Restaurant Staff",
    category: "staff",
    title: "Our Team",
    description: "The dedicated team behind J NATION KITCHEN, committed to providing exceptional service.",
  },
  {
    id: 10,
    src: "/placeholder.svg?height=600&width=800&query=jamaican rum punch cocktails",
    alt: "Rum Punch Cocktails",
    category: "food",
    title: "Rum Punch",
    description: "Our signature rum punch cocktails, made with premium Jamaican rum and fresh fruit juices.",
  },
  {
    id: 11,
    src: "/placeholder.svg?height=600&width=800&query=jamaican restaurant private dining room",
    alt: "Private Dining Room",
    category: "interior",
    title: "Private Dining Room",
    description: "Our elegant private dining room, perfect for special occasions and private events.",
  },
  {
    id: 12,
    src: "/placeholder.svg?height=600&width=800&query=jamaican restaurant cooking class event",
    alt: "Cooking Class",
    category: "events",
    title: "Jamaican Cooking Class",
    description: "Our monthly cooking classes where guests learn to prepare authentic Jamaican dishes.",
  },
  {
    id: 13,
    src: "/placeholder.svg?height=600&width=800&query=jamaican oxtail stew with rice",
    alt: "Oxtail Stew",
    category: "food",
    title: "Oxtail Stew",
    description: "Slow-cooked oxtail stew with butter beans, served with rice and peas.",
  },
  {
    id: 14,
    src: "/placeholder.svg?height=600&width=800&query=jamaican restaurant waitstaff serving customers",
    alt: "Waitstaff Serving",
    category: "staff",
    title: "Service Excellence",
    description: "Our professional waitstaff providing attentive service to our guests.",
  },
  {
    id: 15,
    src: "/placeholder.svg?height=600&width=800&query=jamaican restaurant cultural celebration event",
    alt: "Cultural Celebration",
    category: "events",
    title: "Jamaican Independence Day",
    description: "Our annual celebration of Jamaican Independence Day with special menu and performances.",
  },
  {
    id: 16,
    src: "/placeholder.svg?height=600&width=800&query=jamaican festival dumplings and fried plantains",
    alt: "Festival and Plantains",
    category: "food",
    title: "Festival & Plantains",
    description: "Traditional Jamaican festival dumplings and fried plantains, perfect accompaniments to any meal.",
  },
]

export default function GalleryGrid() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedImage, setSelectedImage] = useState<(typeof galleryImages)[0] | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Filter images based on selected category
  const filteredImages =
    selectedCategory === "all" ? galleryImages : galleryImages.filter((img) => img.category === selectedCategory)

  const openModal = (image: (typeof galleryImages)[0]) => {
    setSelectedImage(image)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <div>
      {/* Category Tabs */}
      <Tabs defaultValue="all" className="mb-8">
        <div className="flex justify-center mb-8">
          <TabsList className="bg-beige-200 p-1">
            <TabsTrigger
              value="all"
              onClick={() => setSelectedCategory("all")}
              className="data-[state=active]:bg-yellow-500 data-[state=active]:text-brown-950"
            >
              All
            </TabsTrigger>
            <TabsTrigger
              value="food"
              onClick={() => setSelectedCategory("food")}
              className="data-[state=active]:bg-yellow-500 data-[state=active]:text-brown-950"
            >
              Food & Drinks
            </TabsTrigger>
            <TabsTrigger
              value="interior"
              onClick={() => setSelectedCategory("interior")}
              className="data-[state=active]:bg-yellow-500 data-[state=active]:text-brown-950"
            >
              Restaurant
            </TabsTrigger>
            <TabsTrigger
              value="staff"
              onClick={() => setSelectedCategory("staff")}
              className="data-[state=active]:bg-yellow-500 data-[state=active]:text-brown-950"
            >
              Our Team
            </TabsTrigger>
            <TabsTrigger
              value="events"
              onClick={() => setSelectedCategory("events")}
              className="data-[state=active]:bg-yellow-500 data-[state=active]:text-brown-950"
            >
              Events
            </TabsTrigger>
          </TabsList>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group"
              onClick={() => openModal(image)}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brown-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <h3 className="text-white font-bold text-lg">{image.title}</h3>
                <p className="text-gray-200 text-sm line-clamp-2">{image.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Tabs>

      {/* Load More Button (if needed for pagination) */}
      {filteredImages.length > 12 && (
        <div className="text-center mt-8">
          <Button className="bg-yellow-500 hover:bg-red-500 text-brown-950 hover:text-white transition-colors">
            Load More
          </Button>
        </div>
      )}

      {/* Image Modal */}
      {selectedImage && <GalleryModal isOpen={isModalOpen} onClose={closeModal} image={selectedImage} />}
    </div>
  )
}
