"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"

export default function CateringBookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventDate: "",
    eventTime: "",
    location: "",
    guests: "",
    packageType: "",
    menu: [],
    budget: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Here you would typically send the data to your backend
  }

  return (
    <div className="bg-beige-200 rounded-lg p-8 shadow-md">
      <h2 className="text-2xl font-bold mb-6">Catering Inquiry Form</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              required
              className="bg-white"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Your email"
              value={formData.email}
              onChange={handleChange}
              required
              className="bg-white"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              name="phone"
              placeholder="Your phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="bg-white"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="eventDate">Event Date</Label>
            <Input
              id="eventDate"
              name="eventDate"
              type="date"
              value={formData.eventDate}
              onChange={handleChange}
              required
              className="bg-white"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="eventTime">Event Time</Label>
            <Input
              id="eventTime"
              name="eventTime"
              type="time"
              value={formData.eventTime}
              onChange={handleChange}
              required
              className="bg-white"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="location">Event Location</Label>
            <Input
              id="location"
              name="location"
              placeholder="Address or venue name"
              value={formData.location}
              onChange={handleChange}
              required
              className="bg-white"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="guests">Number of Guests</Label>
            <Select onValueChange={(value) => handleSelectChange("guests", value)}>
              <SelectTrigger id="guests" className="bg-white">
                <SelectValue placeholder="Select guests" />
              </SelectTrigger>
              <SelectContent>
                {["20-50", "51-100", "101-150", "151-200", "200+"]}
                {["20-50", "51-100", "101-150", "151-200", "200+"].map((option) => (
                  <SelectItem key={option} value={option}>
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="packageType">Package Preference</Label>
            <Select onValueChange={(value) => handleSelectChange("packageType", value)}>
              <SelectTrigger id="packageType" className="bg-white">
                <SelectValue placeholder="Select package" />
              </SelectTrigger>
              <SelectContent>
                {["Jamaican Essentials", "Island Feast", "Caribbean Luxury", "Custom Package", "Not sure yet"].map(
                  (option) => (
                    <SelectItem key={option} value={option}>
                      {option}
                    </SelectItem>
                  ),
                )}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="budget">Budget Range (per person)</Label>
            <Select onValueChange={(value) => handleSelectChange("budget", value)}>
              <SelectTrigger id="budget" className="bg-white">
                <SelectValue placeholder="Select budget" />
              </SelectTrigger>
              <SelectContent>
                {["$15-$25", "$25-$40", "$40-$60", "$60+", "Not sure yet"].map((option) => (
                  <SelectItem key={option} value={option}>
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-2">
          <Label>Dietary Preferences/Restrictions</Label>
          <div className="grid grid-cols-2 gap-2 mt-2">
            {[
              { id: "vegetarian", label: "Vegetarian Options" },
              { id: "vegan", label: "Vegan Options" },
              { id: "gluten-free", label: "Gluten-Free Options" },
              { id: "nut-free", label: "Nut-Free Options" },
            ].map((option) => (
              <div key={option.id} className="flex items-center space-x-2">
                <Checkbox id={option.id} />
                <Label htmlFor={option.id} className="font-normal text-sm">
                  {option.label}
                </Label>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">Additional Information</Label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white"
            placeholder="Please provide any additional details about your event, specific menu requests, or questions you may have."
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>

        <Button
          type="submit"
          className="w-full bg-yellow-500 hover:bg-red-500 text-brown-950 hover:text-white font-medium transition-colors"
        >
          Submit Inquiry
        </Button>

        <p className="text-xs text-gray-500 text-center">
          By submitting this form, you agree to be contacted regarding your catering inquiry. We typically respond
          within 24 hours.
        </p>
      </form>
    </div>
  )
}
