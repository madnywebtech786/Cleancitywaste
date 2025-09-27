import Image from "next/image";
import Hero from "./sections/Hero";
import Perks from "./sections/Perks";
import About from "./sections/About";
import Services from "./sections/Services";
import WhyChooseUs from "./sections/WhyChooseUs";
import Stats from "./sections/Stats";
import CTA from "./sections/CTA";
import Testimonials from "./sections/Testimonials";
import Contact from "./sections/Contact";

export default function Home() {
  return (
    <div className="bg-white dark:bg-white">
    <Hero />
    <Perks />
    <About/>
    <Services />
    <WhyChooseUs />
    {/* <Stats /> */}
    <Testimonials />
    <CTA />
    <Contact />
    </div>
  );
}
