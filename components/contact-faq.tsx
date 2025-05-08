"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqItems = [
  {
    question: "Do you take reservations?",
    answer:
      "Yes, we accept reservations for lunch and dinner. You can make a reservation by calling us at (876) 123-4568 or using our online reservation system. We recommend making reservations at least 2-3 days in advance, especially for weekends and holidays.",
  },
  {
    question: "What are your busiest hours?",
    answer:
      "Our busiest hours are typically Friday and Saturday evenings from 6:00 PM to 9:00 PM. If you prefer a quieter dining experience, we recommend visiting us during weekday lunch hours or early dinner service (before 6:00 PM).",
  },
  {
    question: "Is there a dress code?",
    answer:
      "We maintain a casual to smart-casual dress code. While we don't require formal attire, we do ask that guests refrain from wearing beachwear, athletic wear, or clothing with offensive graphics or language.",
  },
  {
    question: "Do you accommodate large groups?",
    answer:
      "Yes, we can accommodate groups of up to 20 people in our main dining area. For larger groups or private events, we offer a separate dining room that can seat up to 40 guests. Please contact us at least one week in advance to arrange large group reservations.",
  },
  {
    question: "Do you offer vegetarian, vegan, or gluten-free options?",
    answer:
      "Yes, we offer several vegetarian and vegan options on our menu. Many of our dishes can also be modified to accommodate gluten-free diets. Please inform your server about any dietary restrictions or allergies, and our chefs will be happy to accommodate your needs.",
  },
  {
    question: "Do you offer takeout or delivery?",
    answer:
      "Yes, we offer both takeout and delivery services. You can place an order by calling us directly or through our website. Delivery is available within a 5-mile radius of our restaurant, with a minimum order of $25.",
  },
  {
    question: "Is your restaurant wheelchair accessible?",
    answer:
      "Yes, our restaurant is fully wheelchair accessible. We have a ramp at the entrance, accessible restrooms, and adequate space between tables to accommodate wheelchairs. If you need any additional assistance, please don't hesitate to let us know.",
  },
]

export default function ContactFAQ() {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Find answers to common questions about our restaurant. If you don't see your question here, please contact
            us directly.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-semibold hover:text-red-500 transition-colors">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
