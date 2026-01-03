import React from "react";
import { motion } from "framer-motion";

// IMAGE
import tcPalyaImg from "../assets/tc1.jpeg";

export default function Branches() {
  return (
    <section className="relative pt-20 sm:pt-24 pb-14 sm:pb-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-br from-amber-100 via-white to-rose-50 -z-10" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center px-4 sm:px-6 mb-8 sm:mb-10"
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900">
          Our <span className="text-[#c49b2e]">Branch</span>
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-gray-700 mt-2">
          Premium spa experience at TC Palya
        </p>
      </motion.div>

      {/* Branch Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-xl sm:max-w-2xl md:max-w-3xl mx-auto px-4 sm:px-6"
      >
        <div className="bg-white border border-[#c49b2e]/30 rounded-2xl shadow-lg overflow-hidden">
          {/* Image */}
          <div className="relative h-44 sm:h-52 md:h-56">
            <img
              src={tcPalyaImg}
              alt="Look @ Me Spa TC Palya"
              className="w-full h-full object-cover"
            />

            {/* Badge */}
            <span className="absolute top-3 left-3 bg-[#c49b2e] text-white text-[10px] sm:text-xs font-bold px-2.5 py-1 rounded-full shadow">
              Only 1 Branch
            </span>
          </div>

          {/* Content */}
          <div className="p-4 sm:p-5 md:p-6 text-center space-y-3">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">
              Look @ Me Spa – TC Palya
            </h2>

            <p className="text-[#c49b2e] text-xs sm:text-sm font-semibold">
              📍 TC Palya, Bengaluru
            </p>

            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
              Opposite Shell Petrol Pump, 2nd floor above Bata Showroom,
              Thambu Chetty Palya Main Rd, Bengaluru – 560016
            </p>

            {/* Phone & Time */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-700">
              <a
                href="tel:+919535261933"
                className="font-semibold hover:text-[#c49b2e]"
              >
                📞 +91 95352 61933
              </a>
              <span>⏱ 10:00 AM – 10:00 PM</span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-3 pt-3">
              <a
                href="/book-appointment?branch=tc-palya"
                className="px-4 py-2 bg-[#c49b2e] text-white text-xs sm:text-sm rounded-full font-semibold hover:bg-[#b48728] transition"
              >
                Book Now
              </a>

              <a
                href="/gallery?branch=tc-palya"
                className="px-4 py-2 border border-gray-400 text-gray-700 text-xs sm:text-sm rounded-full font-semibold hover:bg-gray-900 hover:text-white transition"
              >
                View Gallery
              </a>
            </div>
          </div>

          {/* Google Map */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            viewport={{ once: true }}
            className="w-full h-44 sm:h-52 md:h-56 border-t"
          >
            <iframe
              title="Look @ Me Spa TC Palya Map"
              src="https://www.google.com/maps?q=look+at+me+spa+tc+palya&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
            />
          </motion.div>
        </div>
      </motion.div>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/919535261933?text=Hi%20I%20want%20to%20book%20an%20appointment"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 sm:bottom-5 sm:right-5 z-50"
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-green-500 shadow-lg flex items-center justify-center"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="WhatsApp"
            className="w-5 h-5 sm:w-6 sm:h-6"
          />
        </motion.div>
      </a>
    </section>
  );
}
