import pdficon from "/assets/pdficon.svg";

const reports = [
  "Terms & Conditions",
  "White Paper",
  "Business Profile",
  "Privacy Policy",
  "Terms & Conditions",
  "Terms & Conditions",
];

const ReportSection = () => {
  return (
    <section className="bg-gradient-to-r from-[#FED8D8] flex  flex-wrap to-white sm:py-9 md:py-12 px-4 sm:px-6 font-poppins ">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-black mb-8 sm:mb-10">
          All The Reports You Need
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-5 md:gap-6 mb-6">
          {reports.map((report, index) => (
            <button
              key={index}
              className="flex items-center justify-between px-4 py-3 w-[243px] h-[54px]  bg-gradient-to-r from-[#DCECFF] to-[#FFFFFF]
                 text-xs sm:text-base text-gray-800 rounded-md transition-all border border-gray-300 "
            >
              {report}
              <img src={pdficon} alt="PDF" className="w-5 h-5 ml-2" />
            </button>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ReportSection;
