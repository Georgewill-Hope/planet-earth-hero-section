"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import earth from "@/public/earth.png";
import Button from "./Button";
import { FaArrowRight } from "react-icons/fa";
import companies from "@/public/companies.png";
import { container, fromTop, fromBottom } from "@/lib/animation";

const Hero = () => {
  return (
    <section className="h-screen max-h-125px sm:max-h-screen relative">
      <Image
        src={earth}
        alt="earth"
        fill
        className="object-cover object-center"
      />

      <div className="absolute top-0 bottom-0 left-0 right-0 bg-black/30 flex flex-col items-center justify-between text-center pb-10 py-40 px-3">
        {/* TOP CONTENT */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="customFlex gap-5 sm:gap-8 containerWidth"
        >
          <motion.h1
            variants={fromTop}
            className="font-sans text-white text-4xl sm:text-6xl lg:text-7xl sm:leading-16"
          >
            Join the most{" "}
            <i className="font-serif text-earth-blue">
              diverse <br /> planet{" "}
            </i>
            in the galaxy
          </motion.h1>

          <motion.p
            variants={fromBottom}
            className="font-inter text-sm lg:text-lg text-earth-light-ash"
          >
            Beaches, mountains, chaos, traffic jams — <br />
            We&rsquo;ve got it all!”
          </motion.p>

          <motion.div
            variants={fromBottom}
            className="flex items-center justify-center gap-10"
          >
            <Button
              title="Join Earth Now"
              type="primary"
              icon={<FaArrowRight size={12} />}
            />
            <Button title="Book a Demo" type="secondary" />
          </motion.div>
        </motion.div>

        {/* BOTTOM CONTENT */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fromBottom}
          className="containerWidth flex flex-col gap-5 sm:gap-3 items-center justify-center"
        >
          <p className="text-earth-light-ash font-inter tracking-wide">
            Trusted by 8 Billion+ Population
          </p>

          <Image
            src={companies}
            alt="trusted companies"
            width={500}
            height={500}
            className="w-200 sm:h-7.5 lg:h-auto lg:w-200"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
