import React from "react";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <>
      <nav className="flex w-full justify-between items-center px-8 md:px-8 lg:px-12 py-6 bg-transparent fixed z-20">
        <p className="text-white text-3xl font-bold uppercase">dtg.</p>

        <ul className="hidden md:flex items-center gap-6 ">
          <li>
            <a href="#top" className="text-white font-medium text-xl">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="text-white font-medium text-xl">
              About
            </a>
          </li>
          <li>
            <a href="#expertise" className="text-white font-medium text-xl">
              Expertise
            </a>
          </li>
          <li>
            <a href="#projects" className="text-white font-medium text-xl">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="text-white font-medium text-xl">
              Contact
            </a>
          </li>
        </ul>

        <div>
          <Button asChild className="border border-[#D4AF38] rounded-lg text-white font-semibold cursor-pointer hover:bg-[#D4AF38] transition-all duration-300 ease-in-out hover:scale-105">
               <a href="#contact">Work With Me</a>
          </Button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
