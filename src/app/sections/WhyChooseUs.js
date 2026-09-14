import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import React from "react";

export default function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="py-16 px-4 sm:px-8 md:px-12 lg:px-20 bg-white dark:text-black"
    >
      <div className="bg-white">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className=" relative">
            <div className="relative backdrop-blur-sm rounded-3xl p-1">
              <Image
                src="/images/why.webp"
                width={800}
                height={800}
                alt="Waste Management Facility"
                className="rounded-3xl w-full h-auto object-cover"
              />
            </div>
          </div>
          <div>
            <div className="mb-8 flex flex-col gap-4">
              <h3 className="bg-gradient-to-r from-primary to-secondary/70 bg-clip-text text-transparent text-2xl font-bold">
                Why Choose Waste Plus Inc
              </h3>
              <h4 className="text-4xl lg:text-6xl font-bold">
                Waste management with a local, hands-on approach
              </h4>
              <p>
                We believe good waste service is about more than emptying a
                bin. It&apos;s about taking care of the details. We&apos;re a
                Calgary-based waste management company providing reliable,
                flexible, and personalized service to property managers,
                building owners, and condo boards.
              </p>
            </div>

            <div className="space-y-6  w-full md:w-4/5">
              {[
                {
                  title: "We Pick Up Overflow",
                  description:
                    "When our drivers find loose garbage around an overflowing bin, they pick it up by hand before emptying it. The bin gets emptied, and the surrounding waste gets attention too.",
                  icon: "truck",
                },
                {
                  title: "We're Calgary Based",
                  description:
                    "When you choose a local company, more of what you spend circulates back through the local economy, supporting Calgary employees, suppliers, and businesses.",
                  icon: "dumpster",
                },
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/30 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    {item.icon === "truck" && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-primary"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M4 18h16v2H4v-2zm0-4h16v2H4v-2zm0-4h16v2H4v-2zm0-4h16v2H4V8z" />
                        <path d="M12 4v2M12 10v2M12 16v2" />
                      </svg>
                    )}
                    {item.icon === "dumpster" && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-primary"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <rect x="4" y="6" width="16" height="12" rx="2" />
                        <path d="M8 10h8M8 14h8" />
                      </svg>
                    )}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <Link href={"/contact"} className="w-max">
                <button className="cursor-pointer inline-flex items-center gap-2 bg-primary text-white px-7 py-3.5 rounded-full font-semibold hover:bg-secondary transition-colors">
                  Contact us
                  <ArrowRight size={18} />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
