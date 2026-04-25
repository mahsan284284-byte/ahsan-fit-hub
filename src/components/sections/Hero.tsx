import heroImg from "@/assets/hero-gym.jpg";
import { Button } from "@/components/ui/button";
import { ArrowRight, Apple } from "lucide-react";

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt="Athlete lifting barbell in dramatic red lighting"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      </div>

      <div className="container mx-auto relative z-10 pt-24">
        <div className="max-w-3xl animate-fade-in">
          <span className="inline-block px-4 py-1.5 mb-6 rounded-full border border-primary/40 bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase">
            #1 Fitness Hub
          </span>
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl leading-none mb-6">
            Transform Your <span className="text-gradient-primary">Body</span>,
            <br />
            Transform Your <span className="text-gradient-primary">Life</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl">
            Train smarter. Eat better. Become unstoppable. Join Ahsan Fitness Hub
            and unlock the strongest version of yourself.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild variant="hero" size="xl">
              <a href="#workouts">
                Start Your Journey <ArrowRight className="ml-1" />
              </a>
            </Button>
            <Button asChild variant="outlineGlow" size="xl">
              <a href="#diet">
                <Apple className="mr-1" /> Get Diet Plan
              </a>
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg">
            {[
              { n: "500+", l: "Members" },
              { n: "10+", l: "Years Exp" },
              { n: "98%", l: "Success" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display text-4xl md:text-5xl text-primary">{s.n}</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  );
};
