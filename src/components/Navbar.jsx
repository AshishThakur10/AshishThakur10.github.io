import React, { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-2">
        <div className="flex justify-between items-center">
          <a href="/" className="text-black text-xl font-semibold">
            Ashish
          </a>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-black focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>

        </div>
        <div className={`md:flex ${isOpen ? "block" : "hidden"}`}>
            <a
              href="/"
              className="text-black hover:text-yellow block mt-4 md:inline-block md:mt-0 md:ml-6"
            >
              Home
            </a>
            <a
              href="/about"
              className="text-black hover:text-white block mt-4 md:inline-block md:mt-0 md:ml-6"
            >
              About
            </a>
            <a
              href="/projects"
              className="text-black hover:text-white block mt-4 md:inline-block md:mt-0 md:ml-6"
            >
              Projects
            </a>
            <a
              href="/contact"
              className="text-black hover:text-white block mt-4 md:inline-block md:mt-0 md:ml-6"
            >
              Contact
            </a>
          </div>
      </div>
    </nav>
  );
}

export default Navbar;
