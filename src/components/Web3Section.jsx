import { FaPython } from "react-icons/fa";

const leftButtons = [
  "Build a game with Pygame",
  "Build a game with Pygame",
  "Build a game with Pygame",
  "Build an etherium blockchain with solidity",
  "Build an etherium blockchain with solidity",
  "Build an etherium blockchain with solidity",
];

const Web3Section = () => {
  const firstHalf = leftButtons.slice(0, 3);
  const secondHalf = leftButtons.slice(3);

  return (
    <section className=" py-7  px-6 font-sans mb-16">
      <div className="max-w-7xl mx-auto text-center mb-14">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4">
          Trusted by leading web3 investors
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde aspernatur <br />
          quibusdam delectus maxime,
        </p>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">


        <div className="flex flex-col sm:flex-row   gap-4">

          <div className="grid grid-cols-1 gap-4">
            {firstHalf.map((text, index) => (
              <button
                key={index}
                className="flex text-sm sm:text-base items-center py-2 px-3 bg-white text-gray-800 rounded-full shadow border hover:shadow-md transition-all"
              >
                <FaPython className="text-2xl mr-3" />
                <span >{text}</span>
              </button>
            ))}
          </div>


          <div className="grid grid-cols-1 gap-4">
            {secondHalf.map((text, index) => (
              <button
                key={index + 3}
                className="flex text-sm sm:text-base items-center py-3 px-5 bg-white text-gray-800 rounded-full shadow border hover:shadow-md transition-all"
              >
                <FaPython className="text-2xl mr-3" />
                <span>{text}</span>
              </button>
            ))}
          </div>
        </div>


        <div className="max-w-md text-center md:text-left">
          <h3 className="text-3xl sm:text-4xl font-serif mb-4 text-black">
            Learn while you build
          </h3>
          <p className="text-gray-600 mb-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio ipsa aspernatur
            accusantium provident quos! Ducimus quas cumque similique minus doloremque
            numquam alias enim itaque.
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
