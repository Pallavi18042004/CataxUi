import economictimes from "../assets/economictimes.png";
import coindesk from "../assets/coindesk.png";
import finanacialexpress from "../assets/finanacialexpress.png";
import outlook from "../assets/outlook.png";
import toi from "../assets/toi.png";


const MediaSection = () => {
  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-poppins font-medium  text-black mb-6">Media</h2>
        
        <div className="flex flex-wrap justify-center items-center gap-8 px-4">
          <img src={economictimes} alt="Economic Times" className="h-10 object-contain grayscale hover:grayscale-0 transition-transform transform hover:scale-110 duration-300" />
          <img src={coindesk} alt="Coindesk" className="h-10 object-contain grayscale hover:grayscale-0 transition-transform transform hover:scale-110 duration-300" />
          <img src={finanacialexpress} alt="Financial Express" className="h-10 object-contain grayscale hover:grayscale-0 transition-transform transform hover:scale-110 duration-300"/>
          <img src={outlook} alt="Outlook" className="h-10 object-contain grayscale hover:grayscale-0 transition-transform transform hover:scale-110 duration-300" />
          <img src={toi} alt="TOI" className="h-10 object-contain grayscale hover:grayscale-0 transition-transform transform hover:scale-110 duration-300" />
        </div>
      </div>
    </section>
  );
};

export default MediaSection;
