import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Sparkles } from "lucide-react";

interface HeroProps {
  onContactClick: () => void;
}

export const Hero = ({ onContactClick }: HeroProps) => {
  return (
    <header className="aurora-bg relative min-h-[92vh] flex flex-col">
      {/* Top nav */}
      <nav className="relative z-10 flex items-center justify-between px-6 md:px-12 py-6">
        <a href="https://www.joinstemist.org/" target="_blank" rel="noreferrer" className="flex items-center gap-2 group">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-[var(--shadow-soft)]">
            <Sparkles className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="font-bold text-lg tracking-tight">
            STEMist <span className="text-muted-foreground font-medium">Education</span>
          </span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#schedule" className="hover:text-primary transition-colors">Schedule</a>
          <a href="#rounds" className="hover:text-primary transition-colors">Rounds</a>
          <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
        </div>
        <Button onClick={onContactClick} variant="cta" size="sm" className="hidden sm:inline-flex">
          Mid-Event Contact
        </Button>
      </nav>

      {/* Hero content */}
      <div className="flex-1 flex flex-col items-center justify-center text-center px-6 pb-20">
        <span className="inline-flex items-center gap-2 rounded-full glass-card px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary mb-8 animate-float-up">
          <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
          STEMist Education presents
        </span>

        <h1 className="font-serif text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] leading-[0.95] mb-6 animate-float-up" style={{ animationDelay: "0.1s" }}>
          <span className="text-gradient">STEMist</span>
          <br />
          <span className="font-normal">Mathathon</span>
        </h1>

        <p className="max-w-2xl text-lg md:text-xl text-muted-foreground mb-10 animate-float-up" style={{ animationDelay: "0.2s" }}>
          A one-day middle school math competition featuring individual, team, and buzzer rounds — hosted by the Bay Area's largest student-run STEM nonprofit.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 mb-12 animate-float-up" style={{ animationDelay: "0.3s" }}>
          <div className="glass-card rounded-2xl px-5 py-3 flex items-center gap-3">
            <Calendar className="h-5 w-5 text-primary" />
            <div className="text-left">
              <div className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Date & Time</div>
              <div className="font-semibold text-sm">Sunday, May 17 · 1–5 PM</div>
            </div>
          </div>
          <div className="glass-card rounded-2xl px-5 py-3 flex items-center gap-3">
            <MapPin className="h-5 w-5 text-accent" />
            <div className="text-left">
              <div className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Location</div>
              <div className="font-semibold text-sm">Newark Library, Newark, CA</div>
            </div>
          </div>
        </div>

        <Button onClick={onContactClick} variant="cta" size="lg" className="animate-float-up" style={{ animationDelay: "0.4s" }}>
          Mid-Event Contact
        </Button>
      </div>
    </header>
  );
};
