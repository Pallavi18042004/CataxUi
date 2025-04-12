import economictimes from "../assets/economictimes.png";
import coindesk from "../assets/coindesk.png";
import finanacialexpress from "../assets/finanacialexpress.png";
import outlook from "../assets/outlook.png";
import toi from "../assets/toi.png";


const MediaSection = () => {
  return (
    <section className="bg-gradient-to-r from-[#FED8D8] to-white py-12">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl md:text-5xl font-medium  text-gray-900 mb-6">Media</h2>
        
        <div className="flex flex-wrap justify-center items-center gap-8 px-6">
          <img src={economictimes} alt="Economic Times" className="h-14   object-contain grayscale hover:grayscale-0 transition hover:scale-125" />
          <img src={coindesk} alt="Coindesk" className="h-14 object-contain grayscale hover:grayscale-0 transition hover:scale-125" />
          <img src={finanacialexpress} alt="Financial Express" className="h-14 object-contain grayscale hover:grayscale-0 transition hover:scale-125" />
          <img src={outlook} alt="Outlook" className="h-14 object-contain grayscale hover:grayscale-0 transition hover:scale-125" />
          <img src={toi} alt="TOI" className="h-14 object-contain grayscale hover:grayscale-0 transition hover:scale-125" />
        </div>
      </div>
    </section>
  );
};

export default MediaSection;
