import React from "react";

export default function Stats() {
  return (
    <section
      id="stats"
      className="py-16 px-4 sm:px-8 md:px-12 lg:px-20 bg-primary/10"
    >
      <div className="">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center group">
            <div className="text-5xl md:text-6xl font-bold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent group-hover:scale-110 transition-transform">
              25K+
            </div>
            <div className="text-secondary text-lg">Scheduled Pickups / Year</div>
          </div>
          <div className="text-center group">
            <div className="text-5xl md:text-6xl font-bold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent group-hover:scale-110 transition-transform">
              1,200+
            </div>
            <div className="text-secondary text-lg">Active Business Customers</div>
          </div>
          <div className="text-center group">
            <div className="text-5xl md:text-6xl font-bold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent group-hover:scale-110 transition-transform">
              9,000+
            </div>
            <div className="text-secondary text-lg">Bin Rentals Fulfilled</div>
          </div>
          <div className="text-center group">
            <div className="text-5xl md:text-6xl font-bold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent group-hover:scale-110 transition-transform">
              99%
            </div>
            <div className="text-secondary text-lg">On-Time Collection Rate</div>
          </div>
        </div>

      </div>
    </section>
  );
}
