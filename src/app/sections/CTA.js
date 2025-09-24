import React from 'react'

export default function CTA() {
  return (
    <section className="py-20 px-6 bg-gradient-to-r from-[#5b9d39]/10 via-[#007994]/10 to-[#5b9d39]/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your
            <br />
            <span className="bg-gradient-to-r from-[#5b9d39] to-[#007994] bg-clip-text text-transparent">
              Waste Management?
            </span>
          </h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto">
            Join thousands of businesses and communities making a difference with our innovative solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="text-white bg-gradient-to-r from-[#5b9d39] to-[#007994] px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-transform">
             View Services
            </button>
            <button className="border border-gray-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/5 transition-colors">
              Call Now
            </button>
          </div>
        </div>
      </section>
  )
}
