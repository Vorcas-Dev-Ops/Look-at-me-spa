"use client";
import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";

// IMAGES
import heroImage from "../assets/heroimage.png";
import aboutImg from "../assets/heroimage.png";

// SERVICES
import thai from "../assets/spa/aas.jpg";
import aroma from "../assets/spa/aa.jpg";
import wellness from "../assets/spa/face.jpg";
import bodyscrub from "../assets/spa/bodyscrub.jpg";

// POSTER
import poster1 from "../assets/posterr.png";

export default function Home() {
  const sectionRef = useRef(null);
  const revealRef = useRef(null);

  const [heroVisible, setHeroVisible] = useState(true);
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ================= SEO (React 19 safe) ================= */
  useEffect(() => {
    document.title = "Look @ Me Spa | Luxury Spa & Wellness";

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Experience luxury spa treatments, body massage, aromatherapy, facials and wellness services at Look @ Me Spa."
      );
    }
  }, []);

  /* ================= Observe Hero Visibility ================= */
  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => setHeroVisible(entry.isIntersecting),
      { threshold: 0.25 }
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  /* ================= Reveal Effect ================= */
  const revealAt = (x, y, r) => {
    if (!heroVisible || prefersReducedMotion) return;
    if (revealRef.current) {
      revealRef.current.style.clipPath = `circle(${r}px at ${x}px ${y}px)`;
    }
  };

  const resetReveal = () => {
    if (revealRef.current) {
      revealRef.current.style.clipPath = "circle(0px at 50% 50%)";
    }
  };

  return (
    <main className="pt-16 font-[Poppins] overflow-x-hidden">

      {/* ================= HERO ================= */}
      <section
        ref={sectionRef}
        onMouseMove={(e) => {
          const r = sectionRef.current.getBoundingClientRect();
          revealAt(e.clientX - r.left, e.clientY - r.top, 120);
        }}
        onMouseLeave={resetReveal}
        onTouchMove={(e) => {
          const r = sectionRef.current.getBoundingClientRect();
          const t = e.touches[0];
          revealAt(t.clientX - r.left, t.clientY - r.top, 100);
        }}
        onTouchEnd={resetReveal}
        aria-label="Luxury spa hero section"
        className="relative h-[260px] sm:h-[340px] md:h-screen overflow-hidden"
      >
        {/* Preload hint for LCP */}
        <link rel="preload" as="image" href={heroImage} />

        <img
          src={heroImage}
          alt="Luxury spa wellness experience"
          className="w-full h-full object-cover blur-sm"
          loading="eager"
        />

        <div
          ref={revealRef}
          className="absolute inset-0 bg-cover bg-center transition-[clip-path] duration-200 pointer-events-none"
          style={{
            backgroundImage: `url(${heroImage})`,
            clipPath: "circle(0px at 50% 50%)",
          }}
        />

        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/40 to-transparent" />

        <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-24 text-white text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-7xl font-extrabold">
            Luxury Care
          </h1>
          <p className="text-lg sm:text-xl md:text-5xl font-light mt-1">
            for Mind, Body & Spirit
          </p>
          <div className="mt-4 w-24 h-[2px] bg-white/70 mx-auto md:mx-0" />
        </div>
      </section>

      {/* ================= SPECIAL OFFER ================= */}
   <section
  aria-labelledby="offers-heading"
  className="mt-10 py-14 bg-gradient-to-br from-rose-50 via-amber-50 to-white"
>
  <div className="px-4 sm:px-6 max-w-4xl mx-auto">
    <h2
      id="offers-heading"
      className="text-center text-3xl md:text-4xl font-bold mb-6 text-[#c49b2e]"
    >
      Special Offers
    </h2>

    <div className="flex justify-center">
      <div className="w-full max-w-[820px] rounded-2xl overflow-hidden shadow-xl">
        <img
          src={poster1}
          alt="Current spa special offer poster"
          loading="lazy"
          className="w-full h-[280px] sm:h-[360px] md:h-[520px] object-cover"
        />
      </div>
    </div>
  </div>
</section>


      {/* ================= QUICK SERVICES ================= */}
      <section className="py-14 bg-linear-to-b from-white to-pink-50/40">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#c49b2e] mb-3">
            Quick Services
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto mb-10">
            A glimpse of our most loved treatments
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: "Thai Body Massage", image: thai },
              { title: "Aroma Massage", image: aroma },
              { title: "Glow Facial Therapy", image: wellness },
              { title: "Body Scrub", image: bodyscrub },
            ].map((item, i) => (
              <Link
                key={i}
                to="/ourservices"
                aria-label={`View ${item.title} service`}
                className="group bg-white rounded-2xl p-1 shadow-lg hover:shadow-xl transition focus:outline-none focus:ring-2 focus:ring-[#c49b2e]"
              >
                <div className="h-40 sm:h-44 rounded-xl overflow-hidden mb-3">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition"
                  />
                </div>
                <h3 className="text-base sm:text-lg font-semibold">
                  {item.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 py-10 bg-linear-to-r from-[#b08968] via-[#a17755] to-[#8d6847]">
          <div className="text-center px-6 text-white">
            <h3 className="text-2xl md:text-4xl font-light font-[cursive]">
              Relax • Rejuvenate • Refresh
            </h3>
            <p className="mt-2 text-sm md:text-base max-w-lg mx-auto">
              Premium luxury wellness crafted for your mind & body
            </p>
            <Link to="/ourservices">
              <button
                aria-label="Explore all spa services"
                className="mt-4 px-8 py-2.5 bg-[#c49b2e] rounded-full font-semibold hover:bg-[#b38728] transition focus:outline-none focus:ring-2 focus:ring-white"
              >
                Explore All Services
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="py-14 bg-gradient-to-br from-rose-50 via-white to-amber-50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <img
            src={aboutImg}
            alt="About Look @ Me Spa interior and ambience"
            loading="lazy"
            className="rounded-3xl shadow-xl w-full"
          />

          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
              About Look @ Me Spa
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              We blend luxury spa rituals with modern wellness experiences.
            </p>

            <Link to="/about">
              <button
                aria-label="Read more about Look @ Me Spa"
                className="px-8 py-3 bg-gradient-to-r from-amber-400 to-yellow-600 text-white rounded-xl shadow-lg hover:scale-105 transition focus:outline-none focus:ring-2 focus:ring-yellow-500"
              >
                Read More →
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* ================= FLOATING WHATSAPP ================= */}
      <a
        href="https://wa.me/919535261933"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Look @ Me Spa on WhatsApp"
        className="fixed bottom-5 right-5 z-50"
      >
        <div className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="WhatsApp chat icon"
            className="w-8 h-8"
          />
        </div>
      </a>
    </main>
  );
}
