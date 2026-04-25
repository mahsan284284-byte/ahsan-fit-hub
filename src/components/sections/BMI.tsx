import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Activity } from "lucide-react";

export const BMI = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [result, setResult] = useState<{ bmi: string; category: string; color: string } | null>(null);

  const calc = (e: React.FormEvent) => {
    e.preventDefault();
    const h = parseFloat(height) / 100;
    const w = parseFloat(weight);
    if (!h || !w) return;
    const bmi = w / (h * h);
    let category = "", color = "";
    if (bmi < 18.5) { category = "Underweight"; color = "text-blue-400"; }
    else if (bmi < 25) { category = "Normal"; color = "text-green-400"; }
    else if (bmi < 30) { category = "Overweight"; color = "text-yellow-400"; }
    else { category = "Obese"; color = "text-primary"; }
    setResult({ bmi: bmi.toFixed(1), category, color });
  };

  return (
    <section id="bmi" className="py-24 md:py-32 bg-gradient-dark">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-primary text-sm font-bold tracking-widest uppercase">BMI Calculator</span>
          <h2 className="font-display text-5xl md:text-7xl mt-4 mb-6">
            Know Your <span className="text-gradient-primary">Numbers</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Track your Body Mass Index and set your transformation goal.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-center bg-gradient-card border border-border rounded-2xl p-8 md:p-12 shadow-elegant">
          <form onSubmit={calc} className="space-y-5">
            <div>
              <Label htmlFor="height" className="text-foreground/90">Height (cm)</Label>
              <Input
                id="height"
                type="number"
                placeholder="170"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                className="mt-2 bg-background/60 border-border h-12"
                required
              />
            </div>
            <div>
              <Label htmlFor="weight" className="text-foreground/90">Weight (kg)</Label>
              <Input
                id="weight"
                type="number"
                placeholder="70"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="mt-2 bg-background/60 border-border h-12"
                required
              />
            </div>
            <Button type="submit" variant="hero" size="lg" className="w-full">
              Calculate BMI
            </Button>
          </form>

          <div className="text-center">
            <div className="w-40 h-40 mx-auto rounded-full border-4 border-primary/30 flex items-center justify-center mb-6 relative">
              <div className="absolute inset-0 rounded-full bg-primary/10 animate-pulse-glow" />
              {result ? (
                <div className="relative">
                  <div className="font-display text-5xl text-foreground">{result.bmi}</div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">BMI</div>
                </div>
              ) : (
                <Activity className="w-16 h-16 text-primary relative" />
              )}
            </div>
            {result ? (
              <div className="animate-fade-in">
                <div className={`font-display text-3xl tracking-wide ${result.color}`}>{result.category}</div>
                <p className="text-muted-foreground mt-2">
                  {result.category === "Normal"
                    ? "Great work! Keep maintaining your fitness."
                    : "Let's build a custom plan to reach your goal."}
                </p>
              </div>
            ) : (
              <p className="text-muted-foreground">Enter your details to calculate.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
