import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { toast } from "@/hooks/use-toast";

export const Contact = () => {
  const [sending, setSending] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      (e.target as HTMLFormElement).reset();
      toast({ title: "Message sent!", description: "We'll get back to you within 24 hours." });
    }, 800);
  };

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary text-sm font-bold tracking-widest uppercase">Contact</span>
          <h2 className="font-display text-5xl md:text-7xl mt-4 mb-6">
            Ready to <span className="text-gradient-primary">Transform?</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Drop us a message — your transformation starts with one conversation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="space-y-4">
            {[
              { icon: Mail, label: "Email", value: "info@ahsanfitnesshub.com" },
              { icon: Phone, label: "Phone", value: "+92 300 1234567" },
              { icon: MapPin, label: "Location", value: "Lahore, Pakistan" },
            ].map((c) => (
              <div key={c.label} className="bg-gradient-card border border-border rounded-2xl p-6 flex gap-4 items-center hover:border-primary/60 transition-smooth">
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow shrink-0">
                  <c.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">{c.label}</div>
                  <div className="font-semibold">{c.value}</div>
                </div>
              </div>
            ))}
            <div className="bg-gradient-primary rounded-2xl p-6 text-primary-foreground shadow-elegant">
              <div className="font-display text-2xl mb-2">Free Consultation</div>
              <p className="text-sm opacity-90">First session is on us. Come see if we're the right fit for your goals.</p>
            </div>
          </div>

          <form onSubmit={onSubmit} className="bg-gradient-card border border-border rounded-2xl p-8 space-y-4 shadow-card">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input id="name" required className="mt-2 bg-background/60 h-12" placeholder="Your full name" />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" required className="mt-2 bg-background/60 h-12" placeholder="you@example.com" />
            </div>
            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" required rows={5} className="mt-2 bg-background/60" placeholder="Tell us about your fitness goals..." />
            </div>
            <Button type="submit" variant="hero" size="lg" className="w-full" disabled={sending}>
              {sending ? "Sending..." : <>Send Message <Send className="ml-1 w-4 h-4" /></>}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
