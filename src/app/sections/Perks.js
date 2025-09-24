import { Trash } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function Perks() {
  return (
    <div className="py-16 px-4 -mt-60">
      <div className="w-11/12 mx-auto flex justify-between">
        <div className="w-1/3  flex items-center justify-center relative min-h-[335px]">
          <div className=" shadow-2xl">
            <Image
              src={"/images/bin-clip.png"}
              width={600}
              height={500}
              className="absolute top-0 left-0 z-0 w-full max-h-[335px]"
            />
          </div>
          <div className="flex flex-col items-center z-20 w-2/3 mx-auto text-center p-4">
            <Trash size={65} className="text-primary" />
            <h3 className="text-4xl font-bold text-secondary py-3">Trash</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius
              iure voluptatum quas distinctio eum
            </p>
          </div>
        </div>
        <div className="w-1/3  flex items-center justify-center relative min-h-[335px]">
          <div className=" shadow-2xl">
            <Image
              src={"/images/bin-clip.png"}
              width={600}
              height={500}
              className="absolute top-0 left-0 z-0 w-full max-h-[335px]"
            />
          </div>
          <div className="flex flex-col items-center z-20 w-2/3 mx-auto text-center p-4">
            <Trash size={65} className="text-primary" />
            <h3 className="text-4xl font-bold text-secondary py-3">Trash</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius
              iure voluptatum quas distinctio eum
            </p>
          </div>
        </div>
        <div className="w-1/3  flex items-center justify-center relative min-h-[335px]">
          <div className=" shadow-2xl">
            <Image
              src={"/images/bin-clip.png"}
              width={600}
              height={500}
              className="absolute top-0 left-0 z-0 w-full max-h-[335px]"
            />
          </div>
          <div className="flex flex-col items-center z-20 w-2/3 mx-auto text-center p-4">
            <Trash size={65} className="text-primary" />
            <h3 className="text-4xl font-bold text-secondary py-3">Trash</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius
              iure voluptatum quas distinctio eum
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
