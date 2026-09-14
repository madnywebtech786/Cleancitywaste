import Image from "next/image";
import Link from "next/link";
import React from "react";

const services = [
  {
    num: "01",
    name: "General Waste Collection",
    description:
      "Dependable general waste collection from front-load and Molok bins, kept clean, organized, and on schedule.",
    href: "/waste-services/general-waste-collection",
    image: "/images/garbage.webp",
    rotate: "-rotate-2",
  },
  {
    num: "02",
    name: "Mixed Recycling Collection",
    description:
      "Scheduled mixed recycling collection that helps properties improve recycling practices and stay organized.",
    href: "/waste-services/mixed-recycling-collection",
    image: "/images/why.webp",
    rotate: "rotate-1",
  },
  {
    num: "03",
    name: "Organic Waste Collection",
    description:
      "Convenient organic waste collection that manages food and organic materials and reduces landfill waste.",
    href: "/waste-services/organic-waste-collection",
    image: "/images/waste.webp",
    rotate: "-rotate-1",
  },
  {
    num: "04",
    name: "On-Call Junk Hauling",
    description:
      "Trucks and trailers on call for tenant move-outs, abandoned furniture, cleanups, and accumulated junk.",
    href: "/waste-services/on-call-junk-hauling",
    image: "/images/dumpster.webp",
    rotate: "rotate-2",
  },
  {
    num: "05",
    name: "Bin & Enclosure Cleaning",
    description:
      "Garbage enclosure cleaning and maintenance for waste areas dirtied by loose garbage, spills, and debris.",
    href: "/waste-services/bin-enclosure-cleaning",
    image: "/images/Bin-Enclosure.webp",
    rotate: "-rotate-2",
  },
  {
    num: "06",
    name: "Front-Load & Molok Bins",
    description:
      "Scheduled collection for front-load and Molok bin systems, preventing overflow and messy waste areas.",
    href: "/waste-services/front-load-molok-bins",
    image: "/images/Front-Load-molok-bins.webp",
    rotate: "rotate-1",
  },
];

const marqueeItems = services.map((s) => s.name);

export default function Services() {
  return (
    <div id="services" className="bg-gradient-to-b from-paper to-[#ffe9d1] dark:from-paper dark:to-[#ffe9d1] dark:text-black overflow-hidden scroll-mt-24">
      {/* Scrolling marquee ticker */}
      <div className="bg-ink border-b-[3px] border-primary py-2.5 overflow-hidden whitespace-nowrap">
        <div className="flex animate-marquee w-max">
          {[...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems].map(
            (name, i) => (
              <span
                key={i}
                className="text-paper font-bold text-xs sm:text-sm tracking-wide mx-3.5 inline-flex items-center gap-3.5"
              >
                {name}
                <span className="text-primary">&#10022;</span>
              </span>
            )
          )}
        </div>
      </div>

      <div className="py-16 px-4 sm:px-8 md:px-12 lg:px-20">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <h3 className="bg-gradient-to-r from-primary to-secondary/70 bg-clip-text text-transparent text-2xl font-bold mb-2">
            Waste Management Services
          </h3>
          <h4 className="text-4xl lg:text-6xl font-bold text-ink leading-[0.98] tracking-tight">
            Waste management,
            <br className="hidden sm:block" /> handled properly.
          </h4>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10 max-w-6xl mx-auto">
          {services.map((service) => (
            <Link
              key={service.num}
              href={service.href}
              className={`group block bg-white rounded-2xl p-4 shadow-[0_10px_30px_-12px_rgba(20,20,20,0.25)] border border-ink/5 ${service.rotate} hover:rotate-0 transition-transform duration-300`}
            >
              <div className="relative h-40 rounded-xl overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white text-sm">
                  &#8599;
                </span>
              </div>
              <div className="pt-4 pb-2 px-1">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-extrabold text-sm mb-3">
                  {service.num}
                </div>
                <h5 className="text-lg font-bold text-ink mb-1.5">
                  {service.name}
                </h5>
                <p className="text-sm text-ink/55 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
