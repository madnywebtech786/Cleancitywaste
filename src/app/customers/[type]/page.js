import Breadcrumb from "@/app/components/Breadcrumb";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import React from "react";

const whoWeServeData = {
  "residential-services": {
    title: "Residential Waste Services",
    tagline: "Dependable waste service for Calgary homes",
    intro:
      "At Waste Plus Inc, we provide reliable residential waste management in Calgary, helping homeowners keep their spaces clean, safe, and environmentally friendly. Our services include 64-gallon organic carts for yard and food waste along with 4-yard, 6-yard, and 8-yard bins for waste and recycling.",
    quickFacts: [
      { label: "Container sizes", value: "4, 6 & 8 yard bins" },
      { label: "Organics", value: "64-gallon carts" },
      { label: "Serving", value: "Calgary & surrounding areas" },
    ],
    modules: [
      {
        title: "Flexible Pickup, Built Around Your Routine",
        body: "Whether you live in a townhouse, or multi-unit complex, we offer flexible pickup schedules designed to make waste disposal simple and convenient. With our eco-friendly practices, you can rest assured your waste is being handled responsibly while reducing the impact on landfills.",
      },
      {
        title: "A Locally Owned Calgary Waste Company",
        body: "We are committed to delivering dependable service with a personal touch. Our residential garbage pickup and recycling services are tailored to fit seamlessly into your daily routine, keeping your home and neighborhood cleaner and greener. From everyday household waste to large cleanup projects, Waste Plus Inc is your trusted partner for hassle-free waste management.",
      },
    ],
    servicesTitle: "Where we work",
    services: [
      "Townhouses & duplexes",
      "Apartment complexes",
      "Condominiums",
      "Gated communities & residential",
    ],
    closing: {
      title: "Looking for reliable residential waste service?",
      body: "Contact Waste Plus Inc. today for affordable bin rentals and residential waste collection in Calgary.",
    },
    image: "/images/residential.webp",
  },
  "commercial-services": {
    title: "Commercial Waste Services",
    tagline: "Trusted commercial waste management in Calgary",
    intro:
      "Managing waste is critical for any business, and Waste Plus Inc provides trusted commercial waste management services in Calgary. We offer 4-yard, 6-yard, and 8-yard bins to handle everything from daily garbage and cardboard recycling to food and organic waste.",
    quickFacts: [
      { label: "Container sizes", value: "4, 6 & 8 yard bins" },
      { label: "Coverage", value: "Garbage, recycling & organics" },
      { label: "Serving", value: "Calgary & surrounding areas" },
    ],
    modules: [
      {
        title: "Customized for Your Operation",
        body: "Whether you're running a restaurant, retail store, office, or healthcare clinic, our customized waste solutions ensure your operations stay clean, compliant, and efficient.",
      },
      {
        title: "Reliability Businesses Can Count On",
        body: "We provide scheduled garbage pickup, flexible bin rentals, and responsive customer support so you never have to worry about missed collections or overflowing bins. As a Calgary-owned and operated waste management company, we take pride in supporting local businesses with professional, affordable, and eco-conscious services.",
      },
    ],
    servicesTitle: "Where we work",
    services: [
      "Restaurants, cafes & bars",
      "Retail stores & shopping plazas",
      "Offices & corporate buildings",
      "Educational institutions & schools",
      "Healthcare clinics & medical facilities",
    ],
    closing: {
      title: "Looking for reliable commercial waste service?",
      body: "Get in touch today to book commercial garbage pickup and recycling services in Calgary.",
    },
    image: "/images/commercial.webp",
  },
  "industrial-services": {
    title: "Industrial Waste Services",
    tagline: "Heavy-duty waste solutions for large-scale sites",
    intro:
      "For large-scale operations, you need heavy-duty waste solutions you can count on. Waste Plus Inc provides industrial waste management services in Calgary with 4-yard, 6-yard, and 8-yard bins designed for construction sites, manufacturing plants, and warehouses.",
    quickFacts: [
      { label: "Container sizes", value: "4, 6 & 8 yard bins" },
      { label: "Handles", value: "Demolition, recycling & organics" },
      { label: "Serving", value: "Calgary & surrounding areas" },
    ],
    modules: [
      {
        title: "Built for Project Sites",
        body: "From demolition debris to recycling and organic waste, our services keep your project site clean, safe, and compliant with local regulations. We specialize in industrial garbage pickup and bin rentals tailored to your project's needs.",
      },
      {
        title: "Safety, Professionalism, Sustainability",
        body: "With timely pickups, large container options, and eco-friendly disposal methods, Waste Plus Inc is the partner Calgary industries trust. Our focus on safety, professionalism, and sustainability makes us the right choice for businesses managing high volumes of waste.",
      },
    ],
    servicesTitle: "Where we work",
    services: [
      "Construction & demolition sites",
      "Manufacturing plants",
      "Warehouses & distribution centers",
      "Logistics & transportation companies",
      "Large-scale development projects",
    ],
    closing: {
      title: "Looking for dependable industrial waste service?",
      body: "Contact us today for dependable industrial waste management and bin rental services in Calgary.",
    },
    image: "/images/industrial.webp",
  },
  "property-managers": {
    title: "Property Managers",
    tagline: "More than waste collection. We take care of the details.",
    intro:
      "Managing properties means dealing with hundreds of details every day. Waste management shouldn't create more problems for you. Waste Plus Inc. provides hands-on, reliable waste management services for property managers across Calgary and surrounding communities.",
    quickFacts: [
      { label: "Signature detail", value: "Overflow picked up by hand" },
      { label: "Coverage", value: "Waste, recycling, organics & more" },
      { label: "Based", value: "Calgary, locally operated" },
    ],
    differentiator: {
      title: "We Don't Just Empty the Bin. We Clean Up Around It.",
      body: "When garbage bags or loose waste have overflowed from the bin, our drivers don't simply leave it behind. They get out of the truck and pick up the overflow by hand, helping clean up the immediate area around the container. Many waste companies focus on emptying the container and moving on, but we believe the job isn't truly done if garbage is still sitting beside the bin.",
    },
    modules: [
      {
        title: "A Local Calgary Waste Company",
        body: "When you work with a local company, you're not dealing with a distant corporate operation where every request has to pass through multiple layers of management. Choosing a Calgary-based waste company also means the money you spend helps support the local economy, including local employees, businesses, suppliers, and services.",
      },
      {
        title: "Easy to Reach. Easy to Work With.",
        body: "Property management is constantly changing: occupancy, waste volumes, tenants, construction, and unexpected cleanup requirements all shift over time. That's why we don't believe in a one-size-fits-all approach.",
      },
      {
        title: "On-Call Junk Removal When You Need It",
        body: "For tenant move-outs, abandoned furniture, property cleanups, maintenance projects, and accumulated junk, our on-call junk removal service provides trucks and trailers to remove acceptable non-hazardous materials. You call when you need us, and we adapt to the job.",
      },
      {
        title: "Garbage Enclosure Cleaning",
        body: "We also help property managers keep garbage enclosures looking clean and maintained.",
        list: [
          "Loose garbage and debris removal",
          "Sweeping",
          "Pressure washing",
          "Spill cleanup",
          "Cleaning around waste containers",
          "General enclosure cleanup",
        ],
      },
    ],
    pillars: [
      { title: "Local", body: "Calgary based and committed to serving our local community." },
      { title: "Approachable", body: "You can speak with people who understand your property and your requirements." },
      { title: "Flexible", body: "We can adapt services when your property's needs change." },
      { title: "Hands-On", body: "Our drivers pay attention to the waste area, including picking up overflow that has fallen outside the bins." },
      { title: "Responsive", body: "When something unexpected happens, you need a waste company that is willing to work with you." },
    ],
    servicesTitle: "Complete waste services for property managers",
    services: [
      "General waste collection",
      "Mixed recycling collection",
      "Organic waste collection",
      "Front-load bin collection",
      "Molok bin collection",
      "Overflow garbage pickup around bins",
      "On-call junk removal",
      "Garbage enclosure cleaning",
      "Debris removal, sweeping & pressure washing",
    ],
    closing: {
      title: "Looking for a waste partner that pays attention?",
      body: "Talk to Waste Plus Inc. about your properties, bin requirements, collection schedule, and additional cleanup needs. We'd be happy to work around your requirements, not the other way around.",
    },
    image: "/images/Property-Managers.webp",
  },
  "plaza-building-owners": {
    title: "Plaza & Building Owners",
    tagline: "Waste collection that goes beyond emptying the bin",
    intro:
      "Your building's waste area is part of your property. When garbage is overflowing, bags are left beside bins, or debris is scattered around the enclosure, it affects the appearance of the entire property. We don't believe our job ends when the bin is emptied.",
    quickFacts: [
      { label: "Signature detail", value: "Overflow picked up by hand" },
      { label: "Coverage", value: "Waste, recycling, organics & more" },
      { label: "Based", value: "Calgary, locally operated" },
    ],
    differentiator: {
      title: "Our Drivers Pick Up Overflow by Hand",
      body: "When our drivers arrive and find garbage bags or loose items that have fallen or overflowed outside the bin, they don't simply leave them behind. They get out and pick up the overflow by hand. The bin gets emptied. The surrounding overflow gets attention too. It's one of the reasons our customers appreciate working with us.",
    },
    modules: [
      {
        title: "Local Calgary Service",
        body: "We're not a distant national operation. We're part of the local community we serve. When you choose a local waste company, the money you spend stays closer to home and supports the Calgary economy, local workers, suppliers, and businesses.",
      },
      {
        title: "Flexible Service for Real-World Properties",
        body: "Every plaza and building is different. One property may have high weekend traffic, another may have restaurants generating significant organic waste, and another may experience occasional tenant move-outs and bulky waste. We focus on being flexible and adaptable, rather than forcing every property into the same service model.",
      },
      {
        title: "On-Call Junk Removal",
        body: "When tenants leave furniture behind, a business closes, or a property requires a cleanup, you may need more than your regular garbage service. Our trucks and trailers provide on-call junk removal for acceptable non-hazardous materials.",
      },
      {
        title: "Garbage Enclosure Cleaning",
        body: "We can also clean and maintain garbage enclosures and waste areas.",
        list: [
          "Debris removal",
          "Sweeping",
          "Pressure washing",
          "Spill cleanup",
          "Loose waste removal",
          "General enclosure cleaning",
        ],
      },
    ],
    pillars: [
      { title: "Local Calgary Service", body: "We're not a distant national operation. We're part of the local community we serve." },
      { title: "Flexible for Real-World Properties", body: "We focus on being flexible and adaptable, rather than forcing every property into the same service model." },
      { title: "A Better Experience for Tenants", body: "A clean waste area makes a better impression. Our drivers pay attention to the condition of the area, not just the contents of the bin." },
      { title: "Easy to Reach", body: "When you need something changed, you shouldn't have to fight through layers of corporate bureaucracy." },
    ],
    servicesTitle: "Our services",
    services: [
      "General waste collection",
      "Mixed recycling collection",
      "Organic waste collection",
      "Front-load bin collection",
      "Molok bin collection",
      "Overflow waste pickup around containers",
      "On-call junk removal",
      "Garbage enclosure cleaning",
      "Debris removal, sweeping & pressure washing",
    ],
    closing: {
      title: "Your property deserves more than a bin pickup.",
      body: "Choose a local Calgary waste company that pays attention to the details. Contact Waste Plus Inc. to discuss your property's waste collection and cleanup needs.",
    },
    image: "/images/Plaza-Building-Owners.webp",
  },
  "condo-boards": {
    title: "Condo Boards",
    tagline: "We take care of more than what's inside the bin",
    intro:
      "For condo boards, keeping common areas clean and well maintained is important to residents and property values. We collect the waste, recycling, and organics, and we pay attention to what is happening around the bins too.",
    quickFacts: [
      { label: "Signature detail", value: "Overflow picked up by hand" },
      { label: "Coverage", value: "Waste, recycling, organics & more" },
      { label: "Based", value: "Calgary, locally operated" },
    ],
    differentiator: {
      title: "Our Drivers Pick Up Overflow by Hand",
      body: "If garbage bags or loose items have overflowed from a bin and are sitting beside it, our drivers don't simply drive away after emptying the container. They get out and pick up the overflow by hand. We believe that if garbage is left on the ground after collection, the job isn't finished. This hands-on approach is especially appreciated by property managers and condominium communities.",
    },
    modules: [
      {
        title: "We Are Calgary Based",
        body: "We know the properties, neighbourhoods, and waste management challenges in our local market. When your condo community chooses a local company, your waste service dollars also help support the local economy and local businesses. We're not just servicing Calgary. We're part of it.",
      },
      {
        title: "Local Means Personal",
        body: "Working with a local company also means you can have a more direct relationship with your waste provider.",
      },
      {
        title: "On-Call Junk Removal for Residents & Properties",
        body: "Condominium communities regularly deal with bulky items and unexpected waste. From move-outs and abandoned furniture to property cleanups and maintenance projects, our on-call junk removal service uses trucks and trailers to handle acceptable non-hazardous materials.",
      },
      {
        title: "Clean Garbage Enclosures",
        body: "We also provide garbage enclosure cleanup to help condominium communities maintain cleaner and more presentable waste areas.",
        list: [
          "Loose garbage removal",
          "Debris removal",
          "Sweeping",
          "Pressure washing",
          "Spill cleanup",
          "Cleaning around waste containers",
          "General enclosure maintenance",
        ],
      },
      {
        title: "The Little Things Matter",
        body: "We understand that a garbage bin is only one part of the waste area. The bags beside it matter. The loose debris matters. The condition of the enclosure matters. The experience of residents matters. That's why we take a more hands-on approach to waste collection: we don't just empty bins, we pay attention to what is left behind.",
      },
    ],
    pillars: [
      { title: "Approachable", body: "Easy to contact and easy to work with." },
      { title: "Flexible", body: "Able to adjust when your community's needs change." },
      { title: "Adaptable", body: "Willing to find practical solutions for individual properties." },
      { title: "Hands-on", body: "Our drivers pay attention to overflow and loose waste around bins." },
      { title: "Local", body: "Based in Calgary and invested in the communities we serve." },
    ],
    servicesTitle: "Waste services for condo communities",
    services: [
      "General waste collection",
      "Mixed recycling collection",
      "Organic waste collection",
      "Front-load bin collection",
      "Molok bin collection",
      "Overflow garbage pickup",
      "On-call junk removal",
      "Garbage enclosure cleaning",
      "Debris removal, sweeping & pressure washing",
    ],
    closing: {
      title: "Looking for a waste company that cares about the details?",
      body: "Contact Waste Plus Inc. to discuss your condominium's waste collection, recycling, organics, junk removal, and garbage enclosure cleaning needs. Local service. Hands-on drivers. Flexible solutions.",
    },
    image: "/images/Condo-Boards.webp",
  },
};

