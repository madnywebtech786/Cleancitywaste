import { CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function About() {
  return (
    <div className="py-16 px-4 sm:px-8 md:px-12 lg:px-20 flex flex-col lg:flex-row gap-10 lg:items-center relative bg-white dark:text-black">
      <Image
        src={"/images/dot1.png"}
        width={200}
        height={200}
        className="absolute top-0 -left-20 bin z-0"
      />

      <div className="w-full lg:w-1/2 relative z-10 ">
        <div className="flex flex-col gap-4">
          <h3 className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent text-2xl font-bold">
            About Us
          </h3>
          <h4 className="text-4xl lg:text-6xl font-bold">
            Experience in Calgary Waste Management Services
          </h4>
          <p>
            Clean City Waste brings over 10 years of experience providing
            dependable residential, commercial, and industrial waste management
            across Calgary and surrounding communities. We offer bin rentals,
            scheduled pickups, recycling, and organic-cart services designed to
            reduce landfill impact and keep homes and businesses clean.
          </p>

          <div className="flex gap-5">
            <div className="flex gap-2 items-center ">
              <CheckCircle size={16} className="text-primary" />
              <p>Flexible Bin Rentals</p>
            </div>
            <div className="flex gap-2 items-center ">
              <CheckCircle size={16} className="text-primary" />
              <p>Eco-Friendly Disposal</p>
            </div>
          </div>
          <Link href={"/contact"} className="w-max ">
            <button className="text-white bg-secondary p-3 px-6 rounded-xl w-max cursor-pointer">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
      <div className="w-full lg:w-1/2 relative">
        <Image
          src={"/images/waste-about.webp"}
          width={600}
          height={600}
          className="relative z-20"
        />
        <Image
          src={"/images/dot2.png"}
          width={200}
          height={200}
          className="absolute -top-1/6 right-0 bin"
        />
      </div>
    </div>
  );
}
