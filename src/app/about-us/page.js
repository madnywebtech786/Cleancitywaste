import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import About from "../sections/About";
import Testimonials from "../sections/Testimonials";
import CTA from "../sections/CTA";

export default function page() {
  return (
    <div>
      <Breadcrumb name={"About Us"} />
      <About />

      <div className="py-16 px-4 sm:px-8 md:px-12 lg:px-20 bg-paper dark:text-black">
        <div className="max-w-5xl mx-auto flex flex-col gap-10">
          <div className="text-center">
            <h3 className="bg-gradient-to-r from-primary to-secondary/70 bg-clip-text text-transparent text-2xl font-bold mb-2">
              Our Story
            </h3>
            <h4 className="text-3xl lg:text-4xl font-bold">
              Our Experience. Your Peace of Mind.
            </h4>
          </div>

          <p className="text-lg leading-relaxed">
            Waste Plus Inc. was built on years of experience in the waste
            management industry and a simple belief: waste service should be
            reliable, responsive, and done right.
          </p>

          <p className="text-lg leading-relaxed">
            Our founders saw a gap in the market. Property managers, condo
            boards, businesses, and communities needed more than a company
            that simply showed up to empty bins. They needed a waste
            management partner that cared about communication, cleanliness,
            consistency, and the overall service experience. That vision
            became Waste Plus Inc.
          </p>

          <p className="text-lg leading-relaxed">
            We understand that waste management plays an important role in
            keeping a property running smoothly. For property managers, condo
            boards, and business owners, something as simple as a missed
            pickup or an overflowing collection area can quickly turn into
            resident complaints and an unnecessary headache.
          </p>

          <p className="text-lg leading-relaxed">
            That&apos;s why we focus on getting the details right. From
            dependable scheduled collection to recycling and organic waste
            services, we provide commercial, residential, and industrial
            waste management solutions tailored to the needs of each
            property.
          </p>

          <p className="text-lg leading-relaxed">
            Most importantly, we&apos;re focused on building long-term
            relationships with the people we serve. We want you to know that
            when you choose Waste Plus Inc., your waste service is one less
            thing you have to worry about.
          </p>

          <p className="text-center text-lg font-semibold mt-4">
            Done right. Done reliably. Every property. Every time.
          </p>
        </div>
      </div>

      <Testimonials />
      <CTA />
    </div>
  );
}
