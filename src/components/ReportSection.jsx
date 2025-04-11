import pdficon from "../assets/pdficon.svg";

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
    <section className="bg-[#FED8D88C] py-12 px-4 sm:px-6 font-poppins">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-black mb-8 sm:mb-10">
          All The Reports You Need
        </h2>

        {/* First Row - 4 buttons */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-6">
          {reports.slice(0, 4).map((report, index) => (
            <button
              key={index}
              className=" flex items-center justify-between px-4 py-3 bg-gradient-to-r from-[#DCECFF] to-[#FFFFFF]
                         text-sm sm:text-base text-gray-800 rounded-md shadow hover:shadow-md transition-all border">
              {report}
              <img src={pdficon} alt="PDF" className="w-5 h-5 ml-2" />
            </button>
          ))}
        </div>

        {/* Second Row - 2 buttons */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          {reports.slice(4).map((report, index) => (
            <button
              key={index + 4}
              className=" flex items-center justify-between px-4 py-3 bg-gradient-to-r from-[#DCECFF] to-[#FFFFFF]
                         text-sm sm:text-base text-gray-800 rounded-md shadow hover:shadow-md transition-all border">
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
