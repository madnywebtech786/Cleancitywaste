import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import About from "../sections/About";
import WhyChooseUs from "../sections/WhyChooseUs";
import Stats from "../sections/Stats";
import Testimonials from "../sections/Testimonials";
import CTA from "../sections/CTA";

export default function page() {
  return (
    <div>
      <Breadcrumb name={"About Us"} />
      <About />
      <WhyChooseUs />
      <Stats />
      <Testimonials />
      <CTA />
    </div>
  );
}
