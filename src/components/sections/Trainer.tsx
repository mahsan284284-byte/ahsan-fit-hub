import trainerImg from "@/assets/trainer-ahsan.jpg";
import { Award, Users, Flame } from "lucide-react";

export const Trainer = () => {
  return (
    <section id="trainer" className="py-24 md:py-32">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-primary rounded-3xl blur-2xl opacity-30" />
            <div className="relative rounded-3xl overflow-hidden shadow-elegant border border-border">
              <img
                src={trainerImg}
                alt="Ahsan, head fitness trainer"
                loading="lazy"
                width={1024}
                height={1024}
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background to-transparent">
                <div className="font-display text-4xl">Ahsan Khan</div>
                <div className="text-primary font-semibold tracking-wide">Head Coach & Founder</div>
              </div>
            </div>
          </div>

          <div>
            <span className="text-primary text-sm font-bold tracking-widest uppercase">Meet The Trainer</span>
            <h2 className="font-display text-5xl md:text-7xl mt-4 mb-6">
              Trained By a <span className="text-gradient-primary">Pro</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              With over a decade of experience in strength and conditioning, Ahsan
              has helped hundreds transform their bodies and mindsets — naturally.
              His philosophy is simple: discipline, consistency, and proper nutrition
              beat shortcuts every single time.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Certified in personal training, sports nutrition, and bodybuilding,
              Ahsan personally designs every plan to fit your lifestyle and goals.
            </p>

            <div className="grid grid-cols-3 gap-4">
              {[
                { icon: Users, n: "500+", l: "Clients" },
                { icon: Award, n: "10+", l: "Years" },
                { icon: Flame, n: "5", l: "Certs" },
              ].map((s) => (
                <div key={s.l} className="bg-gradient-card border border-border rounded-xl p-5 text-center hover:border-primary/60 transition-smooth">
                  <s.icon className="w-7 h-7 text-primary mx-auto mb-2" />
                  <div className="font-display text-3xl">{s.n}</div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
