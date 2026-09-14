import Image from "next/image";
import "./style/HeroStyle.css";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative w-full h-auto lg:py-0 lg:h-auto lg:min-h-screen bg-white pb-16 lg:pb-0">
      <div className="relative w-full h-full items-center flex flex-col lg:flex-row gap-10 px-4 p-8 lg:p-20 !pb-0 bg-transparent">
        <div className="w-full lg:w-1/2 flex flex-col text-left justify-center gap-3 ">
          <p className="text-primary text-xs lg:text-sm font-semibold flex items-center gap-2 tracking-wide">
            CALGARY&apos;S WASTE MANAGEMENT EXPERTS
          </p>

          <h2 className="text-ink text-4xl lg:text-6xl font-bold text-left">
            WE DON&apos;T HAVE TO BRAG ABOUT US
          </h2>
          <p className="text-ink/60 mt-4 max-w-lg text-left">
            Sites serviced by us speak for us. We provide reliable
            commercial and residential waste collection, recycling
            services, and certified disposal for construction and
            industrial waste, with drivers who pick up overflow by hand
            so your property always looks its best.
          </p>
          <div className="flex items-center flex-wrap mt-6 gap-4">
            <Link href={"/contact"}>
              <button className="cursor-pointer bg-gradient-to-r from-primary to-secondary text-white px-4 py-3 lg:px-6 lg:py-3 text-sm lg:text-base rounded-lg font-bold shadow-lg shadow-secondary/30 hover:shadow-xl hover:shadow-secondary/40 hover:-translate-y-0.5 transition-all duration-300">
                Request Free Quote
              </button>
            </Link>
            <Link href={"/#services"}>
              <button className="cursor-pointer bg-white text-ink border-2 border-ink/10 px-4 py-3 lg:px-6 lg:py-3 text-sm lg:text-base rounded-lg font-bold hover:border-primary hover:text-primary transition-all duration-300">
                Our Services
              </button>
            </Link>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <Image
            src={"/images/hero-img.png"}
            width={450}
            height={450}
            className="mx-auto relative z-20 w-4/5 md:w-2/3 rounded-md animate-float"
            alt="Waste Plus Inc. waste management services"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
