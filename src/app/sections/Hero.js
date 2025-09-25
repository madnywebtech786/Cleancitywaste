"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { useRef } from "react";
import "./style/HeroStyle.css";
import Link from "next/link";

const Hero = () => {
  const swiperRef = useRef(null);

  const handleNext = () => {
    if (swiperRef.current) swiperRef.current.slideNext();
  };

  const handlePrev = () => {
    if (swiperRef.current) swiperRef.current.slidePrev();
  };
  return (
    <div className="relative w-full h-auto lg:py-0 lg:h-auto lg:min-h-screen heroBg pb-86 lg:!pb-86">
      <Swiper
        modules={[Navigation, Autoplay]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        autoplay={{ delay: 30000 }}
        loop
        className="h-full z-20 pb-96"
      >
        <SwiperSlide>
          <div
            className={`relative w-full h-full items-center flex flex-col lg:flex-row gap-10 px-4 p-8 lg:p-20 !pb-0  bg-transparent`}
          >
            <div className="w-full lg:w-1/2 flex flex-col text-left justify-center gap-3 ">
              <p className="text-white text-sm lg:text-base font-semibold flex items-center gap-2">
                PROFESSIONAL WASTE MANAGEMENT & RECYCLING SERVICES
              </p>

              <h2 className="text-white text-4xl lg:text-6xl font-bold text-left">
                KEEP YOUR SITE CLEAN & COMPLIANT
              </h2>
              <p className="text-white mt-4 max-w-lg text-left">
                We provide reliable commercial and residential waste collection,
                recycling services, and certified disposal for construction and
                industrial waste. Reduce landfill impact and improve compliance
                with flexible pickup schedules and transparent pricing.
              </p>
              <div className="flex items-center mt-6 gap-4">
                <Link href={"/Contact-us"}>
                  <button className="cursor-pointer bg-primary text-white px-4 py-3 lg:px-6 lg:py-3 text-sm lg:text-base rounded-lg font-bold">
                    Request Free Quote
                  </button>
                </Link>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <Image
                src={"/images/hero1.png"}
                width={450}
                height={450}
                className="mx-auto relative z-20 w-4/5 md:w-2/3"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className={`relative w-full h-full items-center flex flex-col lg:flex-row gap-10 px-4 p-8 lg:p-20 !pb-0  bg-transparent`}
          >
            <div className="w-full lg:w-1/2 flex flex-col text-left justify-center gap-3 ">
              <p className="text-white text-sm lg:text-base font-semibold flex items-center gap-2">
                COMMERCIAL & INDUSTRIAL WASTE DISPOSAL EXPERTS
              </p>

              <h2 className="text-white text-4xl lg:text-6xl font-bold text-left">
                REDUCE WASTE, BOOST RECYCLING RATES
              </h2>
              <p className="text-white mt-4 max-w-lg text-left">
                Tailored waste management plans including hazardous material
                handling, secure disposal, and recycling program implementation
                to keep your sites safe, compliant, and environmentally
                responsible.
              </p>
              <div className="flex items-center mt-6 gap-4">
                <Link href={"/Contact-us"}>
                  <button className="cursor-pointer bg-primary text-white px-4 py-3 lg:px-6 lg:py-3 text-sm lg:text-base rounded-lg font-bold">
                    Request Free Quote
                  </button>
                </Link>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <Image
                src={"/images/hero2.png"}
                width={450}
                height={450}
                className="mx-auto relative z-20 w-4/5 md:w-2/3"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className={`relative w-full h-full items-center flex flex-col lg:flex-row gap-10 px-4 p-8 lg:p-20 !pb-0  bg-transparent`}
          >
            <div className="w-full lg:w-1/2 flex flex-col text-left justify-center gap-3 ">
              <p className="text-white text-sm lg:text-base font-semibold flex items-center gap-2">
                ECO-FRIENDLY WASTE MANAGEMENT SOLUTIONS
              </p>

              <h2 className="text-white text-4xl lg:text-6xl font-bold text-left">
                SMART WASTE SOLUTIONS FOR BUSINESS
              </h2>
              <p className="text-white mt-4 max-w-lg text-left">
                From on-site recycling stations to full-service waste audits and
                sustainability consulting, we help organizations reduce costs,
                meet environmental goals, and achieve measurable diversion from
                landfills.
              </p>
              <div className="flex items-center mt-6 gap-4">
                <Link href={"/Contact-us"}>
                  <button className="cursor-pointer bg-primary text-white px-4 py-3 lg:px-6 lg:py-3 text-sm lg:text-base rounded-lg font-bold">
                    Request Free Quote
                  </button>
                </Link>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <Image
                src={"/images/hero3.png"}
                width={450}
                height={450}
                className="mx-auto relative z-20 w-4/5 md:w-2/3"
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <Image
        src={"/images/recycle.png"}
        width={130}
        height={130}
        className="absolute top-15 left-[40%] recycle z-10 opacity-60"
      />

      <Image
        src={"/images/dot2.png"}
        width={200}
        height={200}
        className="absolute top-1/6 right-1/5 bin z-0 opacity-60"
      />

      <Image
        src={"/images/dot1.png"}
        width={200}
        height={200}
        className="absolute -top-10 -left-5 bin z-0 opacity-60"
      />

      {/* Navigation Buttons */}

      <div className="hidden lg:flex absolute top-[40%] right-0  flex-col gap-5 w-40 h-40">
        <button
          onClick={handleNext}
          className="w-16 h-16 bg-primary text-white text-4xl rounded-full flex items-center justify-center z-10 cursor-pointer"
        >
          →
        </button>
        <button
          onClick={handlePrev}
          className="w-16 h-16 bg-primary text-white text-4xl rounded-full flex items-center justify-center z-10 cursor-pointer"
        >
          ←
        </button>
      </div>

      <div class="custom-shape-divider-bottom-1758630055 ">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
