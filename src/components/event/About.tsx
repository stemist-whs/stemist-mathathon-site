export const About = () => {
  return (
    <section className="py-24 px-6 md:px-12 max-w-5xl mx-auto">
      <div className="glass-card rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
        <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-primary/20 blur-3xl" />
        <div className="relative">
          <span className="text-xs uppercase tracking-[0.25em] text-accent font-bold">About the host</span>
          <h2 className="font-serif text-4xl md:text-5xl mt-3 mb-6">
            <span className="text-gradient">STEMist Education</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            STEMist Education is an international, student-run{" "}
            <span className="font-semibold text-foreground">501(c)(3) nonprofit</span> based in the Bay
            Area, dedicated to accelerating interest in Science, Technology, Engineering, and Math for
            young students through engaging courses, competitions, and community events.
          </p>
          <a
            href="https://www.joinstemist.org/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 mt-8 font-semibold text-primary hover:gap-3 transition-all"
          >
            Visit joinstemist.org →
          </a>
        </div>
      </div>
    </section>
  );
};
