import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqItems = [
    {
        question: "What age groups do you serve?",
        answer: "We cater to children aged 5–14, grouping them into appropriate levels for focused learning."
    },
    {
        question: "How long does each abacus level take?",
        answer: "Each level typically spans 4–6 weeks, based on individual progress."
    },
    {
        question: "Are classes in-person only?",
        answer: "Yes, we currently offer in-person classes at both Shivamogga branches."
    },
    {
        question: "Can parents sit in on classes?",
        answer: "Parents are welcome to observe demo sessions by appointment."
    },
    {
        question: "What makes Creative Abacus Academy different?",
        answer: "Our ISO certification, experienced trainers, and championship focus set us apart as the best abacus center in Shivamogga."
    }
]

export function Faq() {
  return (
    <section id="faq" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">FAQ</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Frequently Asked Questions</h2>
        </div>
        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index+1}`}>
                    <AccordionTrigger className="text-lg font-semibold text-left">{item.question}</AccordionTrigger>
                    <AccordionContent className="text-base text-muted-foreground">
                    {item.answer}
                    </AccordionContent>
                </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
