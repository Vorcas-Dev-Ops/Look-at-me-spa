"use client";
import React, { useState } from "react";
import { Link } from "react-router-dom";

// IMPORT IMAGES
import thai from "../assets/spa/thai.jpg";
import swedish from "../assets/spa/aas.jpg";
import aroma from "../assets/spa/aa.jpg";
import deep from "../assets/spa/deep.avif";
import wellness from "../assets/spa/Wellness.avif";
import fourhand from "../assets/spa/four.avif";
import baliness from "../assets/spa/Baliness.avif";
import sports from "../assets/spa/sports.jpg";
import bodyscrub from "../assets/spa/bodyscrub.jpg";
import headImg from "../assets/spa/head.avif";
import footImg from "../assets/spa/foot.png";
import wax from "../assets/spa/wax.jpg";

const servicesData = [
  { id: 1, category: "Body Massage", title: "Thai Body Massage", duration: "60 Min", price: 1799, price90: 2200, image: thai, description: "A traditional Thai therapy combining stretching, firm pressure, and rhythmic movements to improve flexibility and energy flow." },
  { id: 2, category: "Body Massage", title: "Swedish Massage", duration: "60 Min", price: 1999, price90: 2800, image: swedish, description: "A gentle full-body massage that enhances circulation, reduces stress, and eases muscle tension." },
  { id: 3, category: "Body Massage", title: "Aroma Massage", duration: "60 Min", price: 2000, price90: 3000, image: aroma, description: "A calming massage using essential oils to reduce anxiety and detox the body." },
  { id: 4, category: "Body Massage", title: "Deep Tissue Massage", duration: "60 Min", price: 2500, price90: 3500, image: deep, description: "Targets deeper muscle layers to release chronic tension and stiffness." },
  { id: 5, category: "Body Massage", title: "Wellness Relaxing", duration: "60 Min", price: 2200, price90: 3000, image: wellness, description: "A stress-relieving gentle massage that provides deep relaxation." },
  { id: 6, category: "Signature Treatment", title: "Four Hand Massage", duration: "60 Min", price: 3000, price90: 4000, image: fourhand, description: "A luxury therapy performed by two synchronized therapists." },
  { id: 7, category: "Body Massage", title: "Baliness Massage", duration: "45 Min", price: 3000, image: baliness, description: "A Balinese technique using acupressure, kneading, and aromatherapy." },
  { id: 8, category: "Signature Treatment", title: "Sports Massage", duration: "60 Min", price: 2500, price90: 3500, image: sports, description: "Perfect for athletes. Improves flexibility and boosts muscle recovery." },
  { id: 9, category: "Signature Treatment", title: "Body Scrub", duration: "60 Min", price: 2000, price90: 3000, image: bodyscrub, description: "Exfoliates skin, removes dead cells, and boosts natural glow." },
  { id: 10, category: "Add On", title: "Head Massage", duration: "30 Min", price: 800, image: headImg, description: "A relaxing scalp therapy that reduces headaches and improves sleep." },
  { id: 11, category: "Add On", title: "Foot Massage", duration: "30 Min", price: 800, image: footImg, description: "Focuses on reflex points for full body rejuvenation." },
  { id: 12, category: "Add On", title: "Full Body Wax", duration: "45 Min", price: 3000, image: wax, description: "Smooth full-body waxing for glowing, soft skin." },
];

const categories = ["All Services", "Body Massage", "Signature Treatment", "Add On"];

export default function OurServices() {
  const [activeCategory, setActiveCategory] = useState("All Services");
  const [openCard, setOpenCard] = useState(null);

  const filtered =
    activeCategory === "All Services"
      ? servicesData
      : servicesData.filter((s) => s.category === activeCategory);

  const toggleCard = (id) => {
    setOpenCard(openCard === id ? null : id);
  };

  return (
    <section className="py-16 px-5 md:px-20 bg-white text-black pt-28">

      {/* PAGE TITLE */}
      <h2 className="text-center text-3xl md:text-4xl font-bold mb-8 tracking-wide">
        OUR SERVICES
      </h2>

      {/* CATEGORY FILTERS */}
      <div className="flex gap-3 overflow-x-auto no-scrollbar pb-4 mb-10 px-1 justify-start md:justify-center">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`
              px-4 py-2 rounded-full text-sm sm:text-lg whitespace-nowrap font-semibold
              transition-all duration-300
              ${
                activeCategory === cat
                  ? "bg-black text-white shadow-md scale-105"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }
            `}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* SERVICE GRID (2 columns on mobile) */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 justify-items-center">

        {filtered.map((service) => (
          <div
            key={service.id}
            className="
              w-full max-w-[190px] sm:max-w-[250px] bg-white 
              border border-gray-200 rounded-xl shadow-md
              overflow-hidden transition-all duration-300 
              hover:-translate-y-2 hover:shadow-xl
            "
          >
            {/* IMAGE */}
            {/* IMAGE */}
<div className="h-[130px] sm:h-40 w-full overflow-hidden">
  <img
    src={service.image}
    alt={service.title}
    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
  />
</div>
            {/* CONTENT */}
            <div className="p-3 text-center">
              <h3 className="text-sm sm:text-base font-bold uppercase text-gray-800 mb-1">
                {service.title}
              </h3>

              {/* READ MORE */}
              <p
                className="text-[12px] sm:text-sm text-gray-600 mb-2 underline hover:text-black cursor-pointer"
                onClick={() => toggleCard(service.id)}
              >
                {openCard === service.id ? "Hide Details" : "Read More"}
              </p>

              {/* DESCRIPTION */}
              <div
                className={`transition-all duration-300 overflow-hidden text-left text-gray-700 ${
                  openCard === service.id ? "max-h-36 mb-3" : "max-h-0"
                }`}
              >
                <p className="text-[12px] sm:text-sm p-1">{service.description}</p>
              </div>

              {/* PRICES */}
              <div className="text-xs sm:text-sm font-medium text-gray-700 mb-1">
                {service.duration} — ₹{service.price}
              </div>

              {service.price90 && (
                <div className="text-xs sm:text-sm font-medium text-gray-700 mb-1">
                  90 Min — ₹{service.price90}
                </div>
              )}

              {/* BUTTON */}
              <Link to={`/book-appointment?service=${encodeURIComponent(service.title)}`}>
                <button
                  className="
                    mt-2 bg-black text-white px-3 py-1.5 
                    text-xs sm:text-sm rounded-lg 
                    hover:bg-gray-800 transition shadow-md
                  "
                >
                  Request to Book
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
