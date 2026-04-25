import dietLoss from "@/assets/diet-loss.jpg";
import dietGain from "@/assets/diet-gain.jpg";
import { Sunrise, Sun, Moon } from "lucide-react";

const dietPlans = [
  {
    title: "Weight Loss Plan",
    img: dietLoss,
    desc: "Calorie-controlled, high protein, simple foods.",
    color: "from-primary to-primary-glow",
    meals: [
      { icon: Sunrise, time: "Breakfast", food: "2 boiled eggs, oats with banana, green tea" },
      { icon: Sun, time: "Lunch", food: "Grilled chicken breast, brown rice, mixed salad" },
      { icon: Moon, time: "Dinner", food: "Lentil soup, vegetables, 1 chapati, yogurt" },
    ],
  },
  {
    title: "Muscle Gain Plan",
    img: dietGain,
    desc: "High calorie, protein-dense, affordable foods.",
    color: "from-primary to-primary-glow",
    meals: [
      { icon: Sunrise, time: "Breakfast", food: "4 egg omelet, peanut butter toast, milk shake" },
      { icon: Sun, time: "Lunch", food: "Beef or chicken curry, 2 chapatis, rice, salad" },
      { icon: Moon, time: "Dinner", food: "Grilled fish/chicken, sweet potato, vegetables, milk" },
    ],
  },
];

export const Diet = () => {
  return (
    <section id="diet" className="py-24 md:py-32">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary text-sm font-bold tracking-widest uppercase">Diet Plans</span>
          <h2 className="font-display text-5xl md:text-7xl mt-4 mb-6">
            Eat to <span className="text-gradient-primary">Win</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Simple, affordable meals that fuel real results — no expensive supplements required.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {dietPlans.map((p) => (
            <div
              key={p.title}
              className="bg-gradient-card border border-border rounded-2xl overflow-hidden shadow-card hover:border-primary/60 hover:shadow-elegant transition-smooth"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="w-full h-full object-cover hover:scale-105 transition-smooth"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                <div className="absolute bottom-4 left-6">
                  <h3 className="font-display text-4xl">{p.title}</h3>
                  <p className="text-muted-foreground text-sm">{p.desc}</p>
                </div>
              </div>

              <div className="p-6 space-y-4">
                {p.meals.map((m) => (
                  <div key={m.time} className="flex gap-4 p-4 rounded-xl bg-background/40 border border-border">
                    <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center shrink-0 shadow-glow">
                      <m.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <div className="font-display text-xl tracking-wide text-primary">{m.time}</div>
                      <div className="text-sm text-muted-foreground">{m.food}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
