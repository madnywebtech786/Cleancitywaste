import { Facebook, Instagram, Phone, Send, Smartphone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
export default function TopBar() {
  return (
    <div className="w-full py-3 px-4 md:px-8 lg:px-12 2xl:px-20 flex bg-gradient-3 text-white  bg-gradient-to-r from-primary to-secondary">
      <div className="w-full lg:w-1/3 flex justify-between md:justify-start md:gap-5 items-center">
        <div className="flex gap-2 items-center">
          <Send size={20} className="text-white" />
          <Link href={"mailto:info@cleancitywaste.ca"}>
            <p className="text-xs lg:text-sm">info@cleancitywaste.ca</p>
          </Link>
        </div>
        <div className="flex gap-2 items-center">
          <Phone size={20} className="text-white" />
          <Link href={"tel:+14034971731"}>
            <p className="text-xs lg:text-sm">403-497-1731</p>
          </Link>
        </div>
      </div>
      <div className="w-1/3 text-xs lg:text-sm hidden lg:flex justify-center font-bold">
        <p>Locally Owned and Operated</p>
      </div>
      <div className="w-1/3 hidden md:flex justify-end">
        <div className="flex items-center space-x-4">
          <Link href={"https://www.facebook.com/profile.php?id=61580180045432"}>
            <Facebook size={20} className="text-white" />
          </Link>

          <Link href={"https://www.instagram.com/restyle.renovationyyc/?hl=en"}>
            <Instagram size={20} className="text-white" />
          </Link>
          <Link href={"https://www.tiktok.com/@restylerenovationyyc"}>
            <Image src={"/images/icons/tiktok.png"} width={20} height={20} />
          </Link>
        </div>
      </div>
    </div>
  );
}
