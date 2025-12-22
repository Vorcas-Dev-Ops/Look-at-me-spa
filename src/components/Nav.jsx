import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Nav = () => {
  const menuItems = [
    { name: "HOME", path: "/" },
    
    { name: "SERVICES", path: "/ourservices" },
    { name: "BRANCHES", path: "/branches" },
    { name: "ABOUT", path: "/about" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/25 backdrop-blur-xl border-b border-white/10 shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-10 lg:px-16 py-1.5">

       {/* ================= MOBILE NAV ================= */}
<div className="relative flex items-center justify-center lg:hidden h-16 px-2 ">

  {/* LOGO (LEFT) */}
  <Link to="/" className="absolute left-0 flex items-center">
    <img
      src={logo}
      alt="Look At Me Spa Logo"
      className="h-10 w-auto object-contain select-none"
    />
  </Link>

  {/* MENU (CENTER) */}
  <div className="flex items-center gap-5 text-[12px] font-bold text-gray-900 ">
    {menuItems.map((item, index) => (
      <Link
        key={index}
        to={item.path}
        className="hover:text-[#c49b2e] transition-all"
      >
        {item.name}
      </Link>
    ))}
  </div>

  {/* BOOK NOW (RIGHT) */}
  <Link
    to="/book-appointment"
    onClick={() => window.scrollTo(0, 0)}
    className="absolute right-0 px-4 py-1.5 text-[11px] rounded-md bg-black text-white font-semibold hover:bg-[#c49b2e] transition-all shadow-md"
  >
    Book
  </Link>
</div>


        {/* ================= DESKTOP NAV ================= */}
        <div className="hidden lg:flex items-center justify-between">

          {/* LOGO */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src={logo}
              alt="Look At Me Spa Logo"
              className="h-16 w-auto object-contain drop-shadow-lg select-none"
            />
          </Link>

          {/* CENTER MENU WITH PREMIUM HOVER EFFECT */}
          <div className="flex items-center gap-14 text-xl font-semibold text-gray-900 mx-auto">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className="relative group"
              >
                {/* Text */}
                <span className="transition-colors duration-300 group-hover:text-[#c49b2e]">
                  {item.name}
                </span>

                {/* Underline Hover */}
                <span
                  className="
                    absolute left-0 bottom-[-3px] 
                    w-0 h-2px bg-[#c49b2e]
                    transition-all duration-300
                    group-hover:w-full
                  "
                ></span>
              </Link>
            ))}
          </div>

          {/* BOOK NOW BUTTON */}
          <Link
            to="/book-appointment"
            onClick={() => window.scrollTo(0, 0)}
            className="relative inline-flex h-11 active:scale-95 transition overflow-hidden rounded-xl p-1px shadow-md hover:shadow-xl"
          >
            <span
              className="absolute inset-[-200%] animate-[spin_3s_linear_infinite]
              bg-[conic-gradient(from_90deg_at_50%_50%,#ff2ba5,#ffbf00,#d633ff)] opacity-80"
            ></span>

            <span
              className="inline-flex h-full w-full items-center justify-center rounded-xl
              bg-black/90 px-7 text-sm font-semibold text-white backdrop-blur-3xl"
            >
              Book Now
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
