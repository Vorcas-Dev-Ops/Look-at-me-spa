import React from "react";
import { MapPin, Phone, Mail, Facebook, Instagram } from "lucide-react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";


export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-10 pb-4">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-3 gap-8">

        {/* Brand */}
        <div className="col-span-2 md:col-span-1">
  <div className="flex items-center gap-4 mb-3 group">

    {/* Logo */}
    <img
      src={logo}
      alt="Look At Me Spa Logo"
      className="
        h-16 w-auto object-contain 
        rounded-3xl p-2 shadow-lg 
        ring-1 ring-white/40
        transition-all duration-500 
        group-hover:scale-110 group-hover:shadow-2xl
      "
    />

    {/* Brand Name */}
    <h2 className="
      text-2xl font-extrabold 
      font-serif
      bg-clip-text text-transparent 
      bg-linear-to-r from-amber-300 to-yellow-500
      tracking-wide drop-shadow-sm
      transition-all duration-300
      group-hover:brightness-125
    ">
      LookAtMe Salon
    </h2>
  </div>

  <p className="text-white-100 text-sm leading-relaxed">
    Experience luxury, wellness, and beauty with our premium spa & salon
    services crafted for your comfort.
  </p>
</div>


       {/* Quick Links */}
<div>
  <h3 className="text-lg font-bold font-serif text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-600 mb-3">
    Quick Links
  </h3>

  <ul className="space-y-1 text-sm">

    <li>
      <Link to="/" className="hover:text-white transition">
        Home
      </Link>
    </li>

    <li>
      <Link to="/ourservices" className="hover:text-white transition">
        Our Services
      </Link>
    </li>

    <li>
      <Link to="/branches" className="hover:text-white transition">
        Branches
      </Link>
    </li>

    <li>
      <Link to="/about" className="hover:text-white transition">
        About Us
      </Link>
    </li>

    <li>
      <Link to="/book-appointment" className="hover:text-white transition">
        Book Appointment
      </Link>
    </li>

    <li>
      <Link to="/gallery" className="hover:text-white transition">
        Gallery
      </Link>
    </li>

  </ul>
</div>


        {/* Contact */}
        <div>
          <h3 className="text-lg font-bold font-serif text-transparent bg-clip-text bg-linear-to-r from-amber-400 to-yellow-600 mb-3">
            Contact Us
          </h3>

          <ul className="space-y-1 text-sm">
            <li className="flex gap-2 items-start">
              <MapPin size={16} /> Bengaluru, India
            </li>
            <li className="flex gap-2 items-start">
              <Phone size={16} /> +91 7349058245


            </li>
            <li className="flex gap-2 items-start">
              <Mail size={16} /> contact@lookatme.com
            </li>
          </ul>

          {/* Social Icons */}
          <div className="flex gap-4 mt-3">

            {/* WhatsApp */}
            <a
              href="https://wa.me/917349058245"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-500 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.52 3.48A11.84 11.84 0 0 0 12.04 0C5.54 0 .36 5.18.36 11.67c0 2.06.54 4.1 1.56 5.9L0 24l6.64-1.94a11.7 11.7 0 0 0 5.4 1.34h.01c6.49 0 11.67-5.18 11.67-11.67a11.63 11.63 0 0 0-3.2-8.25ZM12.03 21.3h-.01a9.6 9.6 0 0 1-4.89-1.33l-.35-.2-3.94 1.15 1.14-3.84-.22-.38a9.56 9.56 0 0 1-1.44-5.1c0-5.32 4.33-9.65 9.66-9.65a9.6 9.6 0 0 1 6.82 2.83 9.6 9.6 0 0 1 2.83 6.82c0 5.32-4.33 9.65-9.66 9.65Zm5.27-7.18c-.29-.15-1.71-.84-1.97-.94-.26-.1-.45-.15-.64.15-.19.29-.74.94-.9 1.13-.17.19-.33.22-.62.07-.29-.15-1.22-.45-2.33-1.43-.86-.76-1.44-1.7-1.6-1.99-.17-.29-.02-.45.13-.6.13-.13.29-.33.43-.5.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.64-1.54-.88-2.11-.23-.55-.47-.47-.64-.48h-.54c-.19 0-.5.07-.76.36-.26.29-1 1-1 2.43 0 1.43 1.03 2.81 1.17 3 .14.19 2.03 3.1 4.93 4.35.69.3 1.23.48 1.65.61.69.22 1.32.19 1.82.12.56-.08 1.71-.7 1.95-1.38.24-.67.24-1.24.17-1.38-.07-.12-.26-.19-.55-.33Z" />
              </svg>
            </a>

            <Facebook size={20} className="cursor-pointer hover:text-white transition" />
            <Instagram size={20} className="cursor-pointer hover:text-white transition" />
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-6 border-t border-gray-700 pt-3 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} LookAtMe Salon. All Rights Reserved.
      </div>
    </footer>
  );
}
