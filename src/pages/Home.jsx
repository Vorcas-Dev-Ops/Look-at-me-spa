"use client";
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

// IMAGES
import heroImage from "../assets/heroimage.png";
import aboutImg from "../assets/heroimage.png";
import bannerImg from "../assets/banner.jpg"; // change filename


import thai from "../assets/spa/aas.jpg";
import aroma from "../assets/spa/aa.jpg";
import wellness from "../assets/spa/face.jpg";
import bodyscrub from "../assets/spa/bodyscrub.jpg";

// POSTERS (CHANGE TO YOUR IMAGES)
import poster1 from "../assets/poster1.jpg";
import poster2 from "../assets/poster2.jpg";

export default function Home() {
  const sectionRef = useRef(null);
  const revealRef = useRef(null);

  const [fullscreenPoster, setFullscreenPoster] = useState(null);

  // Reveal Logic
  const handleMove = (x, y, radius) => {
    if (revealRef.current) {
      revealRef.current.style.clipPath = `circle(${radius}px at ${x}px ${y}px)`;
    }
  };

  const handleMouseMove = (e) => {
    const section = sectionRef.current;
    if (!section) return;
    const rect = section.getBoundingClientRect();
    handleMove(e.clientX - rect.left, e.clientY - rect.top, 120);
  };

  const handleMouseLeave = () => {
    revealRef.current.style.clipPath = "circle(0px at 50% 50%)";
  };

  const handleTouchMove = (e) => {
    const section = sectionRef.current;
    if (!section) return;
    const touch = e.touches[0];
    const rect = section.getBoundingClientRect();
    handleMove(touch.clientX - rect.left, touch.clientY - rect.top, 100);
  };

  const handleTouchEnd = () => {
    revealRef.current.style.clipPath = "circle(0px at 50% 50%)";
  };

  return (
    <div className="m-0 p-0 pt-16 md:pt-18 font-[Poppins] overflow-x-hidden">

      {/* HERO SECTION */}
      <section
        ref={sectionRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className="relative w-full h-[260px] sm:h-[340px] md:h-screen overflow-hidden"
      >
        <img
          src={heroImage}
          alt="Spa Hero"
          className="w-full h-full object-cover blur-sm"
        />

        <div
          ref={revealRef}
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center transition-[clip-path] duration-150 pointer-events-none"
          style={{ backgroundImage: `url(${heroImage})`, clipPath: "circle(0px at 50% 50%)" }}
        ></div>

        <div className="absolute inset-0 flex flex-col justify-center items-center md:items-start px-6 md:pl-24 text-white z-10 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-7xl font-extrabold drop-shadow-lg">
            Luxury Care
          </h1>
          <h2 className="text-lg sm:text-xl md:text-5xl font-light tracking-wide drop-shadow-xl">
            for Mind, Body & Spirit.
          </h2>
          <div className="mt-4 h-2px w-24 sm:w-32 bg-white/70"></div>
        </div>

        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/40 to-transparent"></div>
      </section>

      {/* POSTER SECTION */}
     <section className="py-10 px-6 max-w-3xl mx-auto bg-linear-to-br from-rose-50 via-amber-50 to-white rounded-2xl">
  <h2 className="text-center text-3xl md:text-4xl font-bold mb-5 text-[#c49b2e] ">
    Special Offers
  </h2>

  {/* Posters Grid */}
  <div className="grid grid-cols-2 gap-4 justify-items-center">
    {[poster1, poster2].map((img, i) => (
      <div
        key={i}
        onClick={() => setFullscreenPoster(img)}
        className="cursor-pointer rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition w-full max-w-[250px]"
      >
        <img
          src={img}
          className="w-full h-65 md:h-85 object-cover hover:scale-105 transition duration-500"
        />
      </div>
    ))}
  </div>

  {/* Fullscreen Modal */}
  {fullscreenPoster && (
    <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">
      <img
        src={fullscreenPoster}
        className="max-h-[90vh] w-auto px-4 object-contain animate-[fade_0.3s_ease]"
      />

      <button
        onClick={() => setFullscreenPoster(null)}
        className="absolute top-5 right-5 text-white text-3xl font-bold"
      >
        ✕
      </button>

      <style>{`
        @keyframes fade {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  )}
</section>


    {/* QUICK SERVICES */}
<section className="py-16 bg-linear-to-b from-white to-pink-50/40">

  {/* Container */}
  <div className="max-w-7xl mx-auto px-6 text-center">

    {/* Heading */}
    <h2 className="text-4xl md:text-5xl font-extrabold text-[#c49b2e] mb-4">
      Quick Services
    </h2>

    <p className="text-gray-600 max-w-2xl mx-auto mb-12">
      A glance at our most loved spa treatments.
    </p>

    {/* Services Grid */}
    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 font-serif">
      {[
        { title: "Thai Body Massage", image: thai },
        { title: "Aroma Massage", image: aroma },
        { title: "Glow Facial Therapy", image: wellness },
        { title: "Body Scrub", image: bodyscrub },
      ].map((item, i) => (
        <div
          key={i}
          className="bg-white border shadow-lg rounded-2xl p-1 hover:shadow-xl transition"
        >
          <div className="w-full h-40 sm:h-44 rounded-xl overflow-hidden mb-4">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover"
            />
          </div>

          <h3 className="text-lg sm:text-xl font-semibold">{item.title}</h3>
        </div>
      ))}
    </div>

  </div>
  {/* END container */}

  {/* 🔥 FULL-WIDTH BANNER WITH TEXT + BUTTON */}
  {/* FULL-WIDTH GRADIENT BANNER */}
{/* DARK, SMALLER BANNER */}
<div className="relative w-full mt-1 py-10 md:py-14 bg-linear-to-r from-[#b08968] via-[#a17755] to-[#8d6847] shadow-xl">

  {/* Soft overlay */}
  <div className="absolute inset-0 bg-black/20"></div>

  {/* Text + Button */}
  <div className="relative flex flex-col items-center justify-center text-center px-6">

    <h3 className="text-2xl md:text-4xl font-normal md:font-light text-white drop-shadow-xl font-[cursive] tracking-wide">
      Relax • Rejuvenate • Refresh
    </h3>

    <p className="mt-2 text-white/90 text-sm md:text-base max-w-lg leading-relaxed">
      Experience premium luxury wellness — crafted for your mind, body & soul.
    </p>

    <Link to="/ourservices">
      <button className="mt-4 px-8 py-2.5 bg-[#c49b2e] text-white rounded-full text-base font-semibold shadow-lg hover:bg-[#b38728] hover:shadow-xl transition-all duration-300">
        Explore All Services
      </button>
    </Link>

  </div>
</div>



</section>


      {/* ABOUT US */}
      <section className="py-20 bg-gradient-to-br from-rose-50 via-white to-amber-50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src={aboutImg}
              className="rounded-3xl shadow-xl w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/10 rounded-3xl"></div>
          </div>

          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              About LookAtMe Salon
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              At LookAtMe Salon, we blend luxury spa rituals with modern wellness.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Our therapists bring global techniques to rejuvenate your body & mind.
            </p>

            <Link to="/about">
              <button className="px-8 py-3 bg-gradient-to-r from-amber-400 to-yellow-600 text-white rounded-xl shadow-lg hover:scale-105 transition">
                Read More →
              </button>
            </Link>
          </div>
        </div>
      </section>

     {/* CLIENT REVIEWS – COLORED CARD MARQUEE */}
<section className="py-16 bg-gradient-to-br from-rose-50 via-amber-50 to-white overflow-hidden">

  <div className="max-w-7xl mx-auto px-6 text-center">
    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
      Loved By Our Clients
    </h2>

    <p className="text-gray-600 max-w-2xl mx-auto mb-10 text-lg">
      Genuine stories from guests who experienced true luxury.
    </p>

    {/* Marquee */}
    <div className="relative overflow-hidden">
      <div className="flex gap-4 animate-marquee hover:[animation-play-state:paused]">

        {[...Array(2)].map((_, loopIndex) => (
          <React.Fragment key={loopIndex}>

            {[
              { name: "Aarushi", text: "A truly luxurious spa!" },
              { name: "Rahul", text: "Amazing therapists & relaxing ambience." },
              { name: "Sana", text: "Aromatherapy session was heavenly." },
              { name: "Meera", text: "Best spa experience in years!" },
              { name: "Karan", text: "Professional & peaceful environment." },
            ].map((review, idx) => {
              const bgColors = [
                "bg-rose-100/70",
                "bg-amber-100/70",
                "bg-teal-100/70",
                "bg-purple-100/70",
              ];
              const cardColor = bgColors[idx % bgColors.length];

              return (
                <div
                  key={idx + loopIndex * 10}
                  className={`
                    min-w-[70%] sm:min-w-[35%] md:min-w-[28%]
                    ${cardColor}
                    backdrop-blur-xl 
                    rounded-xl shadow-md border border-white/30
                    p-4 
                    transition-all duration-300 
                    hover:-translate-y-1 hover:shadow-xl
                  `}
                >
                  <div className="text-amber-500 text-lg mb-2">★★★★★</div>

                  <p className="text-gray-800 text-sm md:text-base italic leading-relaxed mb-3">
                    “{review.text}”
                  </p>

                  <h4 className="text-sm md:text-base font-semibold text-gray-900">
                    — {review.name}
                  </h4>
                </div>
              );
            })}

          </React.Fragment>
        ))}

      </div>
    </div>
  </div>

  {/* Animation */}
  <style>{`
    @keyframes marquee {
      0%   { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    .animate-marquee {
      display: flex;
      animation: marquee 5s linear infinite;
    }
  `}</style>

</section>

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
