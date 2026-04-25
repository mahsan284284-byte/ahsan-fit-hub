import { Dumbbell, Instagram, Facebook, Youtube, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gradient-dark border-t border-border pt-16 pb-8">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <a href="#home" className="flex items-center gap-2 font-display text-2xl tracking-wider mb-4">
              <Dumbbell className="h-7 w-7 text-primary" />
              <span>AHSAN <span className="text-primary">FITNESS</span></span>
            </a>
            <p className="text-muted-foreground max-w-md">
              Helping people achieve their fitness goals naturally through science-backed
              training, real food, and relentless coaching.
            </p>
          </div>

          <div>
            <div className="font-display text-lg tracking-widest mb-4">EXPLORE</div>
            <ul className="space-y-2 text-muted-foreground">
              {["About", "Workouts", "Diet", "BMI", "Contact"].map((l) => (
                <li key={l}>
                  <a href={`#${l.toLowerCase()}`} className="hover:text-primary transition-smooth">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="font-display text-lg tracking-widest mb-4">FOLLOW</div>
            <div className="flex gap-3">
              {[Instagram, Facebook, Youtube, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="w-10 h-10 rounded-lg bg-secondary border border-border flex items-center justify-center hover:bg-gradient-primary hover:border-primary hover:shadow-glow transition-smooth"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-6 text-center text-sm text-muted-foreground">
          © 2026 Ahsan Fitness Hub. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
