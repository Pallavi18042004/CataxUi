import React from "react";
import catex from "../assets/catex.png"; 

const HeroSection = () => {
  return (
    <section className="bg-white text-center py-16 px-4 relative overflow-hidden">
      
      <h1 className="text-4xl md:text-5xl font-bold font-poppins text-black mb-4">
        Come. Calculate. Chill.
      </h1>

     
      <p className=" text-[22px] font-semibold font-poppins  text-[#5F5858]   md:text-base max-w-2xl mx-auto mb-8">
        Get a tax-ready report in just 3 clicks! Accurate, reliable, and <br /> built for Indian crypto tax laws.
      </p>

     
      <div className="relative w-full mt-14">
       
        <button className="absolute left-1/2 -top-6 transform -translate-x-1/2 bg-[#A64D79] text-white px-6 py-3 rounded-full text-sm font-semibold  transition flex items-center shadow-lg z-10">
          Calculate kare?
          <span className="ml-2">→</span>
        </button>

        
        <img
          src={catex}
          alt="image of india"
          className="w-full h-auto object-cover max-w-[1440px] mx-auto opacity-40 "
        />
      </div>
    </section>
  );
};

export default HeroSection;
