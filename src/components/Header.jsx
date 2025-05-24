import React from "react";
import { BiUserCircle } from "react-icons/bi";
import { LuDiamond } from "react-icons/lu";
import { FiChevronsUp } from "react-icons/fi";
import { FaShoppingCart } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";

const Header = () => {
  // toggle function for mobile menu
  const toggleMobileMenu = () => {
    const mobileMenu = document.getElementById("mobileMenu");

    if (mobileMenu.classList.contains("hidden")) {
      mobileMenu.classList.remove("hidden");
    } else {
      mobileMenu.classList.add("hidden");
    }
  };
  return (
    <header className=" bg-black py-1 px-7 flex justify-between items-center sticky top-0 z-50 w-full border-b-[0.3px] border-[#babaff]">
      {/* Left section */}
      <div className="flex lg:gap-14 gap-4 items-center justify-center">
        <img className="md:w-16 w-12" src="/images/logo.png" alt="Logo-img" />
        <div className="hidden md:flex gap-5 items-center">
          <button className="h-8 px-6 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg font-medium text-nowrap hover:opacity-70 transition-all duration-300">
            Play NOW!
          </button>
          <button className="h-8 px-6 bg-gradient-to-r from-gray-600 to-gray-400 rounded-lg font-medium text-nowrap hover:opacity-70 transition-all duration-300">
            Play NOW!
          </button>
        </div>
      </div>

      {/* Right section */}
      <nav className="hidden md:flex justify-between gap-4 lg:gap-8">
        <a
          href="#"
          className="flex gap-2 relative text-lg hover:text-purple-300 transition-colors duration-300 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-purple-400 after:left-0 after:bottom-0 after:transition-all hover:after:w-full text-nowrap items-center justify-center
          "
        >
          <BiUserCircle size={24} />
          <span>Avatar</span>
        </a>
        <a
          href="#"
          className="flex gap-2 relative text-lg hover:text-purple-300 transition-colors duration-300 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-purple-400 after:left-0 after:bottom-0 after:transition-all hover:after:w-full text-nowrap items-center justify-center
          "
        >
          <LuDiamond size={24} />
          <span>Arena</span>
        </a>
        <a
          href="#"
          className="flex gap-2 relative text-lg hover:text-purple-300 transition-colors duration-300 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-purple-400 after:left-0 after:bottom-0 after:transition-all hover:after:w-full text-nowrap items-center justify-center
          "
        >
          <FiChevronsUp size={24} />
          <span>Beyond</span>
        </a>
        <a
          href="#"
          className="flex gap-2 relative text-lg hover:text-purple-300 transition-colors duration-300 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-purple-400 after:left-0 after:bottom-0 after:transition-all hover:after:w-full text-nowrap items-center justify-center
          "
        >
          <FaShoppingCart size={24} />
          <span>Shop</span>
        </a>
      </nav>
      <button onClick={toggleMobileMenu} className="text-3xl p-2 md:hidden ">
        <IoMdMenu size={24} />
      </button>
      {/* Mobile Menu */}
      <div
        id="mobileMenu"
        className="hidden fixed top-14 right-0 left-0 bg-black p-5 md:hidden"
      >
        <nav className="flex flex-col gap-4 items-center">
          <a
            href="#"
            className="flex gap-2 relative text-lg hover:text-purple-300 transition-colors duration-300 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-purple-400 after:left-0 after:bottom-0 after:transition-all hover:after:w-full text-nowrap items-center justify-center
          "
          >
            <BiUserCircle size={24} />
            <span>Avatar</span>
          </a>
          <a
            href="#"
            className="flex gap-2 relative text-lg hover:text-purple-300 transition-colors duration-300 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-purple-400 after:left-0 after:bottom-0 after:transition-all hover:after:w-full text-nowrap items-center justify-center
          "
          >
            <LuDiamond size={24} />
            <span>Arena</span>
          </a>
          <a
            href="#"
            className="flex gap-2 relative text-lg hover:text-purple-300 transition-colors duration-300 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-purple-400 after:left-0 after:bottom-0 after:transition-all hover:after:w-full text-nowrap items-center justify-center
          "
          >
            <FiChevronsUp size={24} />
            <span>Beyond</span>
          </a>
          <a
            href="#"
            className="flex gap-2 relative text-lg hover:text-purple-300 transition-colors duration-300 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-purple-400 after:left-0 after:bottom-0 after:transition-all hover:after:w-full text-nowrap items-center justify-center
          "
          >
            <FaShoppingCart size={24} />
            <span>Shop</span>
          </a>
        </nav>
        <div className="flex flex-col gap-3 w-full mt-4">
          <button className="bg-purple-600 py-2 rounded">Play Now!</button>
          <button className="bg-gray-500 py-2 rounded">NFT Store</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
