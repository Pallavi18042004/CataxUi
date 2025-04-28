import React from "react";
import Navbar from "../components/navbar";

const AboutUs = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-10 ">

     <div className="flex flex-col justify-center items-center mt-8">
      <h2 className="text-5xl font-bold text-center mb-8">About Us</h2>

     
      <p className="text-center text-gray-700 text-base max-w-4xl max-h-28 mx-auto mb-4">
        At Catax we’re redefining crypto tax compliance for individuals and businesses in India. 
        With a team that includes certified chartered accountants, blockchain analysts, forensic auditors, 
        and crypto tax specialists, we bring over 15 years of expertise in cryptocurrency regulations and compliance.
      
        We want you to focus on growing your investments and trading with confidence while we manage 
        taxes are in expert hands.
      </p>

      </div>
      <div className="flex flex-col md:flex-row md:space-x-6 items-center justify-center md:items-start mt-10">

        <div className="w-[628px] h-[410px] bg-gray-300  border-[#000000] border 1px" />

        <div className="flex flex-col space-y-6 mt-6 md:mt-0">
          <div className="w-[410px] h-[221px] bg-gray-300 border-[#000000] border 1px" />
          <div className="flex space-x-6">
            <div className="w-[193px] h-[165px] bg-gray-300 border-[#000000] border 1px" />
            <div className="w-[193px] h-[165px] bg-gray-300 border-[#000000] border 1px" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
