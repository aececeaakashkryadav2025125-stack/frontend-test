"use client";

import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full border-b border-gray-800">

      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

        {/* Logo */}
        <h1 className="text-3xl font-bold text-green-700">
          Plantify
        </h1>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-10 text-gray-300 font-medium">

          <li className="hover:text-green-700 cursor-pointer transition">
            Home
          </li>

          <li className="hover:text-green-700 cursor-pointer transition">
            Plants
          </li>

          <li className="hover:text-green-700 cursor-pointer transition">
            About
          </li>

          <li className="hover:text-green-700 cursor-pointer transition">
            Contact
          </li>

        </ul>

        {/* Desktop Button */}
        <button className="hidden md:block bg-green-700 text-white px-6 py-3 rounded-full hover:bg-green-800 transition">

          Shop Now

        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white text-4xl"
        >

          {menuOpen ? <HiX /> : <HiMenu />}

        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (

    <div className="absolute top-20 left-0 w-full bg-black border-t border-gray-800 flex flex-col items-center gap-6 py-8 md:hidden z-50">

          <ul className="flex flex-col items-center gap-6 text-gray-300 font-medium text-lg">

            <li className="hover:text-green-700 cursor-pointer transition">
              Home
            </li>

            <li className="hover:text-green-700 cursor-pointer transition">
              Plants
            </li>

            <li className="hover:text-green-700 cursor-pointer transition">
              About
            </li>

            <li className="hover:text-green-700 cursor-pointer transition">
              Contact
            </li>

          </ul>

         <button className="bg-green-700 text-white px-8 py-3 rounded-full hover:bg-green-800 transition"> 

            Shop Now

          </button>

        </div>

      )}

    </nav>
  );
}