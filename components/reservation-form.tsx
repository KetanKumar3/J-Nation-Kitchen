"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ReservationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
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
      <h2 className="text-2xl font-bold mb-6">Contact Us</h2>

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
            <Label htmlFor="date">Date</Label>
            <Input
              id="date"
              name="date"
              type="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="bg-white"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="time">Time</Label>
            <Select onValueChange={(value) => handleSelectChange("time", value)}>
              <SelectTrigger id="time" className="bg-white">
                <SelectValue placeholder="Select time" />
              </SelectTrigger>
              <SelectContent>
                {["11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM"].map(
                  (time) => (
                    <SelectItem key={time} value={time}>
                      {time}
                    </SelectItem>
                  ),
                )}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="guests">Number of Guests</Label>
            <Select onValueChange={(value) => handleSelectChange("guests", value)}>
              <SelectTrigger id="guests" className="bg-white">
                <SelectValue placeholder="Select guests" />
              </SelectTrigger>
              <SelectContent>
                {["1", "2", "3", "4", "5", "6", "7", "8", "10+"].map((num) => (
                  <SelectItem key={num} value={num}>
                    {num}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">Special Request</Label>
          <textarea
            id="message"
            name="message"
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white"
            placeholder="Any special requests?"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>

        <Button
          type="submit"
          className="w-full bg-yellow-500 hover:bg-red-500 text-brown-950 hover:text-white font-medium transition-colors"
        >
          Submit
        </Button>
      </form>
    </div>
  )
}
