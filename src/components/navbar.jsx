// import catexlogo from "../assets/catexlogo.png";

import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="bg-white  px-6 py-4 w-full z-10 mt-2">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
      {/* <img src={catexlogo} alt="Catax Logo" className="h-[26.64px] w-auto" /> */}
<img src="/assets/catexlogo.png" alt="" className="h-[26.64px] w-auto" />


        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-[#A64D79] text-2xl focus:outline-none">
            ☰
          </button>
        </div>

       
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
   
          <ul className="flex space-x-6 mr-14">
            <li><a href="#home" className="text-[#A64D79]   pb-1">Home</a></li>
            <li><a href="#about" className="text-gray-700 hover:text-[#A64D79]">About</a></li>
            <li><a href="#integration" className="text-gray-700 hover:text-[#A64D79]">Integration</a></li>
            <li><a href="#calculate" className="text-gray-700 hover:text-[#A64D79]">Calculate</a></li>
            <li><a href="#pricing" className="text-gray-700 hover:text-[#A64D79]">Pricing</a></li>
            <li><a href="#resources" className="text-gray-700 hover:text-[#A64D79]">Resources</a></li>
          </ul>

       
          <div className="flex items-center space-x-4 ">
            <a href="#login" className="text-gray-700 hover:text-[#A64D79] font-medium text-sm">Login</a>
            <a
              href="#register"
              className="bg-[#A64D79] text-white px-4 py-2 rounded-full  transition text-sm font-medium"
            >
              Register Now
            </a>
          </div>
        </div>
      </div>

      
      {menuOpen && (
        <div className="md:hidden mt-4">
          <ul className="flex flex-col space-y-3 text-sm font-medium text-center">
            <li><a href="#home" className="text-[#A64D79]">Home</a></li>
            <li><a href="#about" className="text-gray-700">About</a></li>
            <li><a href="#integration" className="text-gray-700">Integration</a></li>
            <li><a href="#calculate" className="text-gray-700">Calculate</a></li>
            <li><a href="#pricing" className="text-gray-700">Pricing</a></li>
            <li><a href="#resources" className="text-gray-700">Resources</a></li>
            <li><a href="#login" className="text-gray-700">Login</a></li>
            <li>
              <a
                href="#register"
                className="bg-[#A64D79] text-white px-4 py-2 rounded-full  transition"
              >
                Register Now
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
