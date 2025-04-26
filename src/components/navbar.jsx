// import { useState } from "react";

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => setMenuOpen(!menuOpen);

//   return (
//     <nav
//       className={`bg-white  px-6 py-4 w-full z-10 mt-2 ${
//         menuOpen && "border-b-[2px]  border-gray-200"
//       } shadow-md`}
//     >
//       <div className="max-w-7xl mx-auto flex items-center justify-between">
//         <img
//           src="/assets/catexlogo.png"
//           alt=""
//           className=" h-[20px]  sm:h-[26.64px] w-auto"
//         />

//         <div className="lg:hidden">
//           <button
//             onClick={toggleMenu}
//             className="relative z-50 flex h-6 w-8 flex-col items-center justify-between rounded focus:outline-none"
//           >
//             <span
//               className={`block h-0.5 w-8 bg-[#A64D79] transition-transform duration-300 ease-in-out ${
//                 menuOpen ? "translate-y-[6px] rotate-45" : ""
//               }`}
//             />
//             <span
//               className={`block h-0.5 w-8 bg-[#A64D79] transition-all duration-300 ease-in-out ${
//                 menuOpen ? "opacity-0" : ""
//               }`}
//             />
//             <span
//               className={`block h-0.5 w-8 bg-[#A64D79] transition-transform duration-300 ease-in-out ${
//                 menuOpen ? "-translate-y-[15.5px] -rotate-45" : ""
//               }`}
//             />
//           </button>
//         </div>

//         <div className="hidden lg:flex items-center space-x-8 text-sm font-medium">
//           <ul className="flex space-x-6 mr-14">
//             <li>
//               <a href="#home" className="text-[#A64D79]   pb-1">
//                 Home
//               </a>
//             </li>
//             <li>
//               <a href="#about" className="text-gray-700 hover:text-[#A64D79]">
//                 About
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#why-catax"
//                 className="text-gray-700 hover:text-[#A64D79]"
//               >
//                 Why Catax?
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#integration"
//                 className="text-gray-700 hover:text-[#A64D79]"
//               >
//                 Integration
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#calculate"
//                 className="text-gray-700 hover:text-[#A64D79]"
//               >
//                 Calculate
//               </a>
//             </li>
//             <li>
//               <a href="#pricing" className="text-gray-700 hover:text-[#A64D79]">
//                 Pricing
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#resources"
//                 className="text-gray-700 hover:text-[#A64D79]"
//               >
//                 Resources
//               </a>
//             </li>
//           </ul>

//           <div className="flex items-center space-x-4 ">
//             <a
//               href="#login"
//               className="text-gray-700 hover:text-[#A64D79] font-medium text-sm"
//             >
//               Login
//             </a>
//             <a
//               href="#register"
//               className="bg-[#A64D79] text-white px-4 py-2 rounded-full  transition text-sm font-medium"
//             >
//               Register Now
//             </a>
//           </div>
//         </div>
//       </div>

//       {menuOpen && (
//         <div className="lg:hidden mt-4">
//           <ul className="flex flex-col space-y-3 text-sm font-medium text-center">
//             <li>
//               <a href="#home" className="text-[#A64D79]">
//                 Home
//               </a>
//             </li>
//             <li>
//               <a href="#about" className="text-gray-700">
//                 About
//               </a>
//             </li>
//             <li>
//               <a href="#integration" className="text-gray-700">
//                 Integration
//               </a>
//             </li>
//             <li>
//               <a href="#calculate" className="text-gray-700">
//                 Calculate
//               </a>
//             </li>
//             <li>
//               <a href="#pricing" className="text-gray-700">
//                 Pricing
//               </a>
//             </li>
//             <li>
//               <a href="#resources" className="text-gray-700">
//                 Resources
//               </a>
//             </li>
//             <li>
//               <a href="#login" className="text-gray-700">
//                 Login
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#register"
//                 className="bg-[#A64D79] text-white px-4 py-2 rounded-full  transition"
//               >
//                 Register Now
//               </a>
//             </li>
//           </ul>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

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
          <ul className="flex space-x-6 mr-14">
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

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden mt-4">
          <ul className="flex flex-col space-y-3 text-sm font-medium text-center">
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
                className="bg-[#A64D79] text-white px-4 py-2   h-full rounded-full transition"
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
