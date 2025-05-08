import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import GalleryGrid from "@/components/gallery-grid"

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-beige-50">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-brown-950 pt-20">
        <div className="container mx-auto px-4 py-16 md:py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="text-yellow-500">Gallery</span>
            </h1>
            <p className="text-gray-300 text-lg mb-8">
              Take a visual journey through our restaurant, delicious dishes, and special events
            </p>
          </div>
        </div>
       
      </section>

      {/* Gallery Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <GalleryGrid />
        </div>
      </section>

      {/* Instagram Feed Teaser */}
      {/* <section className="py-12 md:py-16 bg-beige-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Follow Us on Instagram</h2>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            Stay updated with our latest dishes, events, and special offers by following us on Instagram.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 max-w-5xl mx-auto">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="relative aspect-square overflow-hidden rounded-md group">
                <Image
                  src={`/placeholder.svg?key=cljov&height=200&width=200&query=jamaican food instagram post ${item}`}
                  alt={`Instagram post ${item}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-brown-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-medium">@jnationkitchen</span>
                </div>
              </div>
            ))}
          </div>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-8 text-green-600 hover:text-red-500 font-medium transition-colors"
          >
            View More on Instagram
          </a>
        </div>
      </section> */}

      <Footer />
    </div>
  )
}
