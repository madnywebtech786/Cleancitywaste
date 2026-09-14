import { Home, Briefcase, Factory, ClipboardList, Building2, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const audiences = [
  {
    icon: Home,
    title: "Residential",
    description:
      "Dependable, eco-friendly waste pickup in Calgary. Flexible bin rentals and scheduled pickups that fit your daily routines.",
    href: "/customers/residential-services",
    image: "/images/residential.webp",
  },
  {
    icon: Briefcase,
    title: "Commercial",
    description:
      "Reliable pickups for businesses. Scheduled garbage collection and flexible bin rentals for your business.",
    href: "/customers/commercial-services",
    image: "/images/commercial.webp",
  },
  {
    icon: Factory,
    title: "Industrial",
    description:
      "Heavy-duty bins and reliable site pickups. Bin rentals for construction, manufacturing, and large-scale cleanup.",
    href: "/customers/industrial-services",
    image: "/images/industrial.webp",
  },
  {
    icon: ClipboardList,
    title: "Property Managers",
    description:
      "More than waste collection. We take care of the details, with hands-on, reliable service for every property.",
    href: "/customers/property-managers",
    image: "/images/Property-Managers.webp",
  },
  {
    icon: Building2,
    title: "Plaza & Building Owners",
    description:
      "Waste collection that goes beyond emptying the bin. We don't believe our job ends when the bin is emptied.",
    href: "/customers/plaza-building-owners",
    image: "/images/Plaza-Building-Owners.webp",
  },
  {
    icon: Users,
    title: "Condo Boards",
    description:
      "We take care of more than what's inside the bin, keeping common areas clean and well maintained for residents.",
    href: "/customers/condo-boards",
    image: "/images/Condo-Boards.webp",
  },
];

export default function OurCustomers() {
  return (
    <div className="py-16 px-4 sm:px-8 md:px-12 lg:px-20 bg-primary/10 dark:!bg-primary/10 dark:text-black">
      <div className="text-center w-full lg:w-1/2 mx-auto">
        <h3 className="bg-gradient-to-r from-primary to-secondary/70 bg-clip-text text-transparent text-2xl font-bold mb-2">
          Our Customers
        </h3>
        <h4 className="text-4xl lg:text-6xl font-bold">
          Waste Solutions Built Around Your Property
        </h4>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
        {audiences.map((audience) => {
          const Icon = audience.icon;
          return (
            <div
              key={audience.title}
              className="bg-white shadow-2xl !rounded-t-xl !rounded-b-[20%] p-6 pb-10 flex flex-col gap-4"
            >
              <div className="w-11/12 mx-auto">
                <Image
                  src={audience.image}
                  alt={audience.title}
                  width={350}
                  height={250}
                  className="max-h-[250px] rounded-t-xl !rounded-b-[20%] mx-auto relative z-10 object-cover"
                />
                <div className="rounded-full w-20 h-20 bg-white -mt-14 mx-auto relative z-30 flex items-center justify-center shadow-2xl">
                  <Icon size={40} className="text-primary" />
                </div>
                <div className="flex flex-col gap-4 mt-4">
                  <h3 className="text-2xl font-bold text-center">
                    {audience.title}
                  </h3>
                  <p className="text-center">{audience.description}</p>
                  <Link href={audience.href} className="w-max mx-auto">
                    <button className="rounded-full p-3 px-6 bg-primary text-white w-max mx-auto cursor-pointer text-sm font-bold">
                      Read More
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
