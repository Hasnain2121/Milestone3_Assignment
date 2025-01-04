"use client";

import { useState, useEffect } from "react";

export default function Header() {
  const [currentTime, setCurrentTime] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // Update time every second
    const timer = setInterval(() => {
      setCurrentTime(
        new Date().toLocaleString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        })
      );
    }, 1000);

    return () => clearInterval(timer); // Cleanup interval on component unmount
  }, []);

  return (
    <header className="bg-teal-900 text-white py-4 px-6 shadow-xl animate-fade-in">
      <div className="flex justify-between items-center lg:flex-row">
        {/* Current Time */}
        <div className="text-lg font-bold animate-slide-down">
          {currentTime}
        </div>

        {/* Hamburger Menu for Mobile */}
        <button
          className="lg:hidden block text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>

        {/* Navigation Links */}
        <nav
          className={`${
            menuOpen ? "block" : "hidden"
          } lg:flex lg:space-x-6 text-lg font-bold space-y-4 lg:space-y-0 lg:text-base mt-4 lg:mt-0`}
        >
          <a href="#about" className="block text-white hover:text-gray-300">
            About
          </a>
          <a href="#features" className="block text-white hover:text-gray-300">
            Features
          </a>
          <a href="#blog" className="block text-white hover:text-gray-300">
            Blog
          </a>
          <a href="#profile" className="block text-white hover:text-gray-300">
            Profile
          </a>
          <a href="#comments" className="block text-white hover:text-gray-300">
            Comments
          </a>
        </nav>
      </div>
    </header>
  );
}
