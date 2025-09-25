import Image from "next/image";
import React from "react";

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-16 px-4 sm:px-8 md:px-12 lg:px-20 bg-white dark:text-black">
      <div className="bg-white">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className=" relative">
            <div className="relative backdrop-blur-sm rounded-3xl p-1">
              <Image
                src="/images/why.png"
                width={800}
                height={800}
                alt="Waste Management Facility"
                className="rounded-3xl w-full h-auto object-cover"
              />
            </div>
          </div>
          <div>
            <div className="mb-8 flex flex-col gap-4">
              <h3 className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent text-2xl font-bold">
                Why Choose Clean City Waste
              </h3>
              <h4 className="text-4xl lg:text-6xl font-bold">
                Reliable waste disposal and recycling in Calgary
              </h4>
              <p>
                Clean City Waste offers dependable, eco-friendly waste solutions across Calgary and surrounding areas. We combine flexible bin rentals, scheduled pickups and recycling programs to keep properties clean, safe and compliant.
              </p>
            </div>

            <div className="space-y-6  w-full md:w-4/5">
              {[
                {
                  title: "Residential & Organic Pickup",
                  description:
                    "Weekly curbside pickup with 64-gal organic carts and flexible scheduling for single-family homes, townhouses and multi-unit properties.",
                  icon: "truck",
                },
                {
                  title: "Roll-off Dumpster Rentals",
                  description:
                    "Durable roll-off dumpsters for construction, renovations and cleanups with timely pickups and responsible disposal and recycling.",
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
              <button className="bg-primary text-white px-6 py-3 rounded-lg font-semibold text-lg hover:scale-105 transition-transform">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
