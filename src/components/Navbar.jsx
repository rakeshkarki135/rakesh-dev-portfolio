"use client";

import Link from "next/link";
import { useState } from "react";

import HiringModal from "./HiringModal";

const Navbar = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <nav className="h-15 flex items-center justify-between mx-5 sm:mx-20 my-1">
        <h1 className="text-lg sm:text-2xl font-bold text-primary-container">
          DevPortfolio
        </h1>
        <div className="flex gap-2 sm:gap-10 text-xs sm:text-sm font-semibold">
          <Link
            href="/"
            className="relative after:absolute after:h-1 after:w-full after:left-0 after:-bottom-2 after:bg-primary-container after:rounded-xl after:scale-x-0 after:transition-transform after:duration-300 after:origin-center hover:after:scale-x-100"
          >
            HOME
          </Link>
          <Link
            href="#skills"
            className="relative after:absolute after:h-1 after:w-full after:left-0 after:-bottom-2 after:bg-primary-container after:rounded-xl after:scale-x-0 after:transition-transform after:duration-300 after:origin-center hover:after:scale-x-100"
          >
            SKILLS
          </Link>
          <Link
            href="#contact"
            className="relative after:absolute after:h-1 after:w-full after:left-0 after:-bottom-2 after:bg-primary-container after:rounded-xl after:scale-x-0 after:transition-transform after:duration-300 after:origin-center hover:after:scale-x-100"
          >
            CONTACT
          </Link>
        </div>

        <button
          onClick={() => setOpenModal(true)}
          className="text-xs sm:text-sm bg-primary-container font-bold px-4 sm:px-8 py-2 rounded-2xl transition-all duration-500 border-be-on-primary hover:bg-secondary-container hover:scale-105"
        >
          Hire Me
        </button>
      </nav>
      {openModal && (
        <HiringModal open={openModal} setOpenModal={setOpenModal} />
      )}
    </>
  );
};

export default Navbar;
