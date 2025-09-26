import Link from "next/link";
import React from "react";

export default function CTA() {
  return (
    <section className="py-16 px-4 sm:px-8 md:px-12 lg:px-20 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 dark:text-black">
      <div className="text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          Take the Next Step Toward
          <br />
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Cleaner, Greener Waste Management
          </span>
        </h2>
        <p className="text-xl mb-10 max-w-2xl mx-auto">
          Partner with <strong>Clean City Waste</strong> to simplify your
          garbage, recycling and bulk disposal. Serving Calgary and surrounding
          areas with reliable pickups and eco-friendly solutions tailored to
          homes, businesses and construction sites.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href={"tel:+14034971731"}>
            <button className="text-white cursor-pointer bg-gradient-to-r from-primary to-secondary px-12 py-4 rounded-full font-semibold text-xl hover:scale-105 transition-transform">
              Call Now
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
