import React, { useState } from "react";

const peoplesData = [
  {
    image: "/assets/photo.png",
    name: "Gaurav Mehta",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod accusantium br laudantium reprehenderit aspernatur exercitationem suscipit vitae rerum assumenda.",
  },
  {
    image: "/assets/photo.png",
    name: "Aman Sharma",
    description:
      "Aman is a passionate developer with a keen interest in blockchain and AI technologies. Aman is a passionate developer with a keen interest in blockchain and AI technologies. loerem Aman is a passionate developer with a keen interest in blockchain and AI technologies. loerem loerem",
  },
  {
    image: "/assets/photo.png",
    name: "Abhay Singh",
    description:
      "Priya specializes in UX/UI design and loves creating user-friendly digital experiences. Aman is a passionate developer with a keen interest in blockchain and AI technologies. loerem",
  },
  {
    image: "/assets/photo.png",
    name: "Ravi Verma",
    description:
      "Ravi is an expert in backend development and cloud infrastructure management.",
  },
];

function Peoples() {
  const [selectedPerson, setSelectedPerson] = useState(peoplesData[0]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <section className="flex items-center justify-center h-screen px-4">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 items-center">
     
        <div className="flex flex-col">
          <div className="flex space-x-10 h-full items-center justify-center">
            
            <div className="flex flex-col space-y-4 mt-12 ">
              {peoplesData.slice(0, 2).map((person, index) => (
                <img
                  key={index}
                  src={person.image}
                  alt={person.name}
                  className={`w-[147px] h-[163px] object-cover rounded-lg border border-[#A64D79] cursor-pointer transition-all duration-300 ${
                    selectedIndex === index ? "border-2 scale-110 " : ""
                  }`}
                  onClick={() => {
                    setSelectedPerson(person);
                    setSelectedIndex(index);
                  }}
                />
              ))}
            </div>

        
            <div className="flex flex-col space-y-4">
              {peoplesData.slice(2, 4).map((person, index) => (
                <img
                  key={index + 2}
                  src={person.image}
                  alt={person.name}
                  className={`w-[147px] h-[163px] object-cover rounded-lg border border-[#A64D79] cursor-pointer transition-all duration-300 ${
                    selectedIndex === index + 2 ? "border-2 scale-110 " : ""
                  }`}
                  onClick={() => {
                    setSelectedPerson(person);
                    setSelectedIndex(index + 2);
                  }}
                />
              ))}
            </div>

          </div>
        </div>

  
        <div className="flex flex-col items-center h-full space-y-6 mt-10 md:mt-0">
          <h2 className="text-5xl font-bold">Peoples</h2>
          <h3 className="text-2xl font-semibold text-[#A64D79]">
            {selectedPerson.name}
          </h3>
          <p className="text-gray-600 sm:w-[477px] w-full text-center text-base">
            {selectedPerson.description}
          </p>
        </div>

      </div>
    </section>
  );
}

export default Peoples;
