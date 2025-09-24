import React from "react";

export default function Stats() {
  return (
    <section
      id="stats"
      className="py-20 px-6 bg-primary/10"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center group">
            <div className="text-5xl md:text-6xl font-bold mb-2 bg-gradient-to-r from-[#5b9d39] to-[#007994] bg-clip-text text-transparent group-hover:scale-110 transition-transform">
              12K+
            </div>
            <div className="text-gray-300 text-lg">Tons Recycled</div>
          </div>
          <div className="text-center group">
            <div className="text-5xl md:text-6xl font-bold mb-2 bg-gradient-to-r from-[#5b9d39] to-[#007994] bg-clip-text text-transparent group-hover:scale-110 transition-transform">
              98%
            </div>
            <div className="text-gray-300 text-lg">Waste Diverted</div>
          </div>
          <div className="text-center group">
            <div className="text-5xl md:text-6xl font-bold mb-2 bg-gradient-to-r from-[#5b9d39] to-[#007994] bg-clip-text text-transparent group-hover:scale-110 transition-transform">
              500+
            </div>
            <div className="text-gray-300 text-lg">Business Partners</div>
          </div>
          <div className="text-center group">
            <div className="text-5xl md:text-6xl font-bold mb-2 bg-gradient-to-r from-[#5b9d39] to-[#007994] bg-clip-text text-transparent group-hover:scale-110 transition-transform">
              15+
            </div>
            <div className="text-gray-300 text-lg">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
}
