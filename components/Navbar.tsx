"use client";

import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${scrolled ? "bg-black/90 backdrop-blur-md" : "bg-transparent"}
        `}
      >
        <div className="flex justify-between items-center px-5 md:px-8 lg:px-24 py-5">
          {/* Logo */}
          <p className="text-white text-3xl font-bold uppercase">dtg.</p>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-6">
            {["Home", "About", "Expertise", "Projects", "Contact"].map(
              (item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-white font-medium text-lg hover:text-[#D4AF38] transition"
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>

          {/* Desktop Button */}
          <div className="hidden md:block">
            <Button
              asChild
              className="border border-[#D4AF38]/50 text-white hover:bg-[#D4AF38]/50 transition"
            >
              <a href="#contact">Work With Me</a>
            </Button>
          </div>

          {/* Mobile Menu Icon */}
          <button
            className="md:hidden text-white"
            onClick={() => setOpen(true)}
          >
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/60 z-40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Side Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-black z-50
        transform transition-transform duration-300 ease-in-out
        ${open ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="flex justify-between items-center px-6 py-5 border-b border-white/10">
          <p className="text-white text-2xl font-bold">Menu</p>
          <button onClick={() => setOpen(false)} className="text-white">
            <X size={26} />
          </button>
        </div>

        <div className="flex flex-col gap-6 px-6 py-8">
          {["Home", "About", "Expertise", "Projects", "Contact"].map(
            (item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="text-white text-lg font-medium hover:text-[#D4AF38]"
              >
                {item}
              </a>
            )
          )}

          <Button
            asChild
            className="mt-4 border border-[#D4AF38]/50 text-white hover:bg-[#D4AF38]/50"
          >
            <a href="#contact">Work With Me</a>
          </Button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
