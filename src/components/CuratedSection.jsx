import { CiUser } from "react-icons/ci";
import { RiBuilding2Line } from "react-icons/ri";
import { IoMdBriefcase } from "react-icons/io";
import { Link } from "react-router-dom";

const CuratedSection = () => {
  const data = [
    {
      icon: <CiUser />,
      title: "For Individuals",
      description:
        "Maximize your returns with accurate and user-friendly tax reporting. Kryptos makes it easy for individual investors to stay compliant and stress-free.",
      link: "/individuals", 
    },
    {
      icon: <RiBuilding2Line />,
      title: "For Enterprises",
      description:
        "Empower your business with Kryptos' enterprise-grade tax solutions. Simplify complex crypto tax reporting and maintain compliance effortlessly.",
      link: "/enterprises", 
    },
    {
      icon: <IoMdBriefcase />,
      title: "For Accountants",
      description:
        "Enhance your accounting services. Our advanced tools empower accountants to manage multiple clients’ crypto taxes with precision and efficiency.",
      link: "/accountants", 
    },
  ];

  return (
    <section className="bg-gradient-to-r from-[#FED8D88C] to-white py-20 px-4 sm:px-10 font-poppins text-center">
      <h2 className="text-3xl sm:text-4xl font-bold text-black mb-5">
        Curated to cater everyone
      </h2>
      <p className="max-w-2xl mx-auto text-gray-600 mb-12">
        Kryptos provides tailored tax solutions for everyone, from individual
        investors to enterprises and accountants. Streamline your crypto tax
        needs with precision and ease.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {data.map((item, index) => (
          <Link to={item.link} key={index}>
            <div className="bg-white border rounded-xl p-6 shadow-sm hover:shadow-md transition duration-300 flex flex-col justify-between hover:scale-105 cursor-pointer">
              <div className="text-2xl flex justify-center items-center text-pink-400 mb-4">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">{item.description}</p>
              <div className="text-right text-gray-500 text-xl">→</div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CuratedSection;
