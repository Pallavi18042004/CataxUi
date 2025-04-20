

import React from 'react';

const GetStartedSection = () => {
  return (
    <section className="py-16 mt-[110px] text-center px-4 ">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-black mb-4">Get started for free</h2>
      <p className="text-gray-700 max-w-xl mx-auto mb-6 text-sm sm:text-base lg:text-lg">
        Your first report is on us. Start now and get your report instantly see how easy crypto taxes can be.
      </p>
      <button className="bg-[#9B3E69]  text-white text-base lg:text-lg px-14 py-3 rounded-full font-medium transition">
        {/* md:text-sm lg:text-sm */}
        Get Report
      </button>
    </section>
  );
};

export default GetStartedSection;
