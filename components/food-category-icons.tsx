import Image from "next/image"
import Link from "next/link"

const categories = [
  {
    name: "Jerk Dishes",
    icon: "/placeholder.svg?height=60&width=60&query=jerk chicken icon",
  },
  {
    name: "Seafood",
    icon: "/placeholder.svg?height=60&width=60&query=jamaican seafood icon",
  },
  {
    name: "Breakfast",
    icon: "/placeholder.svg?height=60&width=60&query=jamaican breakfast icon",
  },
  {
    name: "Curries",
    icon: "/placeholder.svg?height=60&width=60&query=jamaican curry icon",
  },
  {
    name: "Drinks",
    icon: "/placeholder.svg?height=60&width=60&query=jamaican drinks icon",
  },
  {
    name: "Desserts",
    icon: "/placeholder.svg?height=60&width=60&query=jamaican desserts icon",
  },
  {
    name: "Sides",
    icon: "/placeholder.svg?height=60&width=60&query=jamaican sides icon",
  },
  {
    name: "Specials",
    icon: "/placeholder.svg?height=60&width=60&query=jamaican specials icon",
  },
]

export default function FoodCategoryIcons() {
  return (
    <section className="py-8 bg-beige-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
          {categories.map((category, index) => (
            <Link
              key={index}
              href={`/category/${category.name.toLowerCase().replace(" ", "-")}`}
              className="flex flex-col items-center group"
            >
              <div className="w-16 h-16 rounded-full bg-beige-100 flex items-center justify-center mb-2 group-hover:bg-yellow-100 transition-colors">
                <Image
                  src={category.icon || "/placeholder.svg"}
                  alt={category.name}
                  width={60}
                  height={60}
                  className="w-8 h-8 object-contain"
                />
              </div>
              <span className="text-xs text-center font-medium">{category.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
