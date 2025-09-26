import Breadcrumb from "@/app/components/Breadcrumb";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const servicesData = {
  "residential-services": {
    title: "Residential Waste Services",
    paragraphs: [
      "At Clean City Waste, we provide reliable residential waste management in Calgary, helping homeowners keep their spaces clean, safe, and environmentally friendly. Our services include 64-gallon organic carts for yard and food waste along with 4-yard, 6-yard, and 8-yard bins for trash and recycling. Whether you live in a townhouse, or multi-unit complex, we offer flexible pickup schedules designed to make waste disposal simple and convenient. With our eco-friendly practices, you can rest assured your waste is being handled responsibly while reducing the impact on landfills.",
      "As a locally owned Calgary waste company, we are committed to delivering dependable service with a personal touch. Our residential garbage pickup and recycling services are tailored to fit seamlessly into your daily routine, keeping your home and neighborhood cleaner and greener. From everyday household trash to large cleanup projects, Clean City Waste is your trusted partner for hassle-free waste management. Contact us today for affordable bin rentals and residential waste collection in Calgary.",
    ],
    areas: [
      "Townhouses & duplexes",
      "Apartment complexes",
      "Condominiums",
      "Gated communities & residential",
    ],
    image: "/images/residential.webp",
  },
  "commercial-services": {
    title: "Commercial Waste Services",
    paragraphs: [
      "Managing waste is critical for any business, and Clean City Waste provides trusted commercial waste management services in Calgary. We offer 4-yard, 6-yard, and 8-yard bins to handle everything from daily garbage and cardboard recycling to food and organic waste. Whether you’re running a restaurant, retail store, office, or healthcare clinic, our customized waste solutions ensure your operations stay clean, compliant, and efficient.",
      "Our team understands that reliability matters to businesses. That’s why we provide scheduled garbage pickup, flexible bin rentals, and responsive customer support so you never have to worry about missed collections or overflowing bins. As a Calgary-owned and operated waste management company, we take pride in supporting local businesses with professional, affordable, and eco-conscious services. Get in touch today to book commercial garbage pickup and recycling services in Calgary.",
    ],
    areas: [
      "Restaurants, cafes & bars",
      "Retail stores & shopping plazas",
      "Offices & corporate buildings",
      "Educational institutions & schools",
      "Healthcare clinics & medical facilities",
    ],
    image: "/images/commercial.webp",
  },
  "industrial-services": {
    title: "Industrial Waste Services",
    paragraphs: [
      "For large-scale operations, you need heavy-duty waste solutions you can count on. Clean City Waste provides industrial waste management services in Calgary with 4-yard, 6-yard, and 8-yard bins designed for construction sites, manufacturing plants, and warehouses. From demolition debris to recycling and organic waste, our services keep your project site clean, safe, and compliant with local regulations.",
      "We specialize in industrial garbage pickup and bin rentals tailored to your project’s needs, ensuring efficiency and reliability at every step. With timely pickups, large container options, and eco-friendly disposal methods, Clean City Waste is the partner Calgary industries trust. Our focus on safety, professionalism, and sustainability makes us the right choice for businesses managing high volumes of waste. Contact us today for dependable industrial waste management and bin rental services in Calgary.",
    ],
    areas: [
      "Construction & demolition sites",
      "Manufacturing plants",
      "Warehouses & distribution centers",
      "Logistics & transportation companies",
      "Large-scale development projects",
    ],
    image: "/images/industrial.webp",
  },
};

export default function ServicePage({ params }) {
  const service = servicesData[params.serviceName];

  if (!service) {
    return (
      <div className="min-h-screen bg-white text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
          <p className="text-gray-400">
            The service you're looking for doesn't exist.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-white">
      <Breadcrumb name={"Our Services"} />
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {service.title}
              </span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="order-2 lg:order-1">
              <div className="space-y-6">
                {service.paragraphs.map((paragraph, index) => (
                  <p key={index} className="text-lg text-black leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="mt-12">
                <Link href={'/contact'} >
                <button className=" cursor-pointer bg-gradient-to-r from-primary to-secondary px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-transform">
                  Contact Now
                </button>
                </Link>
              </div>
            </div>

            <div className="order-1 lg:order-2 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-3xl blur-3xl -z-10"></div>
              <div className="relative bg-gradient-to-r from-primary to-secondary backdrop-blur-sm rounded-3xl p-1 border border-gray-700">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={800}
                  height={800}
                  className="rounded-3xl w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>

          {/* Areas We Serve */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Industries/Areas We Serve
              </span>
            </h2>
            <p className="text-xl text-black max-w-3xl mx-auto">
              We provide specialized waste management solutions tailored to your
              specific industry needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {service.areas.map((area, index) => (
              <div
                key={index}
                className="flex items-center justify-center bg-gradient-to-br from-primary to-secondary rounded-2xl p-6 text-center hover:scale-105 transition-transform group"
              >
                <div className="text-white font-semibold text-base group-hover:text-white transition-colors">
                  {area}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
