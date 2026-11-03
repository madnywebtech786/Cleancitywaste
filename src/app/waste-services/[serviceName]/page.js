import Breadcrumb from "@/app/components/Breadcrumb";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import React from "react";

const wasteServicesData = {
  "general-waste-collection": {
    title: "General Waste Collection",
    tagline: "Reliable general waste removal for Calgary properties",
    intro:
      "Waste Plus Inc. provides dependable general waste collection services for commercial, residential, and multi-property sites across Calgary and surrounding communities. We collect general waste from front-load and Molok bins, helping property owners, businesses, and managers keep their waste areas clean, organized, and serviced on schedule.",
    modules: [
      {
        title: "Front-Load & Molok Bin Waste Collection",
        body: "Our general waste service is designed for properties using front-load or Molok waste containers. We provide scheduled collection to help prevent overflowing bins, unnecessary buildup, and messy waste areas. Our service can be arranged around your property's waste volume and collection requirements, providing a convenient solution for ongoing waste removal.",
      },
      {
        title: "What We Collect",
        body: "General waste collection can include everyday non-recyclable materials. Certain materials may require specialized handling or disposal and are not accepted through regular general waste collection.",
        list: [
          "Household and general garbage",
          "General commercial waste",
          "Non-recyclable packaging",
          "Bagged garbage",
          "General office waste",
          "Common property and building waste",
          "Other acceptable non-hazardous waste",
        ],
      },
      {
        title: "Keep Your Waste Areas Clean and Under Control",
        body: "Consistent waste collection helps properties maintain cleaner waste areas and provides residents, tenants, employees, and customers with a more convenient waste disposal experience. We work with property owners and managers to establish a collection schedule that fits their waste needs.",
      },
    ],
    areasTitle: "Reliable Waste Services for All Types of Properties",
    areas: [
      "Apartment and condominium buildings",
      "Commercial properties",
      "Retail locations",
      "Office buildings",
      "Industrial properties",
      "Multi-family communities",
      "Property management portfolios",
    ],
    closing: {
      title: "Need general waste collection?",
      body: "Contact Waste Plus Inc. to discuss your front-load or Molok bin requirements and find a waste collection schedule that works for your property.",
    },
    image: "/images/General-Waste-Collection.webp",
  },
  "mixed-recycling-collection": {
    title: "Mixed Recycling Collection",
    tagline: "Convenient mixed recycling collection for Calgary properties",
    intro:
      "Waste Plus Inc. provides scheduled mixed recycling collection for commercial, residential, and multi-family properties across Calgary and surrounding communities. We collect recyclable materials from front-load and Molok bins, helping properties improve recycling practices while keeping recycling areas organized and manageable.",
    modules: [
      {
        title: "Front-Load & Molok Recycling Collection",
        body: "Managing recycling at a busy property can be challenging when bins fill up quickly. Waste Plus Inc. provides scheduled collection to help keep recycling containers from becoming overloaded. We work with property owners, businesses, and property managers to provide collection based on the property's recycling volume and service requirements.",
      },
      {
        title: "Common Recyclable Materials",
        body: "Depending on your property's recycling program and local requirements, mixed recycling may include the materials below. Materials should be placed in the recycling bin according to applicable recycling guidelines, since contamination from garbage, food waste, or unacceptable materials can affect the recycling process.",
        list: [
          "Cardboard and paper",
          "Newspapers and magazines",
          "Paper packaging",
          "Plastic containers",
          "Metal cans",
          "Aluminum cans",
          "Steel cans",
          "Other accepted recyclable packaging",
        ],
      },
      {
        title: "Make Recycling Easier for Your Property",
        body: "A dependable recycling collection schedule helps keep recycling areas cleaner and makes it easier for residents, tenants, employees, and customers to participate in recycling. We provide practical recycling collection solutions designed around your property's needs.",
      },
    ],
    areasTitle: "Recycling services for multiple property types",
    areas: [
      "Apartment and condominium buildings",
      "Commercial properties",
      "Retail businesses",
      "Office buildings",
      "Multi-family communities",
      "Industrial and mixed-use properties",
      "Property management portfolios",
    ],
    closing: {
      title: "Looking for mixed recycling collection?",
      body: "Contact Waste Plus Inc. to discuss your recycling bins, collection frequency, and property requirements.",
    },
    image: "/images/Mixed-Recycling-Collection.webp",
  },
  "organic-waste-collection": {
    title: "Organic Waste Collection",
    tagline: "Reliable organic waste collection for Calgary properties",
    intro:
      "Waste Plus Inc. provides convenient organic waste collection services for commercial, residential, and multi-family properties across Calgary and surrounding communities. We collect organic waste from front-load and Molok bins, helping properties manage food and organic materials while reducing the amount of waste sent to landfill.",
    modules: [
      {
        title: "Front-Load & Molok Organic Waste Collection",
        body: "Organic waste can quickly create odours and become difficult to manage when bins are not serviced regularly. Waste Plus Inc. provides scheduled collection to help properties maintain cleaner and more manageable waste areas. We can help establish a collection schedule based on your property's organic waste volume and requirements.",
      },
      {
        title: "Common Organic Materials",
        body: "Organic waste should be placed in the designated organics container and kept free from garbage, recycling, and other unacceptable materials.",
        list: [
          "Food scraps",
          "Fruit and vegetable waste",
          "Meat and fish waste",
          "Dairy products",
          "Coffee grounds and tea",
          "Food-soiled paper",
          "Other approved organic materials",
        ],
      },
      {
        title: "A Cleaner Way to Manage Organic Waste",
        body: "Regular organic waste collection helps properties manage food waste more effectively, reduce overflowing containers, and maintain cleaner waste collection areas. By separating organic materials from general waste, properties can also help divert more waste from landfill and support responsible waste management practices.",
      },
    ],
    areasTitle: "Organic collection for different properties",
    areas: [
      "Apartment and condominium buildings",
      "Multi-family properties",
      "Restaurants and food-service businesses",
      "Commercial properties",
      "Retail locations",
      "Offices and workplaces",
      "Property management portfolios",
    ],
    closing: {
      title: "Need organic waste collection?",
      body: "Contact Waste Plus Inc. to discuss your organic waste requirements and set up a collection schedule for your front-load or Molok bins.",
    },
    image: "/images/Organic-Waste-Collection.webp",
  },
  "on-call-junk-hauling": {
    title: "On-Call Junk Hauling",
    tagline: "Trucks and trailers, ready when you call",
    intro:
      "Not everything fits into a regular collection schedule. For tenant move-outs, abandoned furniture, property cleanups, maintenance projects, and accumulated junk, our on-call junk removal service provides trucks and trailers to remove acceptable non-hazardous materials.",
    modules: [
      {
        title: "On-Call Junk Removal When You Need It",
        body: "Not everything can wait for a regular collection schedule. Our on-call junk removal service helps with tenant move-outs, abandoned furniture, property cleanups, maintenance projects, accumulated junk, wooden pallets and larger items left around garbage enclosures. We bring our trailer, load the junk and dispose of it at the landfill site. We remove acceptable non-hazardous materials to help keep your property clean and organized.",
      },
      {
        title: "Common Junk Removal Situations",
        body: "Whether it's a business closing, a resident move-out, or a property that requires a one-time cleanup, we help you deal with unexpected waste without waiting for your regular collection.",
        list: [
          "Tenant move-outs",
          "Abandoned furniture",
          "Property cleanups",
          "Maintenance & renovation projects",
          "Business closures",
          "Accumulated junk & bulky items",
        ],
      },
    ],
    areasTitle: "On-call service for different properties",
    areas: [
      "Condominium communities",
      "Plazas & commercial buildings",
      "Property management portfolios",
      "Apartment buildings",
      "Retail & office properties",
    ],
    closing: {
      title: "Have unexpected junk to remove?",
      body: "Contact Waste Plus Inc. to arrange on-call junk hauling for your property. No need to wait for your regular collection.",
    },
    image: "/images/On-Call-Junk-Hauling.webp",
  },
  "bin-enclosure-cleaning": {
    title: "Bin & Enclosure Cleaning",
    tagline: "Keep your garbage enclosure clean, safe & presentable",
    intro:
      "Waste Plus Inc. provides garbage enclosure cleaning and maintenance services for commercial, residential, and multi-family properties in Calgary and surrounding communities. Garbage enclosures can quickly become dirty from loose garbage, spills, debris, dirt, and buildup around waste containers.",
    modules: [
      {
        title: "Complete Garbage Enclosure Cleaning",
        body: "Our enclosure cleaning service helps address the mess that can accumulate around garbage and recycling containers. We assess the condition of the enclosure and determine the appropriate cleaning approach for the site.",
        list: [
          "Removal of loose garbage and debris",
          "Sweeping of enclosure floors",
          "Removal of dirt and accumulated waste",
          "Pressure washing",
          "Cleaning around waste containers",
          "Removal of spilled materials",
          "General enclosure cleanup",
        ],
      },
      {
        title: "Pressure Washing for Garbage Enclosures",
        body: "Garbage enclosures can experience spills, dirt, grease, and other buildup over time. Regular pressure washing can help remove accumulated grime and improve the overall appearance of the area. Our team can pressure wash suitable enclosure surfaces as part of a cleanup service, helping property owners and managers maintain cleaner waste areas.",
      },
      {
        title: "Debris & Loose Waste Removal",
        body: "Loose debris around garbage bins can make an enclosure look neglected and may attract unwanted pests. This service can be particularly useful following garbage spills, property cleanups, wind-blown debris, tenant move-outs, construction or maintenance work, overflow situations, and seasonal cleanup.",
      },
      {
        title: "Sweeping & General Cleanup",
        body: "Regular sweeping helps prevent dirt, litter, and loose material from accumulating inside and around garbage enclosures. Our team can clean floors, corners, access areas, and surrounding spaces to help keep your waste collection area more manageable and presentable.",
      },
      {
        title: "One-Time or Ongoing Cleaning",
        body: "Some properties need a one-time deep cleanup, while others benefit from regular enclosure maintenance. Whether you need an enclosure cleaned after a buildup or want to include cleaning as part of your regular property maintenance, we can help.",
      },
    ],
    areasTitle: "Suitable for",
    areas: [
      "Apartment and condominium buildings",
      "Multi-family properties",
      "Commercial properties",
      "Retail centres",
      "Office buildings",
      "Industrial properties",
      "Property management portfolios",
    ],
    closing: {
      title: "Need your garbage enclosure cleaned?",
      body: "Contact Waste Plus Inc. to arrange a garbage enclosure cleanup in Calgary and surrounding communities. Tell us about your property and the condition of the enclosure, and we'll help determine the right cleaning service.",
    },
    image: "/images/Bin-Enclosure-Cleaning.webp",
  },
  "front-load-molok-bins": {
    title: "Front Load & Molok Bins",
    tagline: "The right container setup for your property",
    intro:
      "Waste Plus Inc. services properties using front-load bins and Molok (in-ground) bin systems throughout Calgary and surrounding communities. Whichever container type your property uses, we provide scheduled collection to help prevent overflowing bins and messy waste areas.",
    modules: [
      {
        title: "Bin Options We Service",
        body: "We service the full range of front-load and Molok bin types across a single property, so waste, recycling, and organics can run on one coordinated schedule.",
        list: [
          "Front-load waste bins",
          "Front-load recycling bins",
          "Molok / in-ground waste bins",
          "Molok / in-ground recycling bins",
          "Molok / in-ground organics bins",
        ],
      },
    ],
    areasTitle: "Bin servicing for different properties",
    areas: [
      "Apartment and condominium buildings",
      "Commercial properties",
      "Plazas & retail centres",
      "Office buildings",
      "Industrial properties",
      "Property management portfolios",
    ],
    closing: {
      title: "Not sure which bin setup fits your property?",
      body: "Contact Waste Plus Inc. and we'll help you determine the right front-load or Molok bin setup for your waste, recycling, and organics.",
    },
    image: "/images/Front-Load-Molok-Bins.webp",
  },
};

