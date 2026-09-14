"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Search,
  ShoppingCart,
  ChevronDown,
  Menu as MenuIcon,
  X,
} from "lucide-react";
import TopBar from "../sections/TopBar";

const navItems = [
  { name: "HOME", href: "/" },
  { name: "ABOUT", href: "/about-us" },
  { name: "Why Us", href: "/why-choose-us" },
  {
    name: "Waste Solutions",
    href: "#",
    dropdown: [
      { name: "General Waste Collection", blurb: "Scheduled front-load & Molok pickup", href: "/waste-services/general-waste-collection" },
      { name: "Mixed Recycling Collection", blurb: "Cardboard, paper, plastics & metals", href: "/waste-services/mixed-recycling-collection" },
      { name: "Organic Waste Collection", blurb: "Food & organic materials, diverted", href: "/waste-services/organic-waste-collection" },
      { name: "On-Call Junk Hauling", blurb: "Trucks & trailers, ready when you call", href: "/waste-services/on-call-junk-hauling" },
      { name: "Bin & Enclosure Cleaning", blurb: "Debris removal & pressure washing", href: "/waste-services/bin-enclosure-cleaning" },
      { name: "Front Load & Molok Bins", blurb: "The right container for your site", href: "/waste-services/front-load-molok-bins" },
    ],
  },
  {
    name: "Our Customers",
    href: "#",
    dropdown: [
      { name: "Residential", blurb: "Homes, townhouses & multi-unit", href: "/customers/residential-services" },
      { name: "Commercial", blurb: "Restaurants, retail & offices", href: "/customers/commercial-services" },
      { name: "Industrial", blurb: "Construction & manufacturing sites", href: "/customers/industrial-services" },
      { name: "Property Managers", blurb: "One partner for every property", href: "/customers/property-managers" },
      { name: "Plaza & Building Owners", blurb: "Waste areas that reflect well on you", href: "/customers/plaza-building-owners" },
      { name: "Condo Boards", blurb: "Common areas residents can count on", href: "/customers/condo-boards" },
    ],
  },
  { name: "Contact Us", href: "/contact" },
];

