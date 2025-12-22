import React, { useState } from "react";
import { useLocation } from "react-router-dom";

// Main Categories
const serviceCategories = {
  "Body Massage": [
    "Thai Body Massage",
    "Swedish Massage",
    "Aroma Massage",
    "Deep Tissue Massage",
    "Wellness Relaxing",
  ],
  "Signature Treatment": ["Four Hand Massage", "Sports Massage", "Body Scrub"],
};

// Optional Add Ons
const addOnList = ["Head Massage", "Foot Massage", "Full Body Wax"];

// Branch Locations
const locations = ["KASTHURINAGAR", "TC Palya"];

export default function BookAppointment() {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const prefill = params.get("service") || "";

  // User States
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");
  const [service, setService] = useState(prefill);
  const [addons, setAddons] = useState([]);
  const [date, setDate] = useState("");

  const adminNumber = "919535261933";

  const today = new Date().toISOString().split("T")[0];

  const validatePhone = (v) => /^[6-9]\d{9}$/.test(v);

  const handlePhoneChange = (raw) => {
    const digits = raw.replace(/\D/g, "").slice(0, 10);
    setPhone(digits);
  };

  const toggleAddOn = (addon) => {
    setAddons((prev) =>
      prev.includes(addon)
        ? prev.filter((a) => a !== addon)
        : [...prev, addon]
    );
  };

  const formatDate = () => {
    if (!date) return "";
    const dt = new Date(`${date}T00:00`);
    return dt.toLocaleDateString("en-IN", {
      weekday: "short",
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validatePhone(phone)) {
      alert("Enter a valid 10-digit mobile number starting with 6/7/8/9.");
      return;
    }

    const msg = `
🧖‍♀️ New Booking Request:

👤 Name: ${name}
📞 Mobile: ${phone}

📍 Location: ${location}
🧩 Category: ${category}
✨ Service: ${service}

➕ Add On: ${addons.length ? addons.join(", ") : "None"}

📅 Date: ${formatDate()}

Please confirm booking.
`;

    window.open(
      `https://wa.me/${adminNumber}?text=${encodeURIComponent(msg)}`,
      "_blank"
    );

    alert("Your booking request has been sent to admin!");
  };

  const isPhoneValid = phone.length === 10 && validatePhone(phone);

  const isFormReady =
    name.trim() && isPhoneValid && location && category && service && date;

  return (
    <div className="relative">
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-br from-rose-100 via-amber-50 to-white -z-10"></div>
      <div className="absolute inset-0 opacity-[0.08] bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')] mix-blend-overlay -z-10"></div>

    <section className="pt-28 pb-10 px-4 sm:px-6 max-w-3xl mx-auto">

        <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center tracking-wide">
          Book Appointment
        </h1>

        <form className="space-y-6" onSubmit={handleSubmit} noValidate>
          
          {/* FORM GRID — Fully optimized for mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <input
              required
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border rounded text-sm focus:ring-2 focus:ring-black/40"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <div>
              <input
                required
                inputMode="numeric"
                placeholder="Mobile Number"
                className={`w-full p-3 border rounded text-sm focus:ring-2 focus:ring-black/40 ${
                  phone && !isPhoneValid ? "border-red-500" : ""
                }`}
                value={phone}
                onChange={(e) => handlePhoneChange(e.target.value)}
              />
              {phone && !isPhoneValid && (
                <p className="text-red-500 text-xs mt-1">
                  Enter valid 10-digit number (6/7/8/9).
                </p>
              )}
            </div>

            <select
              required
              className="w-full p-3 border rounded text-sm bg-white focus:ring-2 focus:ring-black/40"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            >
              <option value="">Select Location</option>
              {locations.map((loc) => (
                <option key={loc}>{loc}</option>
              ))}
            </select>

            <select
              required
              className="w-full p-3 border rounded text-sm bg-white focus:ring-2 focus:ring-black/40"
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
                setService("");
              }}
            >
              <option value="">Select Category</option>
              {Object.keys(serviceCategories).map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>

            <select
              required
              disabled={!category}
              className="w-full p-3 border rounded text-sm bg-white focus:ring-2 focus:ring-black/40 disabled:opacity-50"
              value={service}
              onChange={(e) => setService(e.target.value)}
            >
              <option value="">Select Service</option>
              {category &&
                serviceCategories[category].map((s) => (
                  <option key={s}>{s}</option>
                ))}
            </select>

            <input
              required
              type="date"
              min={today}
              className="w-full p-3 border rounded text-sm bg-white focus:ring-2 focus:ring-black/40"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>

          {/* Add-ons (Improved for mobile) */}
          <div className="p-4 border rounded bg-gray-50">
            <p className="font-semibold mb-2 text-sm">Add Ons (Optional)</p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {addOnList.map((addon) => (
                <label key={addon} className="flex items-center gap-2 text-sm">
                  <input
                    type="checkbox"
                    checked={addons.includes(addon)}
                    onChange={() => toggleAddOn(addon)}
                  />
                  <span>{addon}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Summary (Improved mobile spacing) */}
          {isFormReady && (
            <div className="p-4 border rounded bg-gray-50 text-sm space-y-1">
              <h2 className="text-lg font-semibold mb-2">Summary</h2>
              <p><strong>Name:</strong> {name}</p>
              <p><strong>Mobile:</strong> {phone}</p>
              <p><strong>Location:</strong> {location}</p>
              <p><strong>Category:</strong> {category}</p>
              <p><strong>Service:</strong> {service}</p>
              <p><strong>Add Ons:</strong> {addons.length ? addons.join(", ") : "None"}</p>
              <p><strong>Date:</strong> {formatDate()}</p>
            </div>
          )}

          <button
            type="submit"
            disabled={!isFormReady}
            className={`w-full p-3 rounded text-white text-base font-medium transition ${
              isFormReady
                ? "bg-black hover:bg-gray-800"
                : "bg-gray-400 cursor-not-allowed"
            }`}
          >
            Submit & Send to Admin
          </button>
        </form>
      </section>
    </div>
  );
}
