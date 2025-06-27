'use client';
import Link from "next/link";
import React from "react";
import { useState } from "react";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  
 
  return (
    
    <nav id="Navbar" className=" py-4 bg-transparent backdrop-blur-none absolute top-0 left-0 right-0 z-10 shadow-md md:mx-16 mx-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold ml-6 md:ml-12">SHIVSHANKAR KUMAR</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-4 mr-4 md:mr-12">
          <li>
            <Link href="#home" className="hover:text-gray-500">
              Home
            </Link>
          </li>
          <li>
            <Link href="#about" className="hover:text-gray-500">
              About
            </Link>
          </li>
          <li>
            <Link href="#Education" className="hover:text-gray-500">
              Education
            </Link>
          </li>
          <li>
            <Link href="#projects" className="hover:text-gray-500">
              Projects
            </Link>
          </li>
          <li>
            <Link href="#contact" className="hover:text-gray-500">
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden focus:outline-none mr-6"
        >
          <svg
            className="w-6 h-6 fill-current text-white"
            viewBox="0 0 24 24"
          >
            {isMobileMenuOpen ? (
              <path
                fillRule="evenodd"
                d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 0 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
              />
            ) : (
              <path
                fillRule="evenodd"
                d="M4 5h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z"
              />
            )}
          </svg>
        </button>

        {/* Mobile Menu */}
        <div
          className={`${
            isMobileMenuOpen ? 'block' : 'hidden'
          } md:hidden absolute top-16 left-0 w-full  z-10 `}
        >
          <ul className="px-16 py-2 flex flex-col text-center space-y-2 backdrop-blur-md bg-[#593b9e56] shadow-md rounded-xl" >
            <li>
              <Link href="#home" className="hover:bg-[#3d428b] py-2 px-4 block">
                Home
              </Link>
            </li>
            <li>
              <Link href="#about" className="hover:bg-[#3d428b] py-2 px-4 block ">
                About
              </Link>
            </li>
            <li>
              <Link href="#Education" className="hover:bg-[#3d428b] py-2 px-4 block">
                Education
              </Link>
            </li>
            <li>
              <Link href="#projects" className="hover:bg-[#3d428b] py-2 px-4 block">
                Projects
              </Link>
            </li>
            <li>
              <Link href="#contact" className="hover:bg-[#3d428b] py-2 px-4 block">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