export const allWasteServices = wasteServicesData;

export default function WasteServicePage({ params }) {
  const service = wasteServicesData[params.serviceName];

  if (!service) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-ink">
            Service Not Found
          </h1>
          <p className="text-ink/60">
            The service you&apos;re looking for doesn&apos;t exist.
          </p>
        </div>
      </div>
    );
  }

  const otherServices = Object.entries(wasteServicesData).filter(
    ([slug]) => slug !== params.serviceName
  );

  return (
    <div className="min-h-screen bg-white">
      <Breadcrumb name={service.title} />

      {/* Hero */}
      <div className="px-4 sm:px-8 md:px-12 lg:px-20 pt-14 pb-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          <div>
            <p className="text-lg text-ink/70 leading-relaxed max-w-xl">
              {service.intro}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href={"/contact"}>
                <button className="cursor-pointer inline-flex items-center gap-2 bg-primary text-white px-7 py-3.5 rounded-full font-semibold hover:bg-secondary transition-colors">
                  Get a quote
                  <ArrowRight size={18} />
                </button>
              </Link>
              <Link href={"tel:+14034971731"}>
                <button className="cursor-pointer inline-flex items-center gap-2 border-2 border-ink/15 text-ink px-7 py-3.5 rounded-full font-semibold hover:border-primary hover:text-primary transition-colors">
                  403-497-1731
                </button>
              </Link>
            </div>
          </div>
          <div className="relative">
            <Image
              src={service.image}
              alt={service.title}
              width={700}
              height={520}
              className="rounded-2xl w-full h-[280px] sm:h-[340px] object-cover"
            />
          </div>
        </div>
      </div>

      {/* Body: service breakdown — label rail + content, plain blocks for context, tinted panels for checklists */}
      <div className="px-4 sm:px-8 md:px-12 lg:px-20 py-14 lg:py-20">
        <div className="max-w-7xl mx-auto flex flex-col gap-10 lg:gap-14">
          {service.modules.map((module, index) =>
            module.list ? (
              <div
                key={index}
                className="grid lg:grid-cols-[280px_1fr] gap-6 lg:gap-12 rounded-2xl bg-paper border border-ink/8 p-7 sm:p-9 lg:p-10"
              >
                <h2 className="text-xl sm:text-2xl font-bold text-ink lg:pr-6">
                  {module.title}
                </h2>
                <div>
                  <p className="text-ink/70 leading-relaxed max-w-2xl">
                    {module.body}
                  </p>
                  <ul className="mt-7 grid sm:grid-cols-2 gap-x-8 gap-y-3 pt-6 border-t border-ink/10">
                    {module.list.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2.5 text-sm text-ink/80"
                      >
                        <CheckCircle2
                          size={17}
                          className="text-primary flex-shrink-0 mt-0.5"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <div
                key={index}
                className={`grid lg:grid-cols-[280px_1fr] gap-6 lg:gap-12 ${
                  index === 0 ? "lg:pt-0" : "pt-10 lg:pt-14 border-t border-ink/10"
                }`}
              >
                <h2 className="text-xl sm:text-2xl font-bold text-ink lg:pr-6">
                  {module.title}
                </h2>
                <p className="text-ink/70 leading-relaxed max-w-2xl">
                  {module.body}
                </p>
              </div>
            )
          )}
        </div>
      </div>

      {/* Areas served */}
      <div className="px-4 sm:px-8 md:px-12 lg:px-20 py-14 bg-paper">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-ink mb-8">
            {service.areasTitle}
          </h2>
          <div className="flex flex-wrap gap-3">
            {service.areas.map((area, index) => (
              <span
                key={index}
                className="px-5 py-2.5 rounded-full bg-white border border-primary/20 text-sm font-medium text-ink"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Closing CTA */}
      <div className="px-4 sm:px-8 md:px-12 lg:px-20 py-16">
        <div className="max-w-7xl mx-auto rounded-3xl bg-gradient-to-br from-primary to-secondary p-10 md:p-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              {service.closing.title}
            </h2>
            <p className="text-white/85 max-w-xl">{service.closing.body}</p>
          </div>
          <Link href={"/contact"} className="flex-shrink-0">
            <button className="cursor-pointer inline-flex items-center gap-2 bg-white text-ink px-7 py-3.5 rounded-full font-semibold hover:scale-105 transition-transform">
              Contact us
              <ArrowRight size={18} />
            </button>
          </Link>
        </div>
      </div>

      {/* Other services */}
      <div className="px-4 sm:px-8 md:px-12 lg:px-20 pb-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl font-bold text-ink mb-6">
            Other waste solutions
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {otherServices.map(([slug, other]) => (
              <Link
                key={slug}
                href={`/waste-services/${slug}`}
                className="group flex items-center justify-between gap-3 rounded-2xl border border-ink/10 p-5 hover:border-primary transition-colors"
              >
                <span className="font-medium text-ink group-hover:text-primary transition-colors">
                  {other.title}
                </span>
                <ArrowRight
                  size={18}
                  className="text-ink/30 group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
