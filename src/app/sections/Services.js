import { Home, Briefcase, Factory } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function Services() {
  return (
    <div className="py-16 px-4 sm:px-8 md:px-12 lg:px-20 bg-primary/10 dark:!bg-primary/10 dark:text-black">
      <div className="text-center w-full lg:w-1/2 mx-auto">
        <h3 className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent text-2xl font-bold mb-2">
          Waste Management Services
        </h3>
        <h4 className="text-4xl lg:text-6xl font-bold">
          Complete Bin Rentals, Pickup & Recycling Solutions
        </h4>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
        <div className="bg-white shadow-2xl !rounded-t-xl !rounded-b-[20%] p-6 pb-10 flex flex-col gap-4">
          <div className="w-11/12 mx-auto">
            <Image
              src={"/images/residential.png"}
              width={350}
              height={250}
              className="max-h-[250px] rounded-t-xl !rounded-b-[20%] mx-auto relative z-10"
            />
            <div className="rounded-full w-20 h-20 bg-white -mt-14 mx-auto relative z-30 flex items-center justify-center shadow-2xl">
              <Home size={40} className="text-primary" />
            </div>
            <div className="flex flex-col gap-4 mt-4">
              <h3 className="text-2xl font-bold text-center">
                Residential Waste
              </h3>
              <p className="text-center">
                Residential waste pickup in Calgary dependable, eco-friendly
                services. Flexible bin rentals and scheduled pickups that fit
                your daily routines.
              </p>

              <button className="rounded-full p-3 px-6 bg-accent/70 w-max mx-auto text-sm font-bold">
                Read More
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white shadow-2xl !rounded-t-xl !rounded-b-[20%] p-6 pb-10 flex flex-col gap-4">
          <div className="w-11/12 mx-auto">
            <Image
              src={"/images/commercial.png"}
              width={350}
              height={250}
              className="max-h-[250px] rounded-t-xl !rounded-b-[20%] mx-auto relative z-10"
            />
            <div className="rounded-full w-20 h-20 bg-white -mt-14 mx-auto relative z-30 flex items-center justify-center shadow-2xl">
              <Briefcase size={40} className="text-primary" />
            </div>
            <div className="flex flex-col gap-4 mt-4">
              <h3 className="text-2xl font-bold text-center">
                Commercial Waste
              </h3>
              <p className="text-center">
                Commercial waste services in Calgary reliable pickups for
                businesses. Scheduled garbage collection and flexible bin
                rentals for your business
              </p>

              <button className="rounded-full p-3 px-6 bg-accent/70 w-max mx-auto text-sm font-bold">
                Read More
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white shadow-2xl !rounded-t-xl !rounded-b-[20%] p-6 pb-10 flex flex-col gap-4">
          <div className="w-11/12 mx-auto">
            <Image
              src={"/images/industrial.png"}
              width={350}
              height={250}
              className="max-h-[250px] rounded-t-xl !rounded-b-[20%] mx-auto relative z-10"
            />
            <div className="rounded-full w-20 h-20 bg-white -mt-14 mx-auto relative z-30 flex items-center justify-center shadow-2xl">
              <Factory size={40} className="text-primary" />
            </div>
            <div className="flex flex-col gap-4 mt-4">
              <h3 className="text-2xl font-bold text-center">
                Industrial Waste
              </h3>
              <p className="text-center">
                Industrial waste management heavy-duty bins and reliable site
                pickups. Bin rentals for construction, manufacturing, and
                large-scale cleanup
              </p>

              <button className="rounded-full p-3 px-6 bg-accent/70 w-max mx-auto text-sm font-bold">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
