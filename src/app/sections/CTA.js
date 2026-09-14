import Link from "next/link";
import { ArrowRight } from "lucide-react";
import React from "react";

export default function CTA() {
  return (
    <section className="py-16 px-4 sm:px-8 md:px-12 lg:px-20 bg-white dark:text-black">
      <div className="max-w-7xl mx-auto rounded-3xl bg-gradient-to-br from-primary to-secondary p-10 md:p-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Choose a local waste company that goes the extra step
          </h2>
          <p className="text-white/85 max-w-xl">
            Partner with Waste Plus Inc to simplify your garbage, recycling
            and bulk disposal. Hands-on drivers, local service, and flexible
            solutions across Calgary and surrounding areas.
          </p>
        </div>
        <Link href={"tel:+14034971731"} className="flex-shrink-0">
          <button className="cursor-pointer inline-flex items-center gap-2 bg-white text-ink px-7 py-3.5 rounded-full font-semibold hover:scale-105 transition-transform">
            Call now
            <ArrowRight size={18} />
          </button>
        </Link>
      </div>
    </section>
  );
}
