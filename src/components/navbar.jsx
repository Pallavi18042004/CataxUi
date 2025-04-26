

import { useState } from "react";

const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#why-catax", label: "Why Catax?" },
  { href: "#integration", label: "Integration" },
  { href: "#calculate", label: "Calculate" },
  { href: "#pricing", label: "Pricing" },
  { href: "#resources", label: "Resources" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className={`bg-white px-6 py-4 w-full z-10 mt-2 shadow-md ${
        menuOpen ? "border-b-[2px] border-gray-200" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <img
          src="/assets/catexlogo.png"
          alt="Catax Logo"
          className="h-[20px] sm:h-[26.64px] w-auto"
        />

        {/* Hamburger Button */}
        <div className="lg:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="relative z-50 flex h-5 w-7 flex-col items-center justify-between  focus:outline-none"
          >
            <span
              className={`block h-0.5  bg-[#A64D79] transition-transform duration-300 ease-in-out ${
                menuOpen ? "translate-y-[6px] rotate-45 w-6" : "w-full"
              }`}
            />
            <span
              className={`block h-0.5  bg-[#A64D79] transition-all duration-300 ease-in-out ${
                menuOpen ? "opacity-0 " : " w-full"
              }`}
            />
            <span
              className={`block h-0.5 bg-[#A64D79] transition-transform duration-300 ease-in-out ${
                menuOpen ? "-translate-y-[11.5px] -rotate-45 w-6" : " w-full"
              }`}
            />
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8 text-sm font-medium">
          <ul className="flex  space-x-6 mr-14">
            {NAV_LINKS.map(({ href, label }, index) => (
              <li key={index}>
                <a
                  href={href}
                  className={`${
                    label === "Home"
                      ? "text-[#A64D79] pb-1"
                      : "text-gray-700 hover:text-[#A64D79]"
                  }`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center space-x-4">
            <a
              href="#login"
              className="text-gray-700 hover:text-[#A64D79] font-medium text-sm"
            >
              Login
            </a>
            <a
              href="#register"
              className="bg-[#A64D79] text-white px-4 py-2 rounded-full transition text-sm font-medium"
            >
              Register Now
            </a>
          </div>
        </div>
      </div>

   

{menuOpen && (
  <div className="lg:hidden absolute top-[70px] left-0 w-full z-40">
    <ul className="flex flex-col space-y-5 text-sm font-medium text-start p-6 bg-white bg-opacity-60 backdrop-blur-sm mx-4 ">
      {NAV_LINKS.map(({ href, label }, index) => (
        <li key={index}>
          <a
            href={href}
            className={`${
              label === "Home" ? "text-[#A64D79]" : "text-gray-700"
            }`}
          >
            {label}
          </a>
        </li>
      ))}
      <li>
        <a href="#login" className="text-gray-700">
          Login
        </a>
      </li>
      <li className="h-full">
        <a
          href="#register"
          className="bg-[#A64D79] text-white px-4 py-2 rounded-full transition"
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
