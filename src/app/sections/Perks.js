import { Trash } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function Perks() {
  return (
    <div className="py-16 px-4 -mt-60 bg-white">
      <div className="w-full lg:w-11/12 mx-auto flex flex-col md:flex-row justify-between">
        <div className="w-full md:w-1/3  flex items-center justify-center relative min-h-[335px]">
          <div className=" shadow-2xl">
            <Image
              src={"/images/bin-clip.png"}
              width={600}
              height={500}
              className="absolute top-0 left-0 z-0 w-full h-[335px]"
            />
          </div>
          <div className="flex flex-col items-center z-20 w-2/3 mx-auto text-center p-4">
            <Trash size={65} className="text-primary" />
            <h3 className="text-4xl font-bold text-secondary py-3">4 Yard</h3>
          </div>
        </div>
        <div className="w-full md:w-1/3  flex items-center justify-center relative min-h-[335px]">
          <div className=" shadow-2xl">
            <Image
              src={"/images/bin-clip.png"}
              width={600}
              height={500}
              className="absolute top-0 left-0 z-0 w-full h-[335px]"
            />
          </div>
          <div className="flex flex-col items-center z-20 w-2/3 mx-auto text-center p-4">
            <Trash size={65} className="text-primary" />
            <h3 className="text-4xl font-bold text-secondary py-3">6 Yard</h3>
          </div>
        </div>
        <div className="w-full md:w-1/3  flex items-center justify-center relative min-h-[335px]">
          <div className=" shadow-2xl">
            <Image
              src={"/images/bin-clip.png"}
              width={600}
              height={500}
              className="absolute top-0 left-0 z-0 w-full h-[335px]"
            />
          </div>
          <div className="flex flex-col items-center z-20 w-2/3 mx-auto text-center p-4">
            <Trash size={65} className="text-primary" />
            <h3 className="text-4xl font-bold text-secondary py-3">8 Yard</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
