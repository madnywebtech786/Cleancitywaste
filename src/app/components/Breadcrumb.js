import { Truck } from "lucide-react";
import React from "react";

export default function Breadcrumb({ name }) {
  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-br from-primary via-primary to-secondary">
      {/* decorative texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #ffffff 1.5px, transparent 1.5px)",
          backgroundSize: "20px 20px",
        }}
      />
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 -bottom-20 h-80 w-80 rounded-full bg-black/10 blur-3xl" />
      <Truck
        size={280}
        strokeWidth={0.6}
        className="pointer-events-none absolute -right-10 bottom-0 text-white/[0.07] hidden lg:block"
      />

      <div className="relative px-4 sm:px-8 md:px-12 lg:px-20 py-20 sm:py-24 lg:py-32 flex items-center justify-center text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.05]">
          {name}
        </h1>
      </div>

      {/* bottom edge accent */}
      <div className="h-1.5 w-full bg-gradient-to-r from-white/40 via-white/10 to-transparent" />
    </div>
  );
}
