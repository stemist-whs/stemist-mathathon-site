import { Brain, Users, Zap } from "lucide-react";

const rounds = [
  {
    icon: Brain,
    name: "Individual Round",
    duration: "40 min",
    desc: "Participants independently solve a series of math problems. Your own reasoning and problem-solving skills will be tested.",
    accent: "from-primary/15 to-primary-glow/15",
    iconColor: "text-primary",
  },
  {
    icon: Users,
    name: "Power Round",
    duration: "45 min",
    desc: "Teams of four collaborate on a small set of challenging problems that build on each other. Emphasizes teamwork, strategy, and deep problem-solving.",
    accent: "from-accent/15 to-pink-300/15",
    iconColor: "text-accent",
  },
  {
    icon: Zap,
    name: "Countdown Round",
    duration: "15 min",
    desc: "The top four individual scorers face off in a buzzer-style bracket — first to two advances, first to three wins the finale. Quick thinking is everything.",
    accent: "from-highlight/15 to-amber-200/15",
    iconColor: "text-highlight",
  },
];

export const Rounds = () => {
  return (
    <section id="rounds" className="py-24 px-6 md:px-12 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <span className="text-xs uppercase tracking-[0.25em] text-primary font-bold">Three rounds</span>
        <h2 className="font-serif text-5xl md:text-6xl mt-3">
          The <span className="text-gradient">Competition</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {rounds.map((r, i) => (
          <div
            key={r.name}
            className={`relative rounded-3xl p-8 bg-gradient-to-br ${r.accent} border border-white/60 backdrop-blur-sm transition-transform duration-300 hover:-translate-y-2`}
          >
            <div className="flex items-center justify-between mb-6">
              <div className="h-14 w-14 rounded-2xl bg-white/80 flex items-center justify-center shadow-[var(--shadow-card)]">
                <r.icon className={`h-7 w-7 ${r.iconColor}`} />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-foreground/60">
                {r.duration}
              </span>
            </div>
            <h3 className="text-2xl font-bold mb-3">{r.name}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{r.desc}</p>
            <div className="absolute top-6 right-6 font-serif text-5xl text-foreground/10 select-none">
              0{i + 1}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
