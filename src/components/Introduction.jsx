"use client";

import Link from "next/link";
import Image from "next/image";

import { MdOutlineArrowForward } from "react-icons/md";

const Introduction = () => {
  return (
    <section className="bg-linear-to-t from-on-secondary-fixed to-black flex justify-center gap-8 py-20 sm:py-60 relative">
      <div className="h-50 w-50 bg-on-primary-fixed rounded-full absolute blur-3xl opacity-50 left-50 top-40" />
      <div className="w-sm sm:w-1/3 h-1/3 flex flex-col items-center gap-8 sm:gap-15">
        {/* for image */}
        {/* <Image
          src={"/profile/profile.jpg"}
          height={400}
          width={400}
          className="border-red-950 border-4 rounded-lg"
        /> */}

        {/* for badge */}
        <span className="text-[8px] sm:text-xs text-primary-container border border-on-secondary-fixed flex gap-1 items-center rounded-xl px-2 py-1">
          <span className="h-1 w-1 sm:h-1.5 sm:w-1.5 rounded-full bg-primary-container"></span>
          AVAILABLE FOR NEW OPPORTUNITIES
        </span>

        {/* for developer */}
        <div className="text-2xl sm:text-6xl font-extrabold flex flex-col items-center">
          <h1>Rakesh Karki</h1>
          <h1 className="text-primary-container">Fullstack Developer</h1>
        </div>

        {/* for text */}
        <div className="flex gap-3 sm:gap-8 flex-col">
          <h1 className="text-center text-lg sm:text-3xl font-bold text-gray-400">
            Python, Django, React, Next.js and Web <br /> Scraping specialist
          </h1>
          <p className="text-center text-xs sm:text-sm leading-loose tracking-wider text-gray-400">
            Building scalable web applications and high-performance automation
            tools <br />
            with a focus on clean code and efficient architecture.
          </p>
        </div>

        {/* fro button part */}
        <div className="flex gap-3 items-center">
          <Link
            href="#contact"
            className="text-xs sm:text-sm font-medium p-2 sm:px-5 sm:py-2 bg-primary-container rounded-lg transition-all duration-500 hover:bg-on-primary hover:text-gray-300"
          >
            <span className="flex items-center justify-center gap-1.5 text-xs sm:text-sm">
              {" "}
              Contact Me
              <MdOutlineArrowForward size={15} />
            </span>
          </Link>
          <a
            href="/portfolio/rakesh.pdf"
            download="Rakesh-karki-portfolio.pdf"
            className="text-xs sm:text-sm font-medium px-3 py-3 sm:px-4 sm:py-2 bg-surface-container border-gray-800 border rounded-lg hover:scale-104 hover:bg-surface-container-high shadow-surface-bright shadow-sm hover:shadow-md"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
