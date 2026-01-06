import React from "react";
import { MapPin, Phone, Mail, Facebook, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#0a1628] to-[#060c17] text-gray-300">

      {/* ================= MOBILE FOOTER ================= */}
      <div className="md:hidden px-6 py-10 space-y-10">

        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-3">
            <img
              src={logo}
              alt="Look At Me Spa"
              className="h-12 w-auto rounded-xl bg-gray-800 p-2"
            />
            <h2 className="text-lg font-bold text-yellow-400">
              Look@Me Spa
            </h2>
          </div>

          <p className="text-sm text-gray-400">
            Experience luxury, wellness, and beauty through our premium
            spa & salon services.
          </p>
        </div>

        {/* Quick Links + Contact (SIDE BY SIDE) */}
        <div className="grid grid-cols-2 gap-6">

          {/* Quick Links */}
          <div>
            <h3 className="text-yellow-400 font-semibold mb-3 text-sm">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/ourservices">Our Services</Link></li>
              <li><Link to="/branches">Branches</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/book-appointment">Book</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-yellow-400 font-semibold mb-3 text-sm">
              Contact
            </h3>

            <ul className="space-y-2 text-sm">
              <li className="flex gap-2">
                <MapPin size={14} /> Bengaluru
              </li>
              <li className="flex gap-2">
                <Phone size={14} />
                <a href="tel:+919535261933">+91 9535261933</a>
              </li>
              <li className="flex gap-2">
                <Mail size={14} /> contact@lookatme.com
              </li>
            </ul>

            {/* ✅ SOCIAL ICONS — MOBILE (BELOW CONTACT) */}
            <div className="flex gap-4 mt-4">
              <a
                href="https://wa.me/919535261933"
                target="_blank"
                rel="noreferrer"
                className="text-green-500"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path d="M20.52 3.48A11.84 11.84 0 0 0 12.04 0C5.54 0 .36 5.18.36 11.67c0 2.06.54 4.1 1.56 5.9L0 24l6.64-1.94a11.7 11.7 0 0 0 5.4 1.34h.01c6.49 0 11.67-5.18 11.67-11.67a11.63 11.63 0 0 0-3.2-8.25Z" />
                </svg>
              </a>

              <Facebook size={18} className="cursor-pointer" />
              <Instagram size={18} className="cursor-pointer" />
            </div>
          </div>
        </div>
      </div>

      {/* ================= DESKTOP FOOTER ================= */}
      <div className="hidden md:grid max-w-7xl mx-auto px-6 py-12 grid-cols-3 gap-12">

        {/* Brand */}
        <div>
          <div className="flex items-center gap-4 mb-4">
            <img
              src={logo}
              alt="Look At Me Spa"
              className="h-14 w-auto rounded-2xl bg-gray-800 p-2"
            />
            <h2 className="text-2xl font-bold text-yellow-400">
              Look@Me Spa
            </h2>
          </div>

          <p className="text-sm text-gray-400 max-w-sm">
            Experience luxury, wellness, and beauty through our premium
            spa & salon services, crafted for comfort and care.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-yellow-400 mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/ourservices">Our Services</Link></li>
            <li><Link to="/branches">Branches</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/book-appointment">Book Appointment</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
          </ul>
        </div>

        {/* Contact + SOCIAL ICONS */}
        <div>
          <h3 className="text-lg font-semibold text-yellow-400 mb-4">
            Contact Us
          </h3>

          <ul className="space-y-3 text-sm">
            <li className="flex gap-2">
              <MapPin size={16} /> Bengaluru, India
            </li>
            <li className="flex gap-2">
              <Phone size={16} />
              <a href="tel:+919535261933">+91 9535261933</a>
            </li>
            <li className="flex gap-2">
              <Mail size={16} /> contact@lookatme.com
            </li>
          </ul>

          {/* ✅ SOCIAL ICONS — DESKTOP */}
          <div className="flex gap-4 mt-5">
            <a
              href="https://wa.me/919535261933"
              target="_blank"
              rel="noreferrer"
              className="text-green-500"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path d="M20.52 3.48A11.84 11.84 0 0 0 12.04 0C5.54 0 .36 5.18.36 11.67c0 2.06.54 4.1 1.56 5.9L0 24l6.64-1.94a11.7 11.7 0 0 0 5.4 1.34h.01c6.49 0 11.67-5.18 11.67-11.67a11.63 11.63 0 0 0-3.2-8.25Z" />
              </svg>
            </a>

            <Facebook size={18} className="cursor-pointer hover:text-white" />
            <Instagram size={18} className="cursor-pointer hover:text-white" />
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10 py-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} LookAtMe Salon. All Rights Reserved.
      </div>
    </footer>
  );
}
