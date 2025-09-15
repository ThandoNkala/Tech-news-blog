"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="font-bold bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
     
        <div className="flex items-center justify-between">
          <div className="flex h-30 items-center">
          
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="flex items-center">
                <Image
                  src="https://res.cloudinary.com/dp5gnnji3/image/upload/v1756820281/site-logo_jz9rbb.svg"
                  alt="TechWire Logo"
                  width={190}
                  height={190}
                />
              </Link>
            </div>

          
            <div className="hidden md:flex space-x-8 ml-10 font-bold">
              <Link href="/technology" className="text-gray-700 hover:text-purple-600 transition duration-150">Technology</Link>
              <Link href="/gadget" className="text-gray-700 hover:text-purple-600 transition duration-150">Gadgets</Link>
              <Link href="/software" className="text-gray-700 hover:text-purple-600 transition duration-150">Software</Link>
              <Link href="/app" className="text-gray-700 hover:text-purple-600 transition duration-150">Apps</Link>
              <Link href="/games" className="text-gray-700 hover:text-purple-600 transition duration-150">Games</Link>
              <Link href="/podcast" className="text-gray-700 hover:text-purple-600 transition duration-150">Podcast</Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-700 hover:text-blue-600 focus:outline-none"
                aria-expanded={isOpen}
                aria-label="Toggle menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Right side links */}
          <div className="hidden md:flex space-x-10">
            <Link href="/subscribe" className="text-gray-700 hover:text-purple-500 font-bold transition duration-150">Subscribe</Link>
            <Link href="/signin" className="text-gray-700 hover:text-purple-500 font-bold transition duration-150">Sign In</Link>
            <Image
              src="https://res.cloudinary.com/dp5gnnji3/image/upload/v1756976052/search-svgrepo-com_1_ho6af0.svg"
              alt="Search Icon"
              width={24}
              height={24}
            />
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-2 space-y-3">
              <Link href="/technology" className="block py-2 text-gray-700 hover:text-blue-600 transition" onClick={() => setIsOpen(false)}>Technology</Link>
              <Link href="/gadget" className="block py-2 text-gray-700 hover:text-blue-600 transition" onClick={() => setIsOpen(false)}>Gadgets</Link>
              <Link href="/software" className="block py-2 text-gray-700 hover:text-blue-600 transition" onClick={() => setIsOpen(false)}>Software</Link>
              <Link href="/apps" className="block py-2 text-gray-700 hover:text-blue-600 transition" onClick={() => setIsOpen(false)}>Apps</Link>
              <Link href="/games" className="block py-2 text-gray-700 hover:text-blue-600 transition" onClick={() => setIsOpen(false)}>Games</Link>
              <Link href="/podcast" className="block py-2 text-gray-700 hover:text-blue-600 transition" onClick={() => setIsOpen(false)}>Podcast</Link>
              <Link href="/subscribe" className="block py-2 text-gray-700 hover:text-blue-600 transition" onClick={() => setIsOpen(false)}>Subscribe</Link>
              <Link href="/signup" className="block py-2 text-gray-700 hover:text-blue-600 transition" onClick={() => setIsOpen(false)}>Sign In</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
