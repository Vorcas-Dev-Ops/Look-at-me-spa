import React from "react";

// IMPORT BRANCH MAIN IMAGES
import ks from "../assets/1.jpeg";
import logo from "../assets/tc1.jpeg";

export default function Branches() {
  const branches = [
    {
      id: "kasturi-nagar",
      name: "Look @ Me Spa – Main Branch",
      location: "Kasturi Nagar, Bengaluru",
      address:
        "303 1st floor, 2nd main, Kasturi Nagar Main Rd, opposite Karnataka Bank, East of NGEF Layout, Kasturi Nagar, Bengaluru, Karnataka 560043",
      phone: "+917349058245",
      displayPhone: "+91 73490 58245",
      timings: "10:00 AM – 10:00 PM",
      image: ks,
      map: "https://www.google.com/maps?q=look+at+me+spa+kasturi+nagar",
    },
    {
      id: "tc-palya",
      name: "Look @ Me Spa – Second Branch",
      location: "TC Palya, Bengaluru",
      address:
        "Opposite Shell Petrol Pump, 2nd floor above Bata Showroom, Thambu Chetty Palya Main Rd, Akshaya Nagar, Ramamurthy Nagar, Bengaluru, Karnataka 560016",
      phone: "+919535261933",
      displayPhone: "+91 95352 61933",
      timings: "10:00 AM – 10:00 PM",
      image: logo,
      map: "https://www.google.com/maps?q=look+at+me+spa+tc+palya",
    },
  ];

  return (
    <section className="relative pt-24 pb-20 min-h-screen">
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-br from-amber-100 via-white to-rose-50 -z-10" />
      <div className="absolute inset-0 opacity-[0.12] bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')] -z-10" />

      {/* Header */}
      <div className="text-center px-6 mb-14">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
          Our <span className="text-[#c49b2e]">Branches</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mt-2">
          Choose your nearest luxury spa location
        </p>
      </div>

      {/* Branch Cards */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-10 px-6">
        {branches.map((branch) => (
          <div
            key={branch.id}
            className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all"
          >
            {/* Image */}
            <div className="w-full h-48 overflow-hidden">
              <img
                src={branch.image}
                alt={branch.name}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Content */}
            <div className="p-5 space-y-3 text-center">
              <h2 className="text-xl font-bold text-gray-900">
                {branch.name}
              </h2>

              <p className="text-[#c49b2e] font-semibold text-sm">
                📍 {branch.location}
              </p>

              <p className="text-gray-700 text-sm leading-relaxed">
                <span className="font-semibold">Address:</span>{" "}
                {branch.address}
              </p>

              {/* Phone & Timing */}
              <div className="flex justify-center gap-4 text-sm text-gray-700 flex-wrap">
                <a
                  href={`tel:${branch.phone}`}
                  className="hover:text-[#c49b2e] font-semibold"
                >
                  📞 {branch.displayPhone}
                </a>

                <span className="text-gray-400 hidden sm:inline">|</span>

                <p>
                  ⏱ <span className="font-semibold">{branch.timings}</span>
                </p>
              </div>

              {/* Actions */}
              <div className="flex justify-center gap-3 pt-4 flex-wrap">
                <a
                  href={branch.map}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-[#c49b2e] text-white text-sm rounded-full hover:bg-[#b48728] transition"
                >
                  View Map
                </a>

                <a
                  href={`/book-appointment?branch=${branch.id}`}
                  className="px-4 py-2 border border-[#c49b2e] text-[#c49b2e] text-sm rounded-full hover:bg-[#c49b2e] hover:text-white transition"
                >
                  Book Now
                </a>

                <a
                  href={`/gallery?branch=${branch.id}`}
                  className="px-4 py-2 border border-gray-400 text-gray-700 text-sm rounded-full hover:bg-gray-800 hover:text-white transition"
                >
                  View Gallery
                </a>
              </div>
            </div>
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
    </section>
  );
}
