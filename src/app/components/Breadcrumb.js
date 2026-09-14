import { ChevronRight, Truck } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Breadcrumb({ name, section, eyebrow }) {
  const trail = [
    { label: "Home", href: "/" },
    ...(section ? [{ label: section }] : []),
    { label: name },
  ];

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

      <div className="relative px-4 sm:px-8 md:px-12 lg:px-20 pt-14 pb-16 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-24">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-1.5 text-sm text-white/80">
            {trail.map((item, index) => (
              <li key={index} className="flex items-center gap-1.5">
                {index > 0 && (
                  <ChevronRight size={14} className="text-white/50" />
                )}
                {item.href ? (
                  <Link
                    href={item.href}
                    className="hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span
                    className={
                      index === trail.length - 1
                        ? "text-white font-medium"
                        : ""
                    }
                  >
                    {item.label}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </nav>

        <div className="mt-7 lg:mt-9 max-w-3xl">
          {eyebrow && (
            <p className="text-base sm:text-lg font-medium text-white/85 mb-3">
              {eyebrow}
            </p>
          )}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.05]">
            {name}
          </h1>
        </div>
      </div>

      {/* bottom edge accent */}
      <div className="h-1.5 w-full bg-gradient-to-r from-white/40 via-white/10 to-transparent" />
    </div>
  );
}
