import { Phone, Send } from "lucide-react";
import Link from "next/link";
import React from "react";
export default function TopBar() {
  return (
    <div className="w-full py-3 px-4 md:px-8 lg:px-12 2xl:px-20 flex bg-gradient-3 text-white  bg-gradient-to-r from-primary to-secondary/70">
      <div className="w-full lg:w-1/3 flex justify-start items-center">
        <div className="flex gap-2 items-center">
          <Send size={20} className="text-white" />
          <Link href={"mailto:contact@wasteplus.ca"}>
            <p className="text-xs lg:text-sm">contact@wasteplus.ca</p>
          </Link>
        </div>
      </div>
      <div className="w-1/3 text-xs lg:text-sm hidden lg:flex justify-center font-bold">
        <marquee>
          <p><span className="mr-20">Locally Owned and Operated </span> <span className="mr-20">Locally Owned and Operated </span> <span>Locally Owned and Operated </span> </p>
        </marquee>
      </div>
      <div className="w-full lg:w-1/3 flex justify-end items-center">
        <div className="flex gap-2 items-center">
          <Phone size={20} className="text-white" />
          <Link href={"tel:+14034971731"}>
            <p className="text-xs lg:text-sm">403-497-1731</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
