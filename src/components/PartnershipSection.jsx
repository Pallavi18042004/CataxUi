import { ArrowRight } from "lucide-react";
import coindeskLogo from "/assets/coindesk.png";
import economictimesLogo from "/assets/economictimes.png";
import finanacialexpressLogo from "/assets/finanacialexpress.png";
import outlookLogo from "/assets/outlook.png";
import toiLogo from "/assets/toi.png";

const PartnershipSection = () => {
  const items = [...Array(10)];
  const logos = [coindeskLogo, economictimesLogo, finanacialexpressLogo, outlookLogo, toiLogo];

  return (
    <section className="py-20 px-4 text-center font-sans">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-[24px] sm:text-[48px] md:text-[48px] font-medium text-black">
          Partnership & Integrations
        </h2>
        <p className="text-gray-600 mt-5 mb-10 max-w-2xl mx-auto">
          We've teamed up with industry-leading exchanges, wallets, and platforms to offer <br />
          seamless integrations. Explore the powerful integrations we’ve built for you.
        </p>

        {/* First Row - LEFT */}
        <div className="overflow-hidden w-full">
          <div className="flex w-max animate-slideLeft gap-4">
            {[...logos, ...logos, ...logos].map((logo, i) => (
              <div
                key={`left-${i}`}
                className="h-[96px] w-[218px] rounded-full bg-white border border-gray-300 flex items-center justify-center shadow"
              >
                <img src={logo} alt={`logo-${i}`} className="h-12 object-contain" />
              </div>
            ))}
          </div>
        </div>

        {/* Second Row - RIGHT */}
        <div className="overflow-hidden w-full mt-8">
          <div className="flex w-max animate-slideRight gap-4">
            {[...logos, ...logos, ...logos].slice().reverse().map((logo, i) => (
              <div
                key={`right-${i}`}
                className="h-[96px] w-[218px] rounded-full bg-white border border-gray-300 flex items-center justify-center shadow"
              >
                <img src={logo} alt={`logo-${i}`} className="h-12 object-contain" />
              </div>
            ))}
          </div>
        </div>


        <div className="mt-16">
          <button className="px-7 py-2 text-lg rounded-full border-[#A64D79] text-[#A64D79] border-2 font-semibold hover:bg-pink-50 flex items-center mx-auto">
            See All <ArrowRight className="w-4 h-4 ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default PartnershipSection;