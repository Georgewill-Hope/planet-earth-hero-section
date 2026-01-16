"use client";

import Image from "next/image";
import logo from "@/public/logo.png";
import navData from "@/utils/_data";
import Link from "next/link";
import Button from "./Button";
import { FaArrowRight } from "react-icons/fa";
import { HiOutlineBars3 } from "react-icons/hi2";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <nav className="fixed w-full top-0 sm:top-10 z-50 px-10 bg-black">
      {/* Large devices navbar */}
      <div className="containerWidth sm:flex items-center justify-between gap-10 hidden">
        {/* Navbar logo */}
        <div>
          <Image src={logo} alt="logo" width={40} height={40} />
        </div>

        {/* Navbar Links */}
        <ul className="flex items-center justify-center gap-10 mr-auto">
          {navData.map((item) => (
            <li
              key={item.id}
              className="text-earth-light-ash font-inter hover:text-white transition-colors duration-500 text-[13px]"
            >
              <Link href={item.href}>{item.title}</Link>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <Button
          title="Join Earth Now"
          type="primary"
          icon={<FaArrowRight size={12} />}
        />
      </div>

      {/* Small devices Navbar */}
      <div className="w-full flex items-center justify-between bg-black h-17.5 sm:hidden">
        {/* nav logo */}
        <div>
          <Image src={logo} alt="logo" width={30} height={30} />
        </div>

        {/* toggle button */}
        <button onClick={() => setShow(!show)}>
          <HiOutlineBars3 size={30} color="white" />
        </button>

        {/* nav links */}
        <div
          className={`absolute top-0 bottom-0 left-0 w-full h-screen z-50 flex flex-col items-center justify-start bg-black transition-transform transform duration-500 px-10 pt-5 ${
            show ? "translate-0" : "-translate-x-175"
          }`}
        >
          <button onClick={() => setShow(!show)} className="self-end mb-20">
            <AiOutlineClose size={30} color="white" />
          </button>
          <ul className="flex flex-col items-center justify-center gap-10 mb-10">
            {navData.map((item) => (
              <li
                key={item.id}
                className="text-earth-light-ash font-inter hover:text-white transition-colors duration-500 text-[13px]"
              >
                <Link href={item.href}>{item.title}</Link>
              </li>
            ))}
          </ul>

          {/* CTA button */}
          <Button
            title="Join Earth Now"
            type="primary"
            icon={<FaArrowRight size={12} />}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
