import { Target, Heart, Trophy } from "lucide-react";

const values = [
  { icon: Target, title: "Our Mission", desc: "Helping people achieve fitness goals naturally — without shortcuts, without supplements, just hard work and smart training." },
  { icon: Heart, title: "Our Approach", desc: "Holistic transformation through balanced nutrition, structured training and mindset coaching for sustainable results." },
  { icon: Trophy, title: "Our Promise", desc: "Real results with real methods. Every plan is built around your body, your schedule and your goals." },
];

export const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary text-sm font-bold tracking-widest uppercase">About Us</span>
          <h2 className="font-display text-5xl md:text-7xl mt-4 mb-6">
            Built for <span className="text-gradient-primary">Champions</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Ahsan Fitness Hub is more than a gym — it's a movement. We empower
            everyday people to achieve extraordinary transformations through
            science-backed training and natural nutrition.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {values.map((v, i) => (
            <div
              key={v.title}
              className="bg-gradient-card border border-border rounded-2xl p-8 hover:border-primary/60 transition-smooth hover:-translate-y-2 shadow-card group"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:shadow-glow transition-smooth">
                <v.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-smooth" />
              </div>
              <h3 className="font-display text-2xl mb-3 tracking-wide">{v.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
