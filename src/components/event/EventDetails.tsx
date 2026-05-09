import { Calendar, Clock, MapPin, Users } from "lucide-react";

const details = [
  { icon: Calendar, label: "Date", value: "Sunday, May 17" },
  { icon: Clock, label: "Time", value: "1:00 – 5:00 PM" },
  { icon: MapPin, label: "Location", value: "Newark Library", sub: "37055 Newark Blvd, Newark, CA 94560" },
  { icon: Users, label: "Who", value: "Elementary & middle school students" },
];

export const EventDetails = () => {
  return (
    <section className="py-20 px-6 md:px-12 max-w-6xl mx-auto">
      <div className="glass-card rounded-3xl p-8 md:p-12 grid grid-cols-2 md:grid-cols-4 gap-8">
        {details.map((d) => (
          <div key={d.label} className="text-center">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 mb-3">
              <d.icon className="h-6 w-6 text-primary" />
            </div>
            <div className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-1">{d.label}</div>
            <div className="font-bold">{d.value}</div>
            {d.sub && <div className="text-xs text-muted-foreground mt-1">{d.sub}</div>}
          </div>
        ))}
      </div>
    </section>
  );
};
