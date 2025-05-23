import { FaArrowRight, FaPlay } from "react-icons/fa";
import React, { useState } from "react";

const stepsData = [
  {
    label: " 1. Select exchange/wallet",
    videoUrl: "https://www.youtube.com/shorts/l2De8fn0lSI",
    subtitle:
      "Choose your exchange or wallet from our wide range of supported integrations. Our seamless integration makes it easy to get started.",
  },
  {
    label: " 2. Upload transaction history  ",
    videoUrl: "https://www.youtube.com/shorts/7PZnoUzL8BQ",
    subtitle:
      "Upload your transaction history as a CSV/Excel file or provide your API key to allow us to fetch your transactions seamlessly",
  },
  {
    label: "3. Review Transactions",
    videoUrl: "https://www.youtube.com/shorts/U_Kcc4AZgL4",
    subtitle:
      "Review transactions for any missing cost basis (COA) and reconcile all deposits and withdrawals for precise tax calculations.",
  },
  {
    label: "4. Download Report",
    videoUrl: "https://www.youtube.com/shorts/ooP23-jgCYY",
    subtitle:
      "Select a report that fits your needs, such as a business report or a capital gains report, and download it instantly.",
  },
];

const StepsSection = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className=" mt-[120px] py-16 px-4 font-poppins">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-[24px] sm:text-[48px] md:text-[48px] font-medium text-black">
            Steps to Calculate Taxes
          </h2>
          <p className="text-gray-600 mt-4 sm:8  mx-auto text-xs sm:text-base md:text-base max-w-lg font-normal">
            In just four simple steps, get your crypto tax report ready.
            Connect, upload, review, and download in minutes!
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-2 justify-center w-full md:max-w-5xl mx-auto">
          <div className="flex flex-col  justify-between w-full md:max-w-[33%]">
            <div className="space-y-6 space-x-1 mb-6">
              {stepsData.map((step, index) => (
                // <div
                //   key={index}
                //   onClick={() => setActiveStep(index)}
                //   className="relative flex flex-col cursor-pointer group"
                // >
                //   <div
                //     className={`flex items-center  transition-all duration-300  gap-2 space-x-2 font-medium text-lg ${
                //       activeStep === index
                //         ? "text-[#A64D79]  transition-all duration-300"
                //         : "text-gray-700"
                //     }`}
                //   >
                //     {activeStep === index && <FaArrowRight />}
                //     <span className="text-sm sm:text-base md:text-base font-semibold ">
                //       {step.label}
                //     </span>
                //   </div>

                //   <span
                //     className={`h-[1px] bg-[rgba(166,77,122,1)] inline-block transition-all duration-300 absolute bottom-0 left-0 ${
                //       activeStep === index ? "w-[65%] " : "w-0"
                //     }`}
                //   ></span>
                // </div>
                <div
                  key={index}
                  onClick={() => setActiveStep(index)}
                  className="relative flex flex-col cursor-pointer group"
                >
                  <div
                    className={`flex items-center gap-2 font-medium text-lg transition-all duration-300 ${
                      activeStep === index
                        ? "text-[#A64D79] translate-x-1"
                        : "text-gray-700"
                    }`}
                  >
                    {activeStep === index && (
                      <FaArrowRight className="transition-transform duration-300" />
                    )}
                    <span className="text-sm sm:text-base md:text-base font-semibold transition-all duration-300">
                      {step.label}
                    </span>
                  </div>

                  <span
                    className={`h-[1px] bg-[rgba(166,77,122,1)] inline-block absolute bottom-0 left-0 transition-all duration-300 ${
                      activeStep === index
                        ? " w-[60%] sm:w-full md:w-[90%] lg:w-[85%]"
                        : "w-0"
                    }`}
                  ></span>
                </div>
              ))}
            </div>

            <p className="text-gray-600 text-sm md:text-base m font-medium  ">
              {stepsData[activeStep].subtitle}
            </p>
          </div>

          <div className="flex-1 w-full">
            <div className=" mt-4 sm:mt-4 lg:mt-0  border border-[#A64D79] rounded-md  w-aut md:w-aut md:h-[auto sm:w-aut sm:h-[300px h-full w-full aspect-video flex items-center justify-center shadow-[inset_0_4px_6px_rgba(0,0,0,0.1)]">
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
                  className="w-full h-auto object-cover rounded-md"
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
