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
      <Breadcrumb
        name={"About Us"}
        eyebrow={"10 years serving Calgary"}
      />
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
            After years of experience in the waste management industry, our
            founders recognized a gap in the market: property managers, condo
            boards, businesses, and communities needed waste services that
            were not only dependable, but also focused on service quality,
            communication, cleanliness, and consistency. That vision became
            Waste Plus Inc.
          </p>

          <p className="text-lg leading-relaxed">
            We understand that waste management is an important part of
            keeping a property running smoothly. For property managers and
            condo boards, a missed pickup or overflowing collection area can
            quickly become a resident complaint and an unnecessary management
            issue. That&apos;s why we&apos;ve built Waste Plus Inc. around
            reliable service and long-term relationships, providing
            commercial, residential, and industrial waste management,
            including scheduled collection, recycling, and organic waste
            services tailored to the needs of every property.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mt-4">
            <div className="bg-white rounded-2xl p-6 border border-ink/10">
              <h5 className="text-xl font-bold mb-3 text-primary">
                Why We Started
              </h5>
              <p className="leading-relaxed">
                We didn&apos;t start Waste Plus Inc. simply to collect waste.
                We started because we believed waste services could be
                better: better cleanliness, better communication, better
                reliability, and better care for the properties and
                communities we serve. Today, that same mindset continues to
                guide everything we do.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-ink/10">
              <h5 className="text-xl font-bold mb-3 text-primary">
                Who We Are Today
              </h5>
              <p className="leading-relaxed">
                Waste Plus Inc. is a team of experienced waste management
                professionals committed to delivering dependable service to
                Calgary and surrounding communities. We aim to be a trusted
                service partner for property managers, condo boards,
                businesses, and communities that depend on us to keep their
                waste management running smoothly.
              </p>
            </div>
          </div>

          <p className="text-center text-lg font-semibold mt-4">
            Do the job right. Provide dependable service. Treat every
            property like it matters, because it does.
          </p>
        </div>
      </div>

      <WhyChooseUs />
      <Stats />
      <Testimonials />
      <CTA />
    </div>
  );
}
