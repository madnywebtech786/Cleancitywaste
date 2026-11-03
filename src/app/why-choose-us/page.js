import Breadcrumb from "../components/Breadcrumb";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  AlertTriangle,
  Clock,
  PhoneOff,
  FileWarning,
  MapPin,
  SlidersHorizontal,
  MessageCircle,
  ListChecks,
} from "lucide-react";
import React from "react";

const painPoints = [
  {
    icon: AlertTriangle,
    title: "Overflowing enclosures",
    body: "Bags pile up beside the bin and nobody deals with it until a resident complains.",
  },
  {
    icon: Clock,
    title: "Missed pickups",
    body: "A collection gets skipped and your property sits with a mess until the next scheduled day.",
  },
  {
    icon: PhoneOff,
    title: "Vendors who disappear",
    body: "Something needs to change and you are stuck waiting on hold or re-explaining the issue to someone new.",
  },
  {
    icon: FileWarning,
    title: "Rigid, one-size-fits-all contracts",
    body: "Your waste volume changes with the season or the tenant mix, but the service plan never does.",
  },
];

const engagementPillars = [
  {
    icon: MapPin,
    title: "Calgary based, not a call centre",
    body: "Every dollar you spend stays closer to home, supporting local drivers, local suppliers, and local jobs. We are not a distant head office. We are part of the same community we service.",
  },
  {
    icon: SlidersHorizontal,
    title: "Built around your property, not a template",
    body: "Tenant turnover, seasonal volume, a new move-out pile, a schedule that needs to shift: we adjust the plan instead of asking you to fit one. No call centre script, no three-week wait for a change.",
  },
  {
    icon: MessageCircle,
    title: "A real person, every time you call",
    body: "When something needs to change, you talk to someone who already knows your property and can actually make the decision, not a ticket number in a queue.",
  },
  {
    icon: ListChecks,
    title: "One company for everything the bin does not cover",
    body: "General waste, recycling, organics, front-load and Molok bins, on-call junk hauling, and enclosure cleaning. One point of contact instead of a different vendor for every problem.",
  },
];

