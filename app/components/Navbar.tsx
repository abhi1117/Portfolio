"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import "@fontsource/montserrat";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathName = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div style={{ fontFamily: "Montserrat, sans-serif" }}>
      <nav className="bg-black relative z-10 pb-7 ">
        {/* Set a z-index to ensure the navbar stays above the background */}
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 lg:relative lg:top-4">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <Image
              src="https://flowbite.com/docs/images/logo.svg"
              width={40}
              height={40}
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
              Abhishek
            </span>
          </a>
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Toggle menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isMenuOpen
                    ? "M1 13h15M1 7h15M1 1h15"
                    : "M1 1h15M1 7h15M1 13h15"
                }
              />
            </svg>
          </button>
          <div
            className={`w-full md:block md:w-auto absolute md:relative top-full left-0 max-sm:bg-black ${
              isMenuOpen ? "" : "hidden"
            }`} // Use absolute positioning for the dropdown menu
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
              <li>
                <a
                  href="/"
                  // className="block py-2 px-3 rounded md:bg-transparent text-blue-500"
                  // aria-current="page"
                  className={
                    pathName === "/"
                      ? "block py-2 px-3 rounded md:bg-transparent text-blue-500"
                      : "block py-2 px-3 text-white rounded hover:text-blue-500"
                  }
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/projects"
                  className={
                    pathName === "/projects"
                      ? "block py-2 px-3 rounded md:bg-transparent text-blue-500"
                      : "block py-2 px-3 text-white rounded hover:text-blue-500"
                  }
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="https://drive.google.com/file/d/1C-lPbYxXr6Y51Gg5OBkG7kg5Ta9HzgCE/view?usp=drive_link"
                  className={
                    pathName === "/resume"
                      ? "block py-2 px-3 rounded md:bg-transparent text-blue-500"
                      : "block py-2 px-3 text-white rounded hover:text-blue-500"
                  }
                >
                  Resume
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className={
                    pathName === "/about"
                      ? "block py-2 px-3 rounded md:bg-transparent text-blue-500"
                      : "block py-2 px-3 text-white rounded hover:text-blue-500"
                  }
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className={
                    pathName === "/contact"
                      ? "block py-2 px-3 rounded md:bg-transparent text-blue-500"
                      : "block py-2 px-3 text-white rounded hover:text-blue-500"
                  }
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
