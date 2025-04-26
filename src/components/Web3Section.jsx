import { FaPython } from "react-icons/fa";

const buttons = [
  "Build a game with Pygame",
  "Build an ethereum blockchain with Solidity",
  "Build a game with Pygame",
  "Build an ethereum blockchain with Solidity",
  "Build a game with Pygame",
  "Build an ethereum blockchain with Solidity",
];

const Web3Section = () => {
  const row1 = buttons.slice(0, 2);
  const row2 = buttons.slice(2, 4);
  const row3 = buttons.slice(4, 6);

  return (
    <section className="py-7 mt-[70px] px-6 font-sans mb-16">
      <div className="max-w-7xl mx-auto text-center mb-14">
        <h2 className="text-[24px] sm:text-[24px] md:text-[48px] font-bold text-black mb-5">
          Trusted by leading web3 investors
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
          aspernatur <br />
          quibusdam delectus maxime,
        </p>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left side with 3 animated rows */}
        <div className="flex flex-col gap-6 w-full md:w-1/2 xl:w-[60%]">
          {/* Row 1 - Slide Left */}
          <div className="overflow-hidden">
            <div className="flex w-max gap-4 animate-slideLeft">
              {[...row1, ...row1].map((text, index) => (
                <button
                  key={`row1-${index}`}
                  className="flex items-center py-2 px-4 bg-white text-gray-800 rounded-full shadow border hover:shadow-md transition-all"
                >
                  <FaPython className="text-2xl mr-3" />
                  <span className="whitespace-nowrap">{text}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Row 2 - Slide Right */}
          <div className="overflow-hidden">
            <div className="flex w-max gap-4 animate-slideRight">
              {[...row2, ...row2].map((text, index) => (
                <button
                  key={`row2-${index}`}
                  className="flex items-center py-2 px-4 bg-white text-gray-800 rounded-full shadow border hover:shadow-md transition-all"
                >
                  <FaPython className="text-2xl mr-3" />
                  <span className="whitespace-nowrap">{text}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Row 3 - Slide Left */}
          <div className="overflow-hidden">
            <div className="flex w-max gap-4 animate-slideLeft">
              {[...row3, ...row3].map((text, index) => (
                <button
                  key={`row3-${index}`}
                  className="flex items-center py-2 px-4 bg-white text-gray-800 rounded-full shadow border hover:shadow-md transition-all"
                >
                  <FaPython className="text-2xl mr-3" />
                  <span className="whitespace-nowrap">{text}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right side content */}
        <div className="max-w-md text-center md:text-left">
          <h3 className="text-3xl sm:text-4xl font-semibold mb-4 text-black">
            Learn while you build
          </h3>
          <p className="text-gray-600 mb-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio ipsa
            aspernatur accusantium provident quos! Ducimus quas cumque similique
            minus doloremque numquam alias enim itaque.
          </p>
          <a href="#" className="text-blue-600 font-medium hover:underline">
            Learn more about Tutorials
          </a>
        </div>
      </div>
    </section>
  );
};

export default Web3Section;
