import { Trash } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function Services() {
  return (
    <div className="py-16 px-4 sm:px-8 md:px-12 lg:px-20 bg-primary/10">
      <div className="text-center w-1/2 mx-auto">
        <h3 className="bg-gradient-to-r from-[#5b9d39] to-[#007994] bg-clip-text text-transparent text-2xl font-bold mb-2">
          Our Services
        </h3>
        <h4 className="text-5xl font-bold">
          A wide range of waste disposal services
        </h4>
      </div>

      <div className="grid grid-cols-3 gap-5 mt-10">
        <div className="bg-white shadow-2xl !rounded-t-xl !rounded-b-[20%] p-6 pb-10 flex flex-col gap-4">
          <div className="w-11/12 mx-auto">
            <Image  
              src={"/images/garbage.png"}
              width={350}
              height={250}
              className="max-h-[250px] rounded-t-xl !rounded-b-[20%] mx-auto relative z-10"
            />
            <div className="rounded-full w-20 h-20 bg-white -mt-14 mx-auto relative z-30 flex items-center justify-center shadow-2xl">
              <Trash size={30} className="text-primary" />
            </div>
            <div className="flex flex-col gap-4 mt-4">
              <h3 className="text-2xl font-bold text-center">Garbage</h3>
              <p className="text-center">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia
                quasi minus dolorum magnam consequuntur libero
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
              src={"/images/garbage.png"}
              width={350}
              height={250}
              className="max-h-[250px] rounded-t-xl !rounded-b-[20%] mx-auto relative z-10"
            />
            <div className="rounded-full w-20 h-20 bg-white -mt-14 mx-auto relative z-30 flex items-center justify-center shadow-2xl">
              <Trash size={30} className="text-primary" />
            </div>
            <div className="flex flex-col gap-4 mt-4">
              <h3 className="text-2xl font-bold text-center">Garbage</h3>
              <p className="text-center">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia
                quasi minus dolorum magnam consequuntur libero
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
              src={"/images/garbage.png"}
              width={350}
              height={250}
              className="max-h-[250px] rounded-t-xl !rounded-b-[20%] mx-auto relative z-10"
            />
            <div className="rounded-full w-20 h-20 bg-white -mt-14 mx-auto relative z-30 flex items-center justify-center shadow-2xl">
              <Trash size={30} className="text-primary" />
            </div>
            <div className="flex flex-col gap-4 mt-4">
              <h3 className="text-2xl font-bold text-center">Garbage</h3>
              <p className="text-center">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia
                quasi minus dolorum magnam consequuntur libero
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
