import { CheckCircle } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <div className="py-16 px-4 sm:px-8 md:px-12 lg:px-20 flex items-center relative ">
      <Image
        src={"/images/dot1.png"}
        width={200}
        height={200}
        className="absolute top-0 -left-20 bin z-0"
      />

      <div className="w-1/2 relative z-10 ">
        <div className="flex flex-col gap-4">
          <h3 className="bg-gradient-to-r from-[#5b9d39] to-[#007994] bg-clip-text text-transparent text-2xl font-bold">About Us</h3>
          <h4 className="text-6xl font-bold">
            Experience in waste disposal management services
          </h4>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat a
            vero quis, maxime blanditiis vel optio expedita modi corporis
            aspernatur voluptates natus ipsam velit dolor iusto, libero sed, ut
            quibusdam! Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Placeat a vero quis, maxime blanditiis vel optio expedita modi
            corporis aspernatur voluptates natus ipsam velit dolor iusto, libero
            sed, ut quibusdam!
          </p>

          <div className="flex gap-5">
            <div className="flex gap-2 items-center ">
              <CheckCircle size={16} className="text-primary" />
              <p>Plants Filtration Systems</p>
            </div>
            <div className="flex gap-2 items-center ">
              <CheckCircle size={16} className="text-primary" />
              <p>Seafood Import Export</p>
            </div>
          </div>
          <button className="text-white bg-secondary p-3 px-6 rounded-xl w-max">
            Contact Us
          </button>
        </div>
      </div>
      <div className="w-1/2 relative">
        <Image
          src={"/images/waste-about.png"}
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
