import { FaArrowRight, FaPlay } from "react-icons/fa";

const StepsSection = () => {
  return (
    <section className="bg-white py-16 px-4 font-poppins">
      <div className="max-w-7xl mx-auto">
      
      <div className="text-center mb-10">
  <h2 className="text-3xl md:text-4xl font-bold text-black font-poppins">
    Steps to Calculate Taxes
  </h2>
  <p className="text-gray-600 mt-4 max-w-md mx-auto font-poppins font-medium">
    In just four simple steps, get your crypto tax report ready. Connect, upload,
    review, and download in minutes!
  </p>
</div>


        <div className="flex flex-col md:flex-row gap-9 items-center justify-center w-full max-w-5xl mx-auto">

         
          <div className="flex-1">
            <div className="space-y-6 mb-6">
              <div className="flex items-center space-x-2 text-[#A64D79] font-medium border-b border-gray-300 pb-2">
                <FaArrowRight />
                <span>1. Select exchange/wallet</span>
              </div>
              <div className="text-gray-700 font-medium border-b border-gray-300 pb-2">
                2. Upload transaction history
              </div>
              <div className="text-gray-700 font-medium border-b border-gray-300 pb-2">
                3. Review transactions
              </div>
              <div className="text-gray-700 font-medium border-b border-gray-300 pb-2">
                4. Download Report
              </div>
            </div>

            <p className="text-gray-600 max-w-xs font-medium">
              Choose your exchange or wallet from our wide range of supported integration.
              Our seamless integration makes it easy to get started.
            </p>
          </div>

         
          <div className="flex-1">
            <div className="border border-[#A64D79] rounded-md w-full aspect-video flex items-center justify-center">
              <div className="w-12 h-12 rounded-full border-2 border-gray-400 flex items-center justify-center text-gray-700 text-xl cursor-pointer hover:scale-105 transition">
                <FaPlay />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