export default function CustomerTypePage({ params }) {
  const entry = whoWeServeData[params.type];

  if (!entry) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-ink">Page Not Found</h1>
          <p className="text-ink/60">
            The page you&apos;re looking for doesn&apos;t exist.
          </p>
        </div>
      </div>
    );
  }

  const others = Object.entries(whoWeServeData).filter(
    ([slug]) => slug !== params.type
  );

  return (
    <div className="min-h-screen bg-white">
      <Breadcrumb
        name={entry.title}
        section="Our Customers"
        eyebrow={entry.tagline}
      />

      {/* Hero */}
      <div className="px-4 sm:px-8 md:px-12 lg:px-20 pt-14 pb-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          <div>
            <p className="text-lg text-ink/70 leading-relaxed max-w-xl">
              {entry.intro}
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
              src={entry.image}
              alt={entry.title}
              width={700}
              height={520}
              className="rounded-2xl w-full h-[280px] sm:h-[340px] object-cover"
            />
          </div>
        </div>
      </div>

      {/* Differentiator banner */}
      {entry.differentiator && (
        <div className="px-4 sm:px-8 md:px-12 lg:px-20">
          <div className="max-w-7xl mx-auto rounded-3xl bg-primary/10 p-8 md:p-10 flex flex-col md:flex-row gap-6 md:items-center">
            <span className="h-12 w-12 rounded-full bg-primary/15 flex items-center justify-center flex-shrink-0">
              <CheckCircle2 size={24} className="text-primary" />
            </span>
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-ink mb-2">
                {entry.differentiator.title}
              </h2>
              <p className="text-ink/70 leading-relaxed max-w-3xl">
                {entry.differentiator.body}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Body: sticky meta rail + numbered modules */}
      <div className="px-4 sm:px-8 md:px-12 lg:px-20 py-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[280px_1fr] gap-12">
          <aside className="lg:sticky lg:top-40 lg:self-start lg:z-10">
            <div className="rounded-2xl border border-ink/10 p-6 bg-paper">
              <p className="text-sm font-semibold text-ink mb-4">
                At a glance
              </p>
              <dl className="space-y-4">
                {entry.quickFacts.map((fact, index) => (
                  <div key={index}>
                    <dt className="text-xs text-ink/50">{fact.label}</dt>
                    <dd className="text-sm font-medium text-ink mt-0.5">
                      {fact.value}
                    </dd>
                  </div>
                ))}
              </dl>
              <div className="mt-6 pt-6 border-t border-ink/10">
                <Link href={"/contact"}>
                  <button className="cursor-pointer w-full bg-primary text-white py-3 rounded-full font-semibold text-sm hover:bg-secondary transition-colors">
                    Talk to us
                  </button>
                </Link>
              </div>
            </div>
          </aside>

          <div className="flex flex-col gap-3">
            {entry.modules.map((module, index) => (
              <div
                key={index}
                className="grid grid-cols-[auto_1fr] gap-5 py-7 border-b border-ink/10 last:border-b-0"
              >
                <span className="text-sm font-semibold text-primary tabular-nums pt-0.5">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-ink mb-3">
                    {module.title}
                  </h2>
                  <p className="text-ink/70 leading-relaxed max-w-2xl">
                    {module.body}
                  </p>
                  {module.list && (
                    <ul className="mt-5 grid sm:grid-cols-2 gap-x-6 gap-y-2.5">
                      {module.list.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-ink/80"
                        >
                          <CheckCircle2
                            size={16}
                            className="text-primary flex-shrink-0 mt-0.5"
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pillars */}
      {entry.pillars && (
        <div className="px-4 sm:px-8 md:px-12 lg:px-20 py-14 bg-paper">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-ink mb-8">
              Why work with Waste Plus Inc.
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {entry.pillars.map((pillar, index) => (
                <div
                  key={index}
                  className="rounded-2xl bg-white border border-ink/10 p-6"
                >
                  <h3 className="font-bold text-primary mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-ink/70 leading-relaxed">
                    {pillar.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Services / where we work */}
      <div
        className={`px-4 sm:px-8 md:px-12 lg:px-20 py-14 ${
          entry.pillars ? "" : "bg-paper"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-ink mb-8">
            {entry.servicesTitle}
          </h2>
          <div className="flex flex-wrap gap-3">
            {entry.services.map((item, index) => (
              <span
                key={index}
                className="px-5 py-2.5 rounded-full bg-white border border-primary/20 text-sm font-medium text-ink"
              >
                {item}
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
              {entry.closing.title}
            </h2>
            <p className="text-white/85 max-w-xl">{entry.closing.body}</p>
          </div>
          <Link href={"/contact"} className="flex-shrink-0">
            <button className="cursor-pointer inline-flex items-center gap-2 bg-white text-ink px-7 py-3.5 rounded-full font-semibold hover:scale-105 transition-transform">
              Contact us
              <ArrowRight size={18} />
            </button>
          </Link>
        </div>
      </div>

      {/* Others */}
      <div className="px-4 sm:px-8 md:px-12 lg:px-20 pb-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl font-bold text-ink mb-6">Other customers we serve</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {others.map(([slug, other]) => (
              <Link
                key={slug}
                href={`/customers/${slug}`}
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
