import { CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function About() {
  return (
    <div className="py-16 px-4 sm:px-8 md:px-12 lg:px-20 flex flex-col lg:flex-row-reverse gap-10 lg:items-center relative bg-white dark:text-black">
      <Image
        src={"/images/dot1.png"}
        width={200}
        height={200}
        className="hidden lg:block absolute top-0 -left-20 bin z-0"
      />

      <div className="w-full lg:w-1/2 relative z-10 ">
        <div className="flex flex-col gap-4">
          <h3 className="bg-gradient-to-r from-primary to-secondary/70 bg-clip-text text-transparent text-2xl font-bold">
            About Us
          </h3>
          <h4 className="text-4xl lg:text-5xl font-bold">
            Built to Provide Better Waste Management
          </h4>
          <p>
            Waste Plus Inc. is a home grown, Calgary based company founded by
            waste industry professionals who saw an opportunity to do things
            better. For the past 10 years, we&apos;ve been proudly serving
            Calgary and surrounding communities, built around one simple
            principle: provide the level of waste service we would expect for
            our own property.
          </p>

          <div className="flex gap-5 flex-wrap">
            <div className="flex gap-2 items-center ">
              <CheckCircle size={16} className="text-primary" />
              <p>We Pick Up Overflow by Hand</p>
            </div>
            <div className="flex gap-2 items-center ">
              <CheckCircle size={16} className="text-primary" />
              <p>Calgary Based & Locally Operated</p>
            </div>
          </div>
          <Link href={"/contact"} className="w-max ">
            <button className="text-white bg-gradient-to-r from-primary to-secondary p-3 px-6 rounded-xl w-max cursor-pointer shadow-lg shadow-secondary/30 hover:shadow-xl hover:shadow-secondary/40 hover:-translate-y-0.5 transition-all duration-300">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
      <div className="w-full lg:w-1/2 relative">
        <Image
          src={"/images/about-img.png"}
          width={600}
          height={600}
          className="relative z-20 rounded-md"
          alt="Waste Plus Inc. team providing waste management services"
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