export default function WhyChooseUsPage() {
  return (
    <div className="min-h-screen bg-white overflow-x-clip">
      <Breadcrumb name={"Why Choose Waste Plus Inc."} />

      {/* Pain points — name the problem before the solution */}
      <div className="px-4 sm:px-8 md:px-12 lg:px-20 pt-20 pb-14 lg:pt-28">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold text-primary mb-5">
            The problem with most waste companies
          </p>
          <h2 className="font-bold text-ink leading-[1.05] tracking-tight text-[clamp(2rem,5vw,3.5rem)]">
            You have dealt with this before.
          </h2>
          <p className="mt-6 text-lg text-ink/60 leading-relaxed max-w-xl">
            A truck shows up, empties the bin, and leaves the mess behind. The
            same four problems, over and over, on properties across Calgary.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-ink/10 rounded-2xl overflow-hidden">
          {painPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <div key={index} className="bg-white p-7 lg:p-8">
                <Icon size={22} className="text-primary/70" strokeWidth={1.75} />
                <h3 className="mt-5 font-bold text-ink text-lg leading-snug">
                  {point.title}
                </h3>
                <p className="mt-3 text-sm text-ink/55 leading-relaxed">
                  {point.body}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* What we do instead — image + poster statement + proof, one combined section */}
      <div className="relative">
        <div className="grid lg:grid-cols-2">
          <div className="px-4 sm:px-8 md:px-12 lg:px-20 pt-6 pb-10 lg:pt-16 lg:pb-16 flex flex-col justify-center order-2 lg:order-1">
            <p className="text-sm font-semibold text-primary mb-6">
              Here is what we do instead
            </p>
            <h2 className="font-bold text-ink leading-[0.95] tracking-tight text-[clamp(2.5rem,5.5vw,4.25rem)]">
              We take care
              <br />
              of the property,
              <br />
              <span className="text-primary">not just the bin.</span>
            </h2>

            <div className="mt-10 pl-6 border-l-2 border-primary/30">
              <p className="text-lg sm:text-xl font-bold text-ink leading-snug max-w-lg">
                When our drivers arrive to find garbage bags or loose debris
                overflowing from a bin, they do not simply empty it and
                drive away.
              </p>
              <p className="mt-5 text-primary font-semibold">
                They get out, pick up the overflow by hand, and make sure
                the area is taken care of before they leave.
              </p>
              <p className="mt-4 text-ink/60 leading-relaxed max-w-md">
                Because if garbage is left on the ground after collection,
                the job is not finished. That simple standard is the
                foundation Waste Plus Inc. was built on: show up, do the
                job right, and leave every property better than we found
                it.
              </p>
            </div>
          </div>

          <div className="relative min-h-[320px] sm:min-h-[420px] lg:min-h-[640px] order-1 lg:order-2">
            <Image
              src={"/images/why-choose.webp"}
              alt="Waste Plus Inc. driver attending to a waste enclosure"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-l from-black/35 via-transparent to-transparent" />
            <div className="absolute left-6 right-6 bottom-6 lg:hidden">
              <p className="inline-block bg-black/55 backdrop-blur-sm text-white font-semibold px-4 py-2.5 rounded-md">
                Most waste companies stop at the container. We do not.
              </p>
            </div>
            <div className="hidden lg:block absolute left-8 bottom-8 right-8">
              <p className="inline-block bg-black/45 backdrop-blur-sm text-white font-medium px-4 py-2.5 rounded-md max-w-sm">
                Most waste companies stop at the container. We do not.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Why clients stay — single engaging section replacing the old reasons ledger + service index */}
      <div className="px-4 sm:px-8 md:px-12 lg:px-20 py-20 lg:py-28 bg-paper">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm font-semibold text-primary mb-5">
            Why Calgary properties stay with us
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ink leading-tight max-w-3xl">
            A waste company that actually picks up the phone, and shows up
            to match.
          </h2>
          <p className="mt-6 text-lg text-ink/60 leading-relaxed max-w-2xl">
            We built Waste Plus Inc. around the things most waste companies
            get wrong: who you reach, how fast things change, and whether
            anyone notices the mess beside the bin. Here is what that looks
            like in practice.
          </p>

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {engagementPillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={index}
                  className="group relative rounded-2xl bg-white border border-ink/8 p-7 lg:p-8 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
                >
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 group-hover:bg-primary/15 transition-colors">
                    <Icon size={22} className="text-primary" strokeWidth={1.75} />
                  </span>
                  <h3 className="mt-6 text-xl font-bold text-ink leading-snug">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-ink/60 leading-relaxed">
                    {pillar.body}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-14 flex flex-wrap items-center gap-4">
            <Link href={"/contact"}>
              <button className="cursor-pointer inline-flex items-center gap-2 bg-primary text-white px-7 py-3.5 rounded-full font-semibold hover:bg-secondary transition-colors">
                Talk to us about your property
                <ArrowRight size={18} />
              </button>
            </Link>
            <Link href={"/#services"} className="text-sm font-semibold text-ink/60 hover:text-primary transition-colors">
              See everything we handle &rarr;
            </Link>
          </div>
        </div>
      </div>

      {/* The Waste Plus Difference */}
      <div className="px-4 sm:px-8 md:px-12 lg:px-20 py-24 lg:py-32">
        <div className="max-w-5xl">
          <p className="text-sm font-semibold text-primary mb-6">
            The Waste Plus Difference
          </p>
          <p className="font-bold text-ink leading-[1.05] tracking-tight text-[clamp(2rem,5.5vw,4.25rem)]">
            Hands-on service.
            <br />
            Local expertise.
            <br />
            <span className="text-primary">Flexible solutions.</span>
          </p>
          <p className="mt-10 text-lg text-ink/60 max-w-xl leading-relaxed">
            We are not focused on being the biggest waste company. We are
            focused on being the kind of company our customers can count
            on, making waste management simpler, more responsive, and
            easier to manage.
          </p>
        </div>
      </div>

      {/* Closing CTA */}
      <div className="px-4 sm:px-8 md:px-12 lg:px-20 py-16">
        <div className="max-w-7xl mx-auto rounded-3xl bg-gradient-to-br from-primary to-secondary p-10 md:p-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Choose a Local Waste Company That Goes the Extra Mile
            </h2>
            <p className="text-white/85 max-w-xl">
              Looking for reliable, personalized waste management? Contact
              Waste Plus Inc. to discuss your property&apos;s needs and find
              a solution that works for you.
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
