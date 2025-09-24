import React from "react";

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 px-6 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-[#5b9d39] to-[#007994] bg-clip-text text-transparent">
            Our Work in Action
          </span>
        </h2>

        {/* Complex Gallery Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Large Featured Image */}
          <div className="md:col-span-7 md:row-span-2 relative group overflow-hidden rounded-3xl">
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
            <img
              src="https://placehold.co/800x600/1a1a1a/5b9d39?text=Recycling+Plant"
              alt="Recycling Plant"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute bottom-6 left-6 z-20">
              <h3 className="text-2xl font-bold">
                Advanced Recycling Facility
              </h3>
              <p className="text-gray-300">
                State-of-the-art technology in action
              </p>
            </div>
          </div>

          {/* Top Right Images */}
          <div className="md:col-span-5 grid grid-cols-2 gap-6">
            <div className="relative group overflow-hidden rounded-2xl col-span-1">
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
              <img
                src="https://placehold.co/400x300/1a1a1a/007994?text=Sorting+Technology"
                alt="Sorting Technology"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute bottom-4 left-4 z-20">
                <p className="text-sm font-medium">AI Sorting</p>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-2xl col-span-1">
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
              <img
                src="https://placehold.co/400x300/1a1a1a/5b9d39?text=Community+Program"
                alt="Community Program"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute bottom-4 left-4 z-20">
                <p className="text-sm font-medium">Community Impact</p>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-2xl col-span-2 md:col-span-1">
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
              <img
                src="https://placehold.co/400x300/1a1a1a/007994?text=Electric+Fleet"
                alt="Electric Fleet"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute bottom-4 left-4 z-20">
                <p className="text-sm font-medium">Green Fleet</p>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-2xl col-span-2 md:col-span-1">
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
              <img
                src="https://placehold.co/400x300/1a1a1a/5b9d39?text=Sustainable+Office"
                alt="Sustainable Office"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute bottom-4 left-4 z-20">
                <p className="text-sm font-medium">Eco-Office</p>
              </div>
            </div>
          </div>

          {/* Bottom Row Images */}
          <div className="md:col-span-4 relative group overflow-hidden rounded-2xl">
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
            <img
              src="https://placehold.co/600x400/1a1a1a/007994?text=Waste+Analytics"
              alt="Waste Analytics"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute bottom-4 left-4 z-20">
              <p className="text-sm font-medium">Data Analytics</p>
            </div>
          </div>

          <div className="md:col-span-4 relative group overflow-hidden rounded-2xl">
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
            <img
              src="https://placehold.co/600x400/1a1a1a/5b9d39?text=Composting+Facility"
              alt="Composting Facility"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute bottom-4 left-4 z-20">
              <p className="text-sm font-medium">Organic Processing</p>
            </div>
          </div>

          <div className="md:col-span-4 relative group overflow-hidden rounded-2xl">
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
            <img
              src="https://placehold.co/600x400/1a1a1a/007994?text=Client+Meeting"
              alt="Client Meeting"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute bottom-4 left-4 z-20">
              <p className="text-sm font-medium">Client Solutions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
