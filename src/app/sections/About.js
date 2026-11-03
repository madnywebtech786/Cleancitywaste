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
            Waste Plus Inc. is a homegrown, Calgary-based waste management
            company founded by industry professionals who saw an opportunity
            to do things differently&mdash;and better.
          </p>
          <p>
            For over 10 years, we&apos;ve proudly served Calgary and
            surrounding communities with reliable, responsive waste
            management services. From day one, we&apos;ve been guided by one
            simple principle: provide the level of service we&apos;d expect
            for our own property.
          </p>
          <p>
            We believe good waste management is about more than simply
            emptying bins. It&apos;s about showing up when we say we will,
            paying attention to the details, and taking pride in keeping
            properties clean and well maintained.
          </p>

          <div className="flex flex-col gap-5">
            <div>
              <div className="flex gap-2 items-center">
                <CheckCircle size={16} className="text-primary flex-shrink-0" />
                <p className="font-bold text-ink">
                  We Pick Up Overflow by Hand
                </p>
              </div>
              <p className="mt-2 pl-6">
                When garbage spills over or ends up around a bin, our drivers
                don&apos;t just drive away after emptying it. We pick up the
                loose waste by hand, helping leave your property cleaner and
                more presentable.
              </p>
            </div>
            <div>
              <div className="flex gap-2 items-center">
                <CheckCircle size={16} className="text-primary flex-shrink-0" />
                <p className="font-bold text-ink">
                  Calgary Based. Locally Operated.
                </p>
              </div>
              <p className="mt-2 pl-6">
                We&apos;re proud to be a local Calgary company. Our team lives
                and works in the communities we serve, giving us a better
                understanding of what local properties, businesses, and
                property managers need from their waste service.
              </p>
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
          src={"/images/about-side.webp"}
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
