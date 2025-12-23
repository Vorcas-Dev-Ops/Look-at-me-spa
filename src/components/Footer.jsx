import React from "react";
import { MapPin, Phone, Mail, Facebook, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">

        {/* Brand */}
        <div>
          <div className="flex items-center gap-4 mb-4 group">
            <img
              src={logo}
              alt="Look At Me Spa Logo"
              className="
                h-16 w-auto rounded-3xl p-2
                bg-gray-800 shadow-lg ring-1 ring-white/30
                transition-all duration-500
                group-hover:scale-110 group-hover:shadow-2xl
              "
            />
            <h2 className="
              text-2xl font-extrabold font-serif
              bg-clip-text text-transparent
              bg-gradient-to-r from-amber-300 to-yellow-500
              tracking-wide
            ">
              Look@Me Spa
            </h2>
          </div>

          <p className="text-sm leading-relaxed text-gray-400">
            Experience luxury, wellness, and beauty through our premium
            spa & salon services, crafted for comfort and care.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="
            text-lg font-bold font-serif mb-4
            bg-clip-text text-transparent
            bg-gradient-to-r from-amber-400 to-yellow-600
          ">
            Quick Links
          </h3>

          <ul className="space-y-2 text-sm">
            {[
              { name: "Home", path: "/" },
              { name: "Our Services", path: "/ourservices" },
              { name: "Branches", path: "/branches" },
              { name: "About Us", path: "/about" },
              { name: "Book Appointment", path: "/book-appointment" },
              { name: "Gallery", path: "/gallery" },
            ].map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className="hover:text-white transition"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="
            text-lg font-bold font-serif mb-4
            bg-clip-text text-transparent
            bg-gradient-to-r from-amber-400 to-yellow-600
          ">
            Contact Us
          </h3>

          <ul className="space-y-3 text-sm">
            <li className="flex gap-3">
              <MapPin size={16} className="mt-1" />
              Bengaluru, India
            </li>

            <li className="flex gap-3">
              <Phone size={16} />
              <a
                href="tel:+917349058245"
                className="hover:text-white transition"
              >
                +91 73490 58245
              </a>
            </li>

            <li className="flex gap-3">
              <Mail size={16} />
              <a
                href="mailto:contact@lookatme.com"
                className="hover:text-white transition"
              >
                contact@lookatme.com
              </a>
            </li>
          </ul>

          {/* Social Icons */}
          <div className="flex gap-4 mt-5">
            {/* WhatsApp */}
            <a
              href="https://wa.me/917349058245"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-500 transition"
              aria-label="WhatsApp"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path d="M20.52 3.48A11.84 11.84 0 0 0 12.04 0C5.54 0 .36 5.18.36 11.67c0 2.06.54 4.1 1.56 5.9L0 24l6.64-1.94a11.7 11.7 0 0 0 5.4 1.34h.01c6.49 0 11.67-5.18 11.67-11.67a11.63 11.63 0 0 0-3.2-8.25Z" />
              </svg>
            </a>

            <Facebook size={20} className="cursor-pointer hover:text-white transition" />
            <Instagram size={20} className="cursor-pointer hover:text-white transition" />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 py-4 text-center text-sm text-gray-500">
        <p>
          © {new Date().getFullYear()} LookAtMe Salon. All Rights Reserved.
        </p>
        <p className="text-xs mt-1">
          Designed & Developed by{" "}
          <a
            href="https://vorcastechlab.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-amber-400 hover:text-amber-300 transition"
          >
            Vorcas Techlab
          </a>
        </p>
      </div>
    </footer>
  );
}
