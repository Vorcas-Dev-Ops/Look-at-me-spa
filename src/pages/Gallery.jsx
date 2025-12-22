import React from "react";
import { useLocation } from "react-router-dom";

// IMPORT IMAGES FOR EACH BRANCH
import k1 from "../assets/images/kasturi/1.jpeg";

import t1 from "../assets/images/tc/tc1.jpeg";

export default function Gallery() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const branch = params.get("branch");

  // IMAGE SETS FOR EACH BRANCH
  const galleries = {
    "kasturi-nagar": [k1],
    "tc-palya": [t1],
  };

  const images = galleries[branch] || [];

  const pageTitle =
    branch === "kasturi-nagar"
      ? "Kasturi Nagar Gallery"
      : branch === "tc-palya"
      ? "TC Palya Gallery"
      : "Gallery";

  return (
    <div className="pt-24 pb-20 px-6 min-h-screen bg-gray-50">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-12">
        {pageTitle}
      </h1>

      {images.length === 0 ? (
        <p className="text-center text-gray-600 text-xl">No images found.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {images.map((img, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all"
            >
              <img
                src={img}
                alt="Spa"
                className="w-full h-56 object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
