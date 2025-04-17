import { FaArrowRightLong } from "react-icons/fa6";

import { Link } from "react-router-dom";

const CuratedSection = () => {
  const data = [
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
        <g id="solar:user-broken">
          <g id="Group">
            <path id="Vector" d="M24 20C28.4183 20 32 16.4183 32 12C32 7.58172 28.4183 4 24 4C19.5817 4 16 7.58172 16 12C16 16.4183 19.5817 20 24 20Z" fill="#FFE0E0" stroke="#A64D79" stroke-width="1.5" />
            <g id="Vector_2">
              <path d="M39.996 36C39.9987 35.672 40 35.3387 40 35C40 30.03 32.836 26 24 26C15.164 26 8 30.03 8 35C8 39.97 8 44 24 44C28.462 44 31.68 43.686 34 43.126" fill="#FFE0E0" />
              <path d="M39.996 36C39.9987 35.672 40 35.3387 40 35C40 30.03 32.836 26 24 26C15.164 26 8 30.03 8 35C8 39.97 8 44 24 44C28.462 44 31.68 43.686 34 43.126" stroke="#A64D79" stroke-width="1.5" stroke-linecap="round" />
            </g>
          </g>
        </g>
      </svg>,
      title: "For Individuals",
      description: "Maximize your returns with accurate and user-friendly tax reporting. Kryptos makes it easy for individual investors to stay compliant and stress-free.",
      link: "/individuals",
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
        <g id="ri:building-2-fill">
          <path id="Vector" d="M23.5 37.9999V38.4999H24H28H28.5V37.9999V12.7582L40.591 17.9395C40.591 17.9395 40.591 17.9395 40.5911 17.9395C40.861 18.0552 41.0911 18.2477 41.2527 18.493C41.4143 18.7383 41.5003 19.0257 41.5 19.3195V19.3199V37.9999V38.4999H42H45.5V41.4999H2.5V38.4999H6H6.5V37.9999V11.2999V11.2999C6.49996 11.0096 6.58412 10.7256 6.74227 10.4823C6.90042 10.2389 7.12577 10.0467 7.391 9.92886L7.39104 9.92884L22.797 3.08286C22.8731 3.04907 22.9563 3.0348 23.0393 3.04134C23.1223 3.04788 23.2023 3.07503 23.2721 3.12031C23.3419 3.1656 23.3993 3.2276 23.4391 3.30069C23.4789 3.37377 23.4998 3.45564 23.5 3.53886V37.9999Z" fill="#FFE0E0" stroke="#A64D79" />
        </g>
      </svg>,
      title: "For Enterprises",
      description: "Empower your business with Kryptos' enterprise-grade tax solutions. Simplify complex crypto tax reporting and maintain compliance effortlessly.",
      link: "/enterprises",
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 48 44" fill="none">
        <path id="Vector" d="M14.4 10.2778H14.9V9.77778V7.33333C14.9 5.51809 15.6081 3.779 16.8656 2.49818C18.1228 1.21767 19.826 0.5 21.6 0.5H26.4C28.174 0.5 29.8772 1.21767 31.1344 2.49818C32.3919 3.779 33.1 5.51809 33.1 7.33333V9.77778V10.2778H33.6H40.8C42.574 10.2778 44.2772 10.9954 45.5344 12.276C46.7919 13.5568 47.5 15.2959 47.5 17.1111V36.6667C47.5 38.4819 46.7919 40.221 45.5344 41.5018C44.2772 42.7823 42.574 43.5 40.8 43.5H7.2C5.42604 43.5 3.72284 42.7823 2.46561 41.5018C1.20808 40.221 0.5 38.4819 0.5 36.6667V17.1111C0.5 15.2959 1.20808 13.5568 2.46561 12.276C3.72284 10.9954 5.42604 10.2778 7.2 10.2778H14.4ZM28.8 10.2778H29.3V9.77778V7.33333C29.3 6.55535 28.9967 5.80742 28.4538 5.25456C27.9107 4.70138 27.1721 4.38889 26.4 4.38889H21.6C20.8279 4.38889 20.0893 4.70138 19.5462 5.25456C19.0033 5.80742 18.7 6.55535 18.7 7.33333V9.77778V10.2778H19.2H28.8Z" fill="#FFE0E0" stroke="#A64D79" />
      </svg>,
      title: "For Accountants",
      description: "Enhance your accounting services. Our advanced tools empower accountants to manage multiple clients’ crypto taxes with precision and efficiency.",
      link: "/accountants",
    },
  ];

  return (
    <section className=" py-20 mt-[50px] px-4 sm:px-10 font-poppins text-center">
      <h2 className="text-3xl sm:text-5xl font-medium text-black mb-10">
        Curated to cater everyone
      </h2>
      <p className="max-w-2xl mx-auto  text-gray-600 mb-12">
        Kryptos provides tailored tax solutions for everyone, from individual
        investors to enterprises and accountants. Streamline your crypto tax
        needs with precision and ease.
      </p>

      <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((item, index) => (
          <Link to={item.link} key={index} className="h-full group">
            <div className="w-full h-[270px] sm:h-[285px] md:h-[335px] bg-white border border-pink-300 rounded-xl p-4 sm:p-6  flex flex-col justify-between cursor-pointer ">
              {/* transition-colors duration-300 group-hover:bg-gradient-to-tr group-hover:from-[#f4eeeeee] group-hover:to-white */}
              <div>
                <div className="text-2xl flex justify-center items-center text-pink-400 mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-base sm:text-lg mb-4">{item.description}</p>
              </div>
              <div className="w-full flex justify-end mt-auto text-[#808080]">
                <FaArrowRightLong className="text-sm sm:text-lg md:text-lg" />
              </div>

            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CuratedSection;
