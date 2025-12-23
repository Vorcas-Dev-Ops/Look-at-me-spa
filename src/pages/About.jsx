import React from "react";

export default function About() {
  return (
    <div className="pt-24 pb-20 bg-linear-to-b from-[#f6f1ea] to-white min-h-screen font-[Poppins]">

      {/* ================= HEADER ================= */}
      <div className="max-w-5xl mx-auto text-center px-4 sm:px-6">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-gray-900 mb-3 sm:mb-4 leading-[1.2] flex flex-col">
          <span>About</span>
          <span className="text-[#c49b2e]">Look @ Me Spa</span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-gray-700 font-light leading-relaxed">
          A sanctuary of luxury, relaxation, and holistic wellness.
        </p>
      </div>

      {/* ================= ABOUT CONTENT ================= */}
      <div className="max-w-5xl mx-auto mt-8 sm:mt-12 px-4 sm:px-6 space-y-5 sm:space-y-7 text-gray-800 leading-relaxed text-[16px] sm:text-lg">

        <p>
          <span className="font-semibold text-[#c49b2e]">Look At Me Spa</span> 
          &nbsp;is one of India’s rapidly growing luxury wellness destinations. Our mission is to build
          a trusted brand that delivers an authentic blend of global spa experiences, curated with
          elegance, professionalism, and unmatched care.
        </p>

        <p>
          Every treatment here is thoughtfully designed to restore balance to your mind, body, and soul.
          Our highly trained therapists bring expertise, warmth, and healing energy to elevate your
          overall well-being.
        </p>

        <p>
          Step into our world of luxury-infused interiors, soothing aromas, and comforting wellness
          rituals — crafted to relax your senses and offer you a complete indulgent spa experience.
        </p>
      </div>

      {/* ================= IMAGE SECTION ================= */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mt-12 sm:mt-14">
        <div className="w-full h-56 sm:h-72 md:h-96 rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl relative group">
          <img
            src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&w=1350&q=80"
            alt="Spa Interior"
            className="w-full h-full object-cover transform group-hover:scale-105 transition-all duration-700"
          />

          {/* Soft Overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
        </div>
      </div>

    
     {/* ================= HIGHLIGHT BOXES ================= */}
<div className="max-w-6xl mx-auto px-4 sm:px-6 mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">

  {[
    {
      title: "Luxury Experience",
      desc: "Premium ambience, soothing aromas, and world-class spa rituals.",
    },
    {
      title: "Skilled Therapists",
      desc: "Expert healers dedicated to restoring balance and rejuvenation.",
    },
    {
      title: "Holistic Wellness",
      desc: "Mind, body, and soul treatments for complete relaxation.",
    },
  ].map((item, index) => (
    <div
      key={index}
      className="
        bg-white 
        rounded-2xl 
        p-6 sm:p-8 
        shadow-lg 
        border border-[#e4e1dc]
        transition-all duration-300

        /* MOBILE FIXES */
        flex flex-col items-start
        gap-2
        text-left
        sm:hover:shadow-2xl 
        sm:hover:-translate-y-2 
      "
    >
      <h3 className="text-xl sm:text-2xl font-bold text-[#c49b2e] tracking-tight">
        {item.title}
      </h3>

      <p className="text-gray-700 text-[15px] sm:text-base leading-relaxed">
        {item.desc}
      </p>
    </div>
  ))}
</div>

<div>
{/* Floating WhatsApp Button */}
<a
  href="https://wa.me/919535261933?text=Hi%20I%20want%20to%20book%20an%20appointment"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-5 right-5 z-50"
>
  <div className="w-14 h-14 rounded-full bg-green-500 shadow-xl flex items-center justify-center hover:scale-110 transition-transform duration-300">
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
      alt="WhatsApp"
      className="w-8 h-8"
    />
  </div>
</a>


</div>
    </div>
  );
}
