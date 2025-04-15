import { FaArrowRight, FaPlay } from "react-icons/fa";
import React, { useState } from 'react';


const stepsData = [
    {
      label: " 1. Select exchange/wallet",
      videoUrl: "https://www.youtube.com/shorts/l2De8fn0lSI",
    },
    {
      label: " 2. Upload Data",
      videoUrl: "https://www.youtube.com/shorts/7PZnoUzL8BQ",
    },
    {
      label: "3. Review Transactions",
      videoUrl: "https://www.youtube.com/shorts/U_Kcc4AZgL4",
    },
    {
      label: "4. Download Report",
      videoUrl: "https://www.youtube.com/shorts/ooP23-jgCYY",
    },
  ];
  

const StepsSection = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="bg-gradient-to-r from-[#FED8D8] to-white py-16 px-4 font-poppins">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-semibold text-black">
            Steps to Calculate Taxes
          </h2>
          <p className="text-gray-600 mt-8 max-w-md mx-auto text-base font-normal">
            In just four simple steps, get your crypto tax report ready.
            Connect, upload, review, and download in minutes!
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-5xl mx-auto">
          <div className="flex-1">
            <div className="space-y-6 space-x-1 mb-6">
              {stepsData.map((step, index) => (
                <div
                  key={index}
                  onClick={() => setActiveStep(index)}
                  className="relative flex flex-col cursor-pointer group"
                >
                  <div
                    className={`flex items-center space-x-2 font-medium text-lg ${
                      activeStep === index
                        ? "text-[#A64D79]"
                        : "text-gray-700"
                    }`}
                  >
                    {activeStep === index && <FaArrowRight />}
                    <span>{step.label}</span>
                  </div>

                  <span
                    className={`h-[2px] bg-[#383838] inline-block transition-all duration-300 absolute bottom-0 left-0 ${
                      activeStep === index ? "w-[65%] " : "w-0"
                    }`}
                  ></span>
                </div>
              ))}
            </div>

            <p className="text-gray-600 text-sm max-w-xs font-medium mt-[110px]">
              Choose your exchange or wallet from our wide range of supported
              integration. Our seamless integration makes it easy to get
              started.
            </p>
          </div>

          <div className="flex-1">
            <div className="border border-[#A64D79] rounded-md w-[616px] h-[400px] aspect-video flex items-center justify-center shadow-[inset_0_4px_6px_rgba(0,0,0,0.1)] ">
              {stepsData[activeStep].videoUrl.includes("youtube") ? (
                <iframe
                  key={stepsData[activeStep].videoUrl}
                  width="100%"
                  height="100%"
                  className="rounded-md"
                  src={stepsData[activeStep].videoUrl.replace(
                    "/shorts/",
                    "/embed/"
                  )}
                  title="YouTube video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : (
                <video
                  key={stepsData[activeStep].videoUrl}
                  controls
                  autoPlay
                  className="w-[697px] h-[376px] object-cover rounded-md"
                >
                  <source
                    src={stepsData[activeStep].videoUrl}
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
