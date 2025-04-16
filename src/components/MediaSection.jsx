import economictimes from "/assets/economictimes.png";
import coindesk from "/assets/coindesk.png";
import finanacialexpress from "/assets/finanacialexpress.png";
import outlook from "/assets/outlook.png";
import toi from "/assets/toi.png";


const MediaSection = () => {
  return (
    <section className=" to-white py-8 sm:py-12">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl md:text-5xl font-medium  text-gray-900 mb-6">Media</h2>

        <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 md:gap-6 lg:gap-8 px-4 sm:px-6 lg:px-8">
          <img src={economictimes} alt="Economic Times" className="h-10 lg:h-14  object-contain grayscale hover:grayscale-0 transition hover:scale-125" />
          <img src={coindesk} alt="Coindesk" className="h-10 lg:h-14  object-contain grayscale hover:grayscale-0 transition hover:scale-125" />
          <img src={finanacialexpress} alt="Financial Express" className="h-10 lg:h-14  object-contain grayscale hover:grayscale-0 transition hover:scale-125" />
          <img src={outlook} alt="Outlook" className="h-10 lg:h-14  object-contain grayscale hover:grayscale-0 transition hover:scale-125" />
          <img src={toi} alt="TOI" className="h-10 lg:h-14  object-contain grayscale hover:grayscale-0 transition hover:scale-125" />
        </div>
      </div>
    </section>
  );
};

export default MediaSection;
