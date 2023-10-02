"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="w-full py-3 flex z-50 justify-between items-center text-white">
      <Image src="/brand.png" width={89} height={24} alt="Netflix" />
      <div className="md:flex hidden gap-4 items-center text-lg font-[400]">
        <Link href="/">Movies</Link>
        <Link href="/">Tv Shows</Link>
        <Link href="/">New & Populer</Link>
      </div>
      <div className="flex gap-5 items-center ">
        <select className="bg-transparent border-none focus:outline-none">
          <option className="text-slate-900">ID</option>
          <option className="text-slate-900">EN</option>
        </select>
        <button className="px-6 py-2 rounded-lg bg-[#BC0E19] hover:opacity-90">
          Masuk
        </button>
        <button
          onClick={handleClick}
          className="flex flex-col justify-center items-center md:hidden"
        >
          <span
            className={`bg-white block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm ${
                      isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
                    }`}
          ></span>
          <span
            className={`bg-white block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm my-0.5 ${
                      isOpen ? "opacity-0" : "opacity-100"
                    }`}
          ></span>
          <span
            className={`bg-white block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm ${
                      isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
                    }`}
          ></span>
        </button>
      </div>
      <div
        className={
          "z-40  w-full h-screen absolute top-[70px] bottom-0 left-0 right-0 bg-[#1a1c22]  justify-center items-center flex-col gap-10 md:hidden " +
          `${isOpen ? "flex" : "hidden"}`
        }
      >
        <Link href="/" className="border-b border-[#1a1c22] hover:border-white">
          Movies
        </Link>
        <Link href="/" className="border-b border-[#1a1c22] hover:border-white">
          Tv Shows
        </Link>
        <Link href="/" className="border-b border-[#1a1c22] hover:border-white">
          New & Popular
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
