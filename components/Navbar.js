"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <header className="text-gray-600 body-font fixed w-full !z-50 mt-6">
      <div className="px-2 md:px-8 container mx-auto !flex pb-5 flex-row justify-between items-center md:items-start">

        {/* Logo */}
        <div className="bg-gray-900 !w-fit backdrop-blur-md bg-opacity-50 rounded-lg">
          <Link href="/" className="flex title-font font-medium items-center text-gray-900 md:mb-0">
            <Image src="/logo3.png" alt="Logo" width={120} height={120} />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="bg-gray-900 backdrop-blur-md bg-opacity-50 rounded-lg p-2 px-4 !h-fit hidden md:block">
          <nav className="md:ml-auto flex-wrap items-center text-sm text-white justify-center !flex !h-fit">
            <Link href="/#aboutMeRef" className="mr-5 hover:text-blue-500 font-bold text-lg">About me</Link>
            <Link href="/#skillsRef" className="mr-5 hover:text-blue-500 font-bold text-lg">Skills</Link>
            <Link href="/#projectsRef" className="mr-5 hover:text-blue-500 font-bold text-lg">Projects</Link>
            <Link href="/#institutesRef" className="mr-5 hover:text-blue-500 font-bold text-lg">Experience</Link>
            <Link href="#contactRef" className="hover:text-blue-500 font-bold text-lg">Contact</Link>
          </nav>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setDrawerOpen(true)}
            className="text-white text-3xl focus:outline-none bg-gray-900 backdrop-blur-md p-2 bg-opacity-50 rounded-lg"
          >
            <FiMenu />
          </button>
        </div>
      </div>

      {/* Mobile Drawer (Right Side) */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gray-900 bg-opacity-90 backdrop-blur-md transform text-start ${
          drawerOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="!flex w-full !justify-end p-4 !mt-0">
          <button onClick={() => setDrawerOpen(false)} className="text-white text-3xl w-fit">
            <FiX />
          </button>
        </div>
        <nav className="flex flex-col !items-start mt-4 space-y-4 text-white px-6">
          <Link href="/#aboutMeRef" onClick={() => setDrawerOpen(false)} className="hover:text-blue-500 font-bold text-lg">About me</Link>
          <Link href="/#skillsRef" onClick={() => setDrawerOpen(false)} className="hover:text-blue-500 font-bold text-lg">Skills</Link>
          <Link href="/#projectsRef" onClick={() => setDrawerOpen(false)} className="hover:text-blue-500 font-bold text-lg">Projects</Link>
          <Link href="/#institutesRef" onClick={() => setDrawerOpen(false)} className="hover:text-blue-500 font-bold text-lg">Experience</Link>
          <Link href="#contactRef" onClick={() => setDrawerOpen(false)} className="hover:text-blue-500 font-bold text-lg">Contact</Link>
        </nav>
      </div>

      {/* Overlay */}
      {drawerOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={() => setDrawerOpen(false)}
        ></div>
      )}
    </header>
  );
};

export default Navbar;
