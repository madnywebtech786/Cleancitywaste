import React from "react";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 px-4 sm:px-8 md:px-12 lg:px-20 relative overflow-hidden bg-white dark:text-black">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 -z-10"></div>
      <div className="max-w-7xl mx-auto">
        <div className="text-center w-full lg:w-1/2 mx-auto">
          <h3 className="bg-gradient-to-r from-primary to-secondary/70 bg-clip-text text-transparent text-2xl font-bold mb-2">
            Testimonials
          </h3>
          <h4 className="text-4xl lg:text-6xl font-bold">Our happy clients</h4>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 mt-10">
          {[
            {
              name: "Mike Thompson",
              company: "Local Café Owner",
              content:
                "Waste Plus Inc has made dealing with our cafe food waste a lot easier. We started using their organic pickup and within a few months we were composting more and sending over 30% less to landfill. Drivers are always on time and super friendly. Overall happy with the service.",
              avatar: "https://placehold.co/100/5b9d39/white?text=MT",
              rating: 5,
            },

            {
              name: "Jennifer Smith",
              company: "Property Manager",
              content:
                "We manage a few buildings around Calgary and needed a waste company that actually shows up when they say they will. Waste Plus Inc has been great about that. Their team is easy to reach if we ever need to adjust pickup days, and tenants haven't complained about overflowing bins since we switched.",
              avatar: "https://placehold.co/100/5b9d39/white?text=JS",
              rating: 5,
            },
          ].map((testimonial, index) => (
            <div
              key={index}
              className="min-h-[350px] group relative bg-paper rounded-3xl p-8 border border-ink/10 hover:border-primary/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/10"
            >
              {/* Glowing effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-secondary/5 to-primary/0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20">
                <div className="w-full h-full border-t-2 border-r-2 border-primary/30 rounded-tr-3xl"></div>
              </div>

              {/* Rating stars */}
              <div className="flex mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-primary fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Content */}
              <p className="mb-8 relative z-10 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center absolute bottom-5">
                <div className="relative">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full ring-2 ring-gray-700/50 group-hover:ring-primary/50 transition-all duration-300"
                  />
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-lg text-ink group-hover:text-primary transition-colors duration-300">
                    {testimonial.name}
                  </h3>
                  <p className="text-xs font-medium text-ink/60">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Floating orbs */}
        <div className="hidden lg:block absolute -top-20 -left-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="hidden lg:block absolute -bottom-20 -right-20 w-40 h-40 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
    </section>
  );
}
