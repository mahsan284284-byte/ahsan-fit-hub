import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Ali Raza",
    role: "Lost 18 kg in 6 months",
    text: "Ahsan's plan changed my life. The diet was simple, the workouts were tough but doable. I never felt like I was on a diet — just eating real food.",
  },
  {
    name: "Sana Malik",
    role: "Gained strength & confidence",
    text: "I was a complete beginner. Ahsan made me feel comfortable and built me up gradually. Six months in and I'm doing pull-ups I never thought possible.",
  },
  {
    name: "Bilal Ahmed",
    role: "Built 8 kg lean muscle",
    text: "Natural muscle gain without crazy supplements? I didn't believe it until I tried. The program is structured, the coaching is top-tier.",
  },
];

export const Testimonials = () => {
  return (
    <section className="py-24 md:py-32 bg-gradient-dark">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary text-sm font-bold tracking-widest uppercase">Testimonials</span>
          <h2 className="font-display text-5xl md:text-7xl mt-4 mb-6">
            Real People. <span className="text-gradient-primary">Real Results.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div
              key={r.name}
              className="bg-gradient-card border border-border rounded-2xl p-8 relative hover:border-primary/60 hover:-translate-y-2 transition-smooth shadow-card"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <Quote className="w-10 h-10 text-primary/30 mb-4" />
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground/90 leading-relaxed mb-6">"{r.text}"</p>
              <div className="border-t border-border pt-4">
                <div className="font-bold">{r.name}</div>
                <div className="text-sm text-primary">{r.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
