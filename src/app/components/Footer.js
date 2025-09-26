import Link from "next/link";
import Image from "next/image";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";

const Footer = () => {
  const socialLinks = [
    {
      icon: <Facebook size={16} />,
      href: "",
    },
    {
      icon: <Instagram size={16} />,
      href: "",
    },
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about-us" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <footer className="bg-gradient-to-r from-primary to-secondary text-gray-300 ">
      <div className="py-16 px-4 sm:px-8 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: About */}
          <div className="space-y-4 pr-4">
            <Link
              href="/"
              className="inline-flex items-center justify-center w-full space-x-2 rounded-2xl mb-0"
            >
              <Image
                src={"/images/logo.png"}
                width={150}
                height={150}
                className="w-full h-28 bg-white rounded-2xl"
              />
            </Link>
            <p className="text-white text-base leading-relaxed">
              Clean City Waste provides dependable residential, commercial, and
              industrial waste management across Calgary and surrounding
              communities.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-bold text-xl text-white mb-3">Quick Links</h4>
            <div className="w-16 h-0.5 bg-primary-red mb-5"></div>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white hover:text-primary-red hover:pl-2 transition-all duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Us */}
          <div>
            <h4 className="font-bold text-xl text-white mb-3">Contact Us</h4>
            <div className="w-16 h-0.5 bg-primary-red mb-5"></div>
            <ul className="space-y-4 text-white">
              <li className="flex items-start space-x-3">
                <Phone
                  size={20}
                  className="text-primary-red mt-1 flex-shrink-0"
                />
                <a
                  href="tel:+14034971731"
                  className="hover:text-primary-red transition-colors"
                >
                  403-497-1731
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Mail
                  size={20}
                  className="text-primary-red mt-1 flex-shrink-0"
                />
                <a
                  href="mailto:info@cleancitywaste.ca"
                  className="hover:text-primary-red transition-colors"
                >
                  info@cleancitywaste.ca
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin
                  size={20}
                  className="text-primary-red mt-1 flex-shrink-0"
                />
                <span>Calgary & Surrounding Areas</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Location/Opening Hours */}
          <div>
            <h4 className="font-bold text-xl text-white mb-3">Follow Us</h4>
            <div className="flex space-x-3 pt-2">
              {socialLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="w-9 h-9 flex items-center justify-center rounded-full border-2 border-white text-white hover:bg-primary-red hover:border-primary-red transition-all duration-300"
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white">
        <div className="container py-6 text-sm">
          <div className="flex justify-center items-center space-y-4 sm:space-y-0">
            <p className=" text-white">
              © Copyright 2025, Clean City Waste . All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
