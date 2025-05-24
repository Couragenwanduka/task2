'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const NavBar = () => {
  const navList = ['About Us', 'Features', 'More Option', 'Contact'];
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="flex h-[6.25rem] items-center justify-between bg-white px-6 sm:px-10 md:px-20 lg:px-[9.375rem]">
      <div className="md:h-[100px] md:w-[170px]">
        <Image
          src="/icon/logo.svg"
          alt="Logo Icon"
          width={170}
          height={100}
          className="h-[50px] w-[85px] md:h-[100px] md:w-[170px]"
        />
      </div>

      {/* Desktop & Tablet Nav + Buttons */}
      <div className="hidden w-full max-w-[900px] items-center justify-between lg:flex">
        <nav>
          <ul className="flex cursor-pointer items-center justify-center gap-8 font-raleway text-[16px] font-semibold leading-[20px] text-blue">
            {navList.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </nav>
        <div className="flex gap-3.5">
          <button className="h-11 w-[130px] rounded-[5px] border border-peachRed font-raleway text-[16px] font-medium leading-[26px] text-peachRed">
            Log In
          </button>
          <button className="h-11 w-[130px] rounded-[5px] bg-peachRed font-raleway text-[16px] font-medium leading-[26px] text-white">
            Sign up
          </button>
        </div>
      </div>

      {/* Mobile Hamburger Icon */}
      <button
        className="flex items-center lg:hidden"
        aria-label="Toggle menu"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        <svg
          className="h-8 w-8 text-blue"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {mobileMenuOpen ? (
            // Close icon
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            // Hamburger icon
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <nav className="absolute left-0 right-0 top-[6.25rem] z-10 bg-white shadow-md md:hidden">
          <ul className="flex flex-col gap-4 p-4 font-raleway text-[16px] font-semibold text-blue">
            {navList.map((item, index) => (
              <li key={index} className="cursor-pointer border-b border-gray-200 pb-2">
                {item}
              </li>
            ))}
            <li className="mt-4 flex gap-3">
              <button className="h-11 flex-1 rounded-[5px] border border-peachRed font-medium text-peachRed">
                Log In
              </button>
              <button className="h-11 flex-1 rounded-[5px] bg-peachRed font-medium text-white">
                Sign up
              </button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default NavBar;
