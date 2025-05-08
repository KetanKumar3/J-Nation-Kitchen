"use client"

import { useEffect } from "react"
import Image from "next/image"
import { X } from "lucide-react"

interface GalleryModalProps {
  isOpen: boolean
  onClose: () => void
  image: {
    src: string
    alt: string
    title: string
    description: string
  }
}

export default function GalleryModal({ isOpen, onClose, image }: GalleryModalProps) {
  // Close modal on escape key press
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEsc)
      // Prevent scrolling when modal is open
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.removeEventListener("keydown", handleEsc)
      document.body.style.overflow = "auto"
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brown-950/90" onClick={onClose}>
      <div
        className="relative max-w-5xl w-full bg-white rounded-lg overflow-hidden shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-4 right-4 z-10 bg-brown-950/70 hover:bg-red-500 text-white rounded-full p-2 transition-colors"
          onClick={onClose}
        >
          <X className="h-6 w-6" />
        </button>

        <div className="relative h-[60vh]">
          <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-contain" />
        </div>

        <div className="p-6">
          <h3 className="text-2xl font-bold mb-2">{image.title}</h3>
          <p className="text-gray-700">{image.description}</p>
        </div>
      </div>
    </div>
  )
}
