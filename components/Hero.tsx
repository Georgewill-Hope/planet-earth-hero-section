import Image from "next/image";
import earth from "@/public/earth.png";
import Button from "./Button";
import { FaArrowRight } from "react-icons/fa";
import companies from "@/public/companies.png";

const Hero = () => {
  return (
    <section className="h-screen max-h-125px sm:max-h-screen relative">
      <Image
        src={earth}
        alt="earth"
        fill
        className="object-cover object-center grayscale-50"
      />
      <div className="absolute top-0 bottom-0 left-0 right-0 bg-black/30 flex flex-col items-center justify-between text-center pb-10 py-40 px-3">
        <div className="customFlex gap-5 sm:gap-8 containerWidth">
          <h1 className="font-sans text-white text-4xl sm:text-6xl lg:text-7xl sm:leading-16">
            Join the most{" "}
            <i className="font-serif text-earth-blue">
              diverse <br /> planet{" "}
            </i>
            in the galaxy
          </h1>
          <p className="font-inter text-sm lg:text-lg text-earth-light-ash">
            Beaches, mountains, chaos, traffic jams — <br />
            We&rsquo;ve got it all!”
          </p>
          <div className="flex items-center justify-center gap-10">
            <Button
              title="Join Earth Now"
              type="primary"
              icon={<FaArrowRight size={12} />}
            />
            <Button title="Book a Demo" type="secondary" />
          </div>
        </div>
        <div className="containerWidth flex flex-col gap-5 sm:gap-3 items-center justify-center">
          <p className="text-earth-light-ash font-inter tracking-wide">
            Trusted by 8 Billion+ Population
          </p>
          <Image
            src={companies}
            alt="trusted companies"
                      width={500}
                      height={500}
            className="w-[800px] sm:h-[30px] lg:h-auto lg:w-[800px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
