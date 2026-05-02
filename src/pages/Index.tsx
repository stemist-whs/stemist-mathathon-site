import { useState } from "react";
import { Hero } from "@/components/event/Hero";
import { EventDetails } from "@/components/event/EventDetails";
import { Schedule } from "@/components/event/Schedule";
import { Rounds } from "@/components/event/Rounds";
import { About } from "@/components/event/About";
import { FAQSection } from "@/components/event/FAQSection";
import { Footer } from "@/components/event/Footer";
import { ContactDialog } from "@/components/event/ContactDialog";

const Index = () => {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <main className="min-h-screen bg-background">
      <Hero onContactClick={() => setContactOpen(true)} />
      <EventDetails />
      <Schedule />
      <Rounds />
      <About />
      <FAQSection />
      <Footer />
      <ContactDialog open={contactOpen} onOpenChange={setContactOpen} />
    </main>
  );
};

export default Index;
