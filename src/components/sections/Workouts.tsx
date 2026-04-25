import { useState } from "react";
import beginnerImg from "@/assets/workout-beginner.jpg";
import intermediateImg from "@/assets/workout-intermediate.jpg";
import advancedImg from "@/assets/workout-advanced.jpg";
import { Calendar, Dumbbell } from "lucide-react";

type Plan = {
  level: string;
  img: string;
  tagline: string;
  schedule: string;
  exercises: { name: string; sets: string; reps: string }[];
};

const plans: Plan[] = [
  {
    level: "Beginner",
    img: beginnerImg,
    tagline: "Build the foundation. Master your bodyweight.",
    schedule: "3 days / week · 30–40 min",
    exercises: [
      { name: "Push-ups", sets: "3", reps: "10–12" },
      { name: "Bodyweight Squats", sets: "3", reps: "15" },
      { name: "Plank Hold", sets: "3", reps: "30 sec" },
      { name: "Lunges", sets: "3", reps: "10 / leg" },
      { name: "Glute Bridges", sets: "3", reps: "12" },
    ],
  },
  {
    level: "Intermediate",
    img: intermediateImg,
    tagline: "Add resistance. Build real strength.",
    schedule: "4–5 days / week · 45–60 min",
    exercises: [
      { name: "Pull-ups", sets: "4", reps: "6–8" },
      { name: "Dumbbell Bench Press", sets: "4", reps: "8–10" },
      { name: "Goblet Squats", sets: "4", reps: "12" },
      { name: "Bent-over Rows", sets: "4", reps: "10" },
      { name: "Plank Variations", sets: "3", reps: "60 sec" },
    ],
  },
  {
    level: "Advanced",
    img: advancedImg,
    tagline: "Push the limit. Sculpt your physique.",
    schedule: "5–6 days / week · 60–90 min",
    exercises: [
      { name: "Barbell Deadlift", sets: "5", reps: "5" },
      { name: "Barbell Squat", sets: "5", reps: "5–8" },
      { name: "Weighted Pull-ups", sets: "4", reps: "6–10" },
      { name: "Bench Press", sets: "5", reps: "5–8" },
      { name: "Overhead Press", sets: "4", reps: "8" },
    ],
  },
];

export const Workouts = () => {
  const [active, setActive] = useState(0);
  const plan = plans[active];

  return (
    <section id="workouts" className="py-24 md:py-32 bg-gradient-dark">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-primary text-sm font-bold tracking-widest uppercase">Workout Plans</span>
          <h2 className="font-display text-5xl md:text-7xl mt-4 mb-6">
            Train Like a <span className="text-gradient-primary">Beast</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Structured plans for every level. Pick your path and start grinding today.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {plans.map((p, i) => (
            <button
              key={p.level}
              onClick={() => setActive(i)}
              className={`px-6 py-3 rounded-full font-semibold tracking-wide transition-smooth ${
                active === i
                  ? "bg-gradient-primary text-primary-foreground shadow-glow"
                  : "bg-secondary text-foreground hover:bg-secondary/70"
              }`}
            >
              {p.level}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center animate-fade-in" key={active}>
          <div className="relative rounded-2xl overflow-hidden shadow-elegant group">
            <img
              src={plan.img}
              alt={`${plan.level} workout training`}
              loading="lazy"
              width={1024}
              height={768}
              className="w-full h-[500px] object-cover group-hover:scale-105 transition-smooth"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="font-display text-5xl text-foreground mb-2">{plan.level}</h3>
              <p className="text-foreground/80">{plan.tagline}</p>
            </div>
          </div>

          <div className="bg-gradient-card border border-border rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6 text-primary">
              <Calendar className="w-5 h-5" />
              <span className="font-semibold tracking-wide">{plan.schedule}</span>
            </div>

            <div className="space-y-3">
              {plan.exercises.map((ex) => (
                <div
                  key={ex.name}
                  className="flex items-center justify-between p-4 rounded-xl bg-background/40 border border-border hover:border-primary/50 transition-smooth"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Dumbbell className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-semibold">{ex.name}</span>
                  </div>
                  <div className="flex gap-4 text-sm">
                    <span className="text-muted-foreground">
                      <span className="text-primary font-bold">{ex.sets}</span> sets
                    </span>
                    <span className="text-muted-foreground">
                      <span className="text-primary font-bold">{ex.reps}</span> reps
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
