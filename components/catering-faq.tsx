"use client"

import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqItems = [
  {
    question: "How far in advance should I book catering services?",
    answer:
      "We recommend booking our catering services at least 2-4 weeks in advance for smaller events and 1-3 months for larger events like weddings or corporate functions. For peak seasons (summer months and holidays), we suggest booking even earlier to ensure availability.",
  },
  {
    question: "What is the minimum number of guests required for catering?",
    answer:
      "Our standard catering packages require a minimum of 20 guests. For smaller groups, we offer special mini-catering options or family-style takeaway packages. Please contact us for more details on smaller group options.",
  },
  {
    question: "Can you accommodate dietary restrictions and special requests?",
    answer:
      "We can accommodate vegetarian, vegan, gluten-free, and other dietary restrictions. We also offer customized menus to meet your specific preferences. Please mention any dietary requirements or special requests when you make your booking, and our chef will create appropriate options.",
  },
  {
    question: "Do you provide service staff for catering events?",
    answer:
      "Yes, we offer full-service catering that includes professional service staff to set up, serve, and clean up. The number of staff provided depends on the size of your event and service style. Staff service is included in our premium packages and available as an add-on for our standard packages.",
  },
  {
    question: "What is included in your catering packages?",
    answer:
      "Our basic catering packages include food preparation, delivery, setup, serving equipment, and disposable tableware. Premium packages also include professional service staff, premium serving equipment, and cleanup. We can also provide add-ons like bar service, specialty beverages, custom desserts, and more.",
  },
  {
    question: "Do you require a deposit to book catering services?",
    answer:
      "Yes, we require a 50% deposit to secure your catering date. The remaining balance is due 7 days before the event. For events booked with less than 2 weeks' notice, full payment is required at the time of booking.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "Cancellations made more than 14 days before the event will receive a full refund of the deposit minus a 10% administrative fee. Cancellations made 7-14 days before will receive a 50% refund of the deposit. Cancellations made less than 7 days before will not be eligible for a refund. We understand that circumstances change, and we'll do our best to work with you if you need to reschedule.",
  },
]

export default function CateringFAQ() {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Find answers to common questions about our catering services. If you don't see your question here, please
            contact us directly.
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

        <div className="text-center mt-8">
          <p className="text-gray-700 mb-4">Have more questions or ready to discuss your event details?</p>
          <Button className="bg-yellow-500 hover:bg-red-500 text-brown-950 hover:text-white transition-colors">
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  )
}
