import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Workouts } from "@/components/sections/Workouts";
import { Diet } from "@/components/sections/Diet";
import { BMI } from "@/components/sections/BMI";
import { Trainer } from "@/components/sections/Trainer";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Workouts />
        <Diet />
        <BMI />
        <Trainer />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
