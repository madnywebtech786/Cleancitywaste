import Breadcrumb from "../components/Breadcrumb";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import React from "react";

const runningReasons = [
  {
    num: "02",
    title: "We're Calgary based",
    body: "More of what you spend on service circulates back through the local economy, supporting Calgary employees, suppliers, and businesses. We're not just serving Calgary, we're part of it.",
  },
  {
    num: "03",
    title: "We're flexible & customizable",
    body: "Waste volumes, schedules, and tenants change. As a local company, we listen, adapt, and customize service around what your property actually needs, not a one-size-fits-all contract.",
  },
  {
    num: "04",
    title: "We're easy to reach",
    body: "We're a small, local company, which means communication is direct and personal, easy to approach whenever something needs to change.",
  },
];

const detailServices = [
  { num: "01", name: "General waste collection", href: "/waste-services/general-waste-collection" },
  { num: "02", name: "Mixed recycling collection", href: "/waste-services/mixed-recycling-collection" },
  { num: "03", name: "Organic waste collection", href: "/waste-services/organic-waste-collection" },
  { num: "04", name: "Front-load & Molok bin servicing", href: "/waste-services/front-load-molok-bins" },
  { num: "05", name: "On-call junk removal", href: "/waste-services/on-call-junk-hauling" },
  { num: "06", name: "Garbage enclosure cleaning", href: "/waste-services/bin-enclosure-cleaning" },
  { num: "07", name: "Debris removal, sweeping & pressure washing", href: "/waste-services/bin-enclosure-cleaning" },
];

export default function WhyChooseUsPage() {
  return (
    <div className="min-h-screen bg-white overflow-x-clip">
      <Breadcrumb
        name={"Why Choose Waste Plus Inc."}
        eyebrow={"Waste management with a local, hands-on approach"}
      />

      {/* Poster statement */}
      <div className="px-4 sm:px-8 md:px-12 lg:px-20 pt-20 pb-16 lg:pt-28 lg:pb-24">
        <div className="max-w-6xl">
          <p className="text-sm font-semibold text-primary mb-6">
            Reason 01
          </p>
          <h2 className="font-bold text-ink leading-[0.95] tracking-tight text-[clamp(2.75rem,8vw,6.5rem)]">
            We pick up
            <br />
            what the bin
            <br />
            <span className="text-primary">missed.</span>
          </h2>
        </div>
      </div>

      {/* Full-bleed case study: overflow story */}
      <div className="relative bg-primary/10">
        <div className="grid lg:grid-cols-2">
          <div className="relative min-h-[380px] lg:min-h-[560px]">
            <Image
              src={"/images/why.webp"}
              alt="Waste Plus Inc. driver attending to a waste enclosure"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-primary/20 via-transparent to-transparent" />
          </div>

          <div className="px-4 sm:px-8 md:px-12 lg:px-16 py-14 lg:py-20 flex flex-col justify-center">
            <p className="text-ink/50 text-sm mb-6 max-w-md">
              Most waste companies stop at the container. Here's what happens
              when our drivers pull up to a bin that's already overflowing.
            </p>
            <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-ink leading-snug max-w-xl">
              When garbage bags or loose items have overflowed from a bin,
              our drivers don&apos;t simply empty the container and drive
              away.
            </p>
            <p className="mt-8 text-lg text-primary font-semibold">
              They get out. They pick it up by hand. Then they empty the
              bin.
            </p>
            <p className="mt-4 text-ink/60 max-w-lg leading-relaxed">
              If garbage is left on the ground after collection, the job
              isn&apos;t finished. That's the whole premise this company was
              built on.
            </p>
          </div>
        </div>
      </div>

      {/* Running ledger — reasons 02-04, thin rules, no cards */}
      <div className="px-4 sm:px-8 md:px-12 lg:px-20">
        <div className="max-w-6xl">
          {runningReasons.map((reason, index) => (
            <div
              key={index}
              className="grid sm:grid-cols-[100px_1fr] lg:grid-cols-[140px_1fr_1fr] gap-x-8 gap-y-3 py-10 border-t border-ink/10 last:border-b"
            >
              <span className="text-sm font-semibold text-primary/70 tabular-nums">
                {reason.num}
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-ink lg:pr-8">
                {reason.title}
              </h3>
              <p className="text-ink/60 leading-relaxed lg:pt-1.5">
                {reason.body}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Attention to detail — services as a numbered index */}
      <div className="px-4 sm:px-8 md:px-12 lg:px-20 py-20 lg:py-28 bg-paper">
        <div className="max-w-6xl">
          <p className="text-sm font-semibold text-primary mb-5">
            Reason 05
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ink leading-tight max-w-3xl">
            We pay attention to the details. Our service goes well beyond
            regular bin collection.
          </h2>

          <div className="mt-14 grid sm:grid-cols-2 sm:gap-x-10 border-b border-ink/10">
            {detailServices.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="group flex items-center justify-between gap-4 py-5 border-t border-ink/10"
              >
                <span className="flex items-baseline gap-4">
                  <span className="text-sm font-semibold text-primary/60 tabular-nums">
                    {item.num}
                  </span>
                  <span className="text-lg text-ink font-medium group-hover:text-primary transition-colors">
                    {item.name}
                  </span>
                </span>
                <ArrowUpRight
                  size={20}
                  className="text-ink/20 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* The Waste Plus Difference */}
      <div className="px-4 sm:px-8 md:px-12 lg:px-20 py-24 lg:py-32">
        <div className="max-w-5xl">
          <p className="text-sm font-semibold text-primary mb-6">
            The Waste Plus difference
          </p>
          <p className="font-bold text-ink leading-[1.05] tracking-tight text-[clamp(2rem,5.5vw,4.25rem)]">
            Hands-on drivers.
            <br />
            Local service.
            <br />
            <span className="text-primary">Flexible solutions.</span>
          </p>
          <p className="mt-10 text-lg text-ink/60 max-w-xl leading-relaxed">
            We&apos;re not trying to be the biggest waste company. We&apos;re
            focused on providing the kind of service that makes our
            customers&apos; jobs easier.
          </p>
        </div>
      </div>

      {/* Closing CTA */}
      <div className="px-4 sm:px-8 md:px-12 lg:px-20 py-16">
        <div className="max-w-7xl mx-auto rounded-3xl bg-gradient-to-br from-primary to-secondary p-10 md:p-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Choose a local waste company that goes the extra step
            </h2>
            <p className="text-white/85 max-w-xl">
              Contact Waste Plus Inc. to discuss your property&apos;s waste
              management needs.
            </p>
          </div>
          <Link href={"/contact"} className="flex-shrink-0">
            <button className="cursor-pointer inline-flex items-center gap-2 bg-white text-ink px-7 py-3.5 rounded-full font-semibold hover:scale-105 transition-transform">
              Contact us
              <ArrowRight size={18} />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
