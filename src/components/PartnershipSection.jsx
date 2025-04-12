import { ArrowRight } from "lucide-react";

const PartnershipSection = () => {
  return (
    <section className="bg-gradient-to-r from-[#DCECFFCC] to-white py-20 px-6 text-center font-sans h-screen">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4">
          Partnership & Integrations
        </h2>
        <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
          We've teamed up with industry-leading exchanges, wallets, and platforms to offer <br />
          seamless integrations. Explore the powerful integrations we’ve built for you.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-12 justify-center">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="h-[90px] w-[177px]  rounded-full bg-white  border border-gray-300 flex items-center justify-center shadow"
            >
              
            </div>
          ))}
        </div>

        <div className="mt-16">
          <button className="px-7 py-2  text-lg rounded-full  border-[#A64D79] text-[#A64D79] border-2 font-semibold hover:bg-pink-50 flex items-center mx-auto">
            See All <ArrowRight className="w-4 h-4 ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default PartnershipSection;
