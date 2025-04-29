import React from "react";
import Navbar from "../components/navbar";

const AboutUs = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-10 ">
      <div className="flex flex-col justify-center items-center mt-8">
        <h2 className=" text-5xl font-bold text-center mb-8">About Us</h2>

        <p className="text-center text-gray-700 text-base max-w-4xl max-h-28 mx-auto mb-4">
          At Catax we’re redefining crypto tax compliance for individuals and
          businesses in India. With a team that includes certified chartered
          accountants, blockchain analysts, forensic auditors, and crypto tax
          specialists, we bring over 15 years of expertise in cryptocurrency
          regulations and compliance. We want you to focus on growing your
          investments and trading with confidence while we manage taxes are in
          expert hands.
        </p>
      </div>

      <div className="flex flex-col md:flex-row  gap-5 items-center justify-center md:items-center md:justify-center mt-10 w-full   ">
        <div className="w-full  h-[300px] md:w-[628px] md:h-[410px] bg-gray-300 border-[#000000] border 1px mb-6 mt-20 sm:mt-0 md:mb-0" />

        <div className=" w-full md:w-[410px] flex flex-col">
          <div className=" w-full   h-[300px]  sm:h-[200px]   md:h-[221px] bg-gray-300 border-[#000000] border 1px" />
          <div className="flex  mt-6 gap-6 w-full">
            <div className="w-1/2 h-[110px] sm:h-[150px] md:w-[193px] md:h-[165px] bg-gray-300 border-[#000000] border 1px" />
            <div className="w-1/2 h-[110px]  sm:h-[150px] md:w-[193px] md:h-[165px]  bg-gray-300 border-[#000000] border 1px" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
