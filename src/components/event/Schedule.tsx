import { schedule } from "@/data/schedule";

export const Schedule = () => {
  return (
    <section id="schedule" className="py-24 px-6 md:px-12 max-w-5xl mx-auto">
      <div className="text-center mb-16">
        <span className="text-xs uppercase tracking-[0.25em] text-primary font-bold">The day of</span>
        <h2 className="font-serif text-5xl md:text-6xl mt-3">
          Contest <span className="italic text-gradient">Schedule</span>
        </h2>
        <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
          Four hours of math, teamwork, and friendly competition.
        </p>
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-[88px] md:left-[140px] top-2 bottom-2 w-px bg-gradient-to-b from-primary/40 via-accent/40 to-highlight/40" />

        <ol className="space-y-3">
          {schedule.map((item, i) => (
            <li
              key={i}
              className="group relative grid grid-cols-[80px_1fr] md:grid-cols-[140px_1fr] gap-4 md:gap-8 items-start"
            >
              {/* Time */}
              <div className="text-right pt-4">
                <span className="font-mono text-sm md:text-base font-semibold text-foreground/70">
                  {item.time}
                </span>
              </div>

              {/* Dot */}
              <div className="absolute left-[80px] md:left-[132px] top-5 z-10">
                <div
                  className={`h-4 w-4 rounded-full border-2 border-background ring-2 transition-transform group-hover:scale-125 ${
                    item.highlight
                      ? "bg-gradient-to-br from-primary to-accent ring-primary/40"
                      : "bg-card ring-border"
                  }`}
                />
              </div>

              {/* Card */}
              <div
                className={`ml-6 md:ml-8 rounded-2xl p-5 md:p-6 transition-all duration-300 group-hover:-translate-y-0.5 ${
                  item.highlight
                    ? "bg-gradient-to-br from-primary/8 to-accent/8 border border-primary/20 shadow-[var(--shadow-card)]"
                    : "glass-card"
                }`}
              >
                <div className="flex items-baseline gap-3 flex-wrap">
                  <h3 className="text-lg md:text-xl font-bold">
                    {item.title}
                  </h3>
                  {item.highlight && (
                    <span className="text-[10px] uppercase tracking-widest font-bold px-2 py-0.5 rounded-full bg-primary/15 text-primary">
                      Round
                    </span>
                  )}
                </div>
                {item.description && (
                  <p className="text-sm text-muted-foreground mt-1.5">{item.description}</p>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};
