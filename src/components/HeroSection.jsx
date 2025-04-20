import React from "react";
import catex from "/assets/catex.png";
import { IoIosArrowRoundForward } from "react-icons/io";

const HeroSection = () => {
  return (
    <section className="bg-white text-center sm:py-10  relative overflow-hidden">
      <h1 className="text-4xl md:text-7xl font-extrabold text-gray-900 mb-8">
        Come. Calculate. Chill.
      </h1>

      <p className="text-gray-600 text-sm   sm:text-base md:text-xl max-w-md sm:max-w-xl md:max-w-xl mx-auto mb-10 font-semibold">
        Get a tax-ready report in just 3 clicks! Accurate, reliable, and built
        for Indian crypto tax laws.
      </p>

      <div className="relative w-full mt-14">
        <button className="absolute left-1/2 -top-6 transform -translate-x-1/2 bg-[#A64D79] text-white gap-2  text-xs sm:text-base  rounded-full px-5 py-3 font-semibold transition flex items-center  z-10">
          Calculate Now <IoIosArrowRoundForward size={29} className="-mb-1" />
        </button>

        <img
          src={catex}
          alt="Image of India"
          className="w-full max-w-screen sm:max-w-screen lg:max-w-screen h-auto object-cover mx-auto opacity-40"
        />
      </div>
    </section>
  );
};

export default HeroSection;
