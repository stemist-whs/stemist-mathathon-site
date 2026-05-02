import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/data/faqs";

export const FAQSection = () => {
  return (
    <section id="faq" className="py-24 px-6 md:px-12 max-w-3xl mx-auto">
      <div className="text-center mb-12">
        <span className="text-xs uppercase tracking-[0.25em] text-primary font-bold">Questions</span>
        <h2 className="font-serif text-5xl md:text-6xl mt-3">
          Frequently <span className="text-gradient">Asked</span>
        </h2>
      </div>

      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((faq, i) => (
          <AccordionItem
            key={i}
            value={`item-${i}`}
            className="glass-card rounded-2xl px-6 border-none data-[state=open]:shadow-[var(--shadow-card)]"
          >
            <AccordionTrigger className="text-left font-semibold text-base hover:no-underline py-5">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <p className="text-center text-sm text-muted-foreground mt-8">
        Have another question?{" "}
        <a href="mailto:ssharda@joinstemist.org" className="text-primary font-semibold hover:underline">
          Email us
        </a>
      </p>
    </section>
  );
};