const Header = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  // an item is active if the current path matches its href exactly (for "/"),
  // or starts with its href (for section roots), or one of its dropdown links matches
  const isItemActive = (item) => {
    if (item.dropdown) {
      return item.dropdown.some((sub) => pathname.startsWith(sub.href));
    }
    if (item.href === "/") return pathname === "/";
    return pathname.startsWith(item.href);
  };

  // mobile accordion state: store expanded top-level items and expanded nested items
  const [expanded, setExpanded] = useState(new Set()); // holds top-level item names
  const [subExpanded, setSubExpanded] = useState(new Set()); // holds keys like "Services|Other Services"

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleExpand = (name) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(name)) next.delete(name);
      else next.add(name);
      return next;
    });
  };

  const toggleSubExpand = (key) => {
    setSubExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  };

  // close helper that also collapses accordions
  const closeMenu = () => {
    setIsMenuOpen(false);
    setExpanded(new Set());
    setSubExpanded(new Set());
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white transition-all duration-300 ${
        isSticky ? "shadow-md py-4" : "py-3"
      } !py-0 `}
    >
      <TopBar />
      <div className=" px-4 sm:px-8 md:px-12 lg:px-20">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex-shrink-0 p-2">
            <Image
              src={"/images/logo.jpg"}
              width={120}
              height={120}
              className="w-32 lg:w-40 h-20 lg:h-24 rounded-xl"
            />
          </Link>

          <nav className="hidden xl:flex items-center dark:text-black">
            <ul className="flex items-center gap-6 2xl:gap-8">
              {navItems.map((item) => (
                <li key={item.name} className="relative group">
                  <Link
                    href={item.href}
                    className={`relative flex items-center gap-1 text-base font-medium uppercase transition-colors hover:text-primary ${
                      isItemActive(item) ? "text-primary" : "text-ink"
                    }`}
                  >
                    {item.name}
                    {item.dropdown && (
                      <ChevronDown className="h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
                    )}
                    <span className="pointer-events-none absolute -bottom-1.5 left-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full" />
                  </Link>

                  {item.dropdown && (
                    <div
                      className="absolute left-1/2 -translate-x-1/2 top-full pt-4
                       opacity-0 invisible translate-y-2 scale-[0.98]
                       group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:scale-100
                       transition-all duration-200 ease-out origin-top"
                    >
                      <ul className="w-[420px] bg-white shadow-xl rounded-2xl p-3 border border-ink/5 grid grid-cols-1 gap-1">
                        {item.dropdown.map((subItem) => (
                          <li key={subItem.name}>
                            <Link
                              href={subItem.href}
                              className="group/item flex items-center justify-between gap-3 rounded-xl px-4 py-3 hover:bg-primary/8 transition-colors"
                            >
                              <span>
                                <span className="block text-sm font-semibold text-ink group-hover/item:text-primary transition-colors">
                                  {subItem.name}
                                </span>
                                {subItem.blurb && (
                                  <span className="block text-xs text-ink/50 mt-0.5">
                                    {subItem.blurb}
                                  </span>
                                )}
                              </span>
                              <ChevronDown className="h-4 w-4 -rotate-90 text-ink/20 group-hover/item:text-primary group-hover/item:translate-x-0.5 transition-all flex-shrink-0" />
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <Link href="tel:+14034971731" className="hidden xl:block ml-4">
              <div className="rounded-2xl bg-primary text-white font-semibold text-base py-[14px] px-8 transition-all duration-300 hover:bg-secondary">
                Call Now
              </div>
            </Link>
            <Link href="/contact" className="hidden xl:block">
              <div className="rounded-2xl border border-primary text-primary font-semibold text-base py-[14px] px-8 transition-all duration-300 hover:bg-primary hover:text-white">
                Get Quote
              </div>
            </Link>
            <button
              className="xl:hidden p-2 dark:text-black"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <MenuIcon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* ---------------------------
          MOBILE SLIDING PANEL (right -> left)
         --------------------------- */}
      {/* rendered always so close animation stays smooth */}
      <div className="xl:hidden">
        {/* backdrop overlay */}
        <div
          className={`fixed inset-0 z-40 transition-opacity duration-300 ${
            isMenuOpen
              ? "opacity-50 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          } bg-black`}
          onClick={closeMenu}
          aria-hidden={!isMenuOpen}
        />

        {/* sliding panel */}
        <aside
          className={`fixed top-0 right-0 z-50 h-full w-full sm:w-[480px] bg-white shadow-xl transform transition-transform duration-300 ease-in-out
            ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
          aria-hidden={!isMenuOpen}
        >
          {/* header inside panel */}
          <div className="flex items-center justify-between px-4 py-4 border-b">
            <div className="flex items-center gap-3">
              <Image
                src={"/images/logo.jpg"}
                width={90}
                height={60}
                alt="logo"
                className="w-40 h-16 object-contain"
              />
            </div>
            <button onClick={closeMenu} aria-label="Close menu" className="p-2">
              <X className="h-6 w-6 dark:text-black" />
            </button>
          </div>

          {/* scrollable menu area */}
          <nav className="overflow-y-auto h-[calc(100vh-64px)] p-6">
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li
                  key={item.name}
                  className="border-b border-gray-200 pb-2 dark:text-black"
                >
                  {item.dropdown ? (
                    <>
                      <button
                        onClick={() => toggleExpand(item.name)}
                        className={`w-full flex items-center justify-between py-3 text-sm font-semibold uppercase ${
                          isItemActive(item) ? "text-primary" : ""
                        }`}
                        aria-expanded={expanded.has(item.name)}
                      >
                        <span>{item.name}</span>
                        <ChevronDown
                          className={`h-4 w-4 transition-transform ${
                            expanded.has(item.name) ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {/* animated accordion panel for first-level */}
                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          expanded.has(item.name)
                            ? "max-h-[1000px] opacity-100 mt-2"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        <ul className="pl-3">
                          {item.dropdown.map((subItem) => (
                            <li key={subItem.name} className="py-2">
                              {subItem.dropdown ? (
                                <>
                                  <button
                                    onClick={() =>
                                      toggleSubExpand(
                                        `${item.name}|${subItem.name}`
                                      )
                                    }
                                    className="w-full flex items-center justify-between text-sm"
                                    aria-expanded={subExpanded.has(
                                      `${item.name}|${subItem.name}`
                                    )}
                                  >
                                    <span>{subItem.name}</span>
                                    <ChevronDown
                                      className={`h-3 w-3 transition-transform ${
                                        subExpanded.has(
                                          `${item.name}|${subItem.name}`
                                        )
                                          ? "rotate-180"
                                          : ""
                                      }`}
                                    />
                                  </button>

                                  <div
                                    className={`overflow-hidden transition-all duration-300 ${
                                      subExpanded.has(
                                        `${item.name}|${subItem.name}`
                                      )
                                        ? "max-h-[800px] opacity-100 mt-2"
                                        : "max-h-0 opacity-0"
                                    }`}
                                  >
                                    <ul className="pl-3">
                                      {subItem.dropdown.map((subSub) => (
                                        <li key={subSub.name} className="py-1">
                                          <Link
                                            href={subSub.href}
                                            onClick={closeMenu}
                                            className="block text-sm"
                                          >
                                            {subSub.name}
                                          </Link>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                </>
                              ) : (
                                <Link
                                  href={subItem.href}
                                  onClick={closeMenu}
                                  className="block text-sm"
                                >
                                  {subItem.name}
                                </Link>
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={closeMenu}
                      className={`block py-3 text-sm font-semibold uppercase ${
                        isItemActive(item) ? "text-primary" : ""
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            {/* CTA at bottom of menu */}
            <div className="mt-6 px-2 flex justify-center lg:justify-start gap-4">
              <Link href="tel:+14034971731">
                <div
                  onClick={closeMenu}
                  className="rounded-2xl bg-primary text-white font-semibold text-sm py-[14px] px-8 w-full text-center"
                >
                  Call Now
                </div>
              </Link>
              <Link href="/contact">
                <div
                  onClick={closeMenu}
                  className="rounded-2xl border border-primary text-primary font-semibold text-sm py-[14px] px-8 w-full text-center"
                >
                  Get Quote
                </div>
              </Link>
            </div>
          </nav>
        </aside>
      </div>
      {/* ---------------------------
          END MOBILE PANEL
         --------------------------- */}
    </header>
  );
};

export default Header;
