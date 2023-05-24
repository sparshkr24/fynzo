import React, { useState } from "react";

import logo from "../../assets/logo.jpg";
import ham from "../../assets/ham.svg";
import HamburgerMenu from "../HamburgerMenu";

const Navbar = () => {
  const handleRefresh = () => {
    window.location.reload();
  };

  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="flex justify-between md:justify-start items-center border p-3">
        <div className="">
          <img
            onClick={handleRefresh}
            className="mr-10 hover:cursor-pointer hover:scale-110 ease-in-out duration-200"
            src={logo}
            alt="Logo"
            width={140}
          ></img>
        </div>

        {/* hamburger menu start */}
        <button className="block md:hidden mt-2 mr-2" onClick={toggleMenu}>
          <img src={ham} alt="hamburger" width={20} height={20} />
        </button>
        {/* hamburger menu end */}
        <HamburgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
        {/* sidebar content */}

        <div className="mr-10 hidden md:block hover:bg-[#041c44f2] hover:text-white hover:scale-105 ease-in-out duration-200 py-1.5 px-3 rounded-2xl hover:cursor-pointer">Products</div>
        <div className="mr-10 hidden md:block hover:bg-[#041c44f2] hover:text-white hover:scale-105 ease-in-out duration-200 py-1.5 px-3 rounded-2xl hover:cursor-pointer">Blog</div>
        <div className="mr-10 hidden md:block hover:bg-[#041c44f2] hover:text-white hover:scale-105 ease-in-out duration-200 py-1.5 px-3 rounded-2xl hover:cursor-pointer">Partners</div>
        <div className="mr-10 hidden md:block hover:bg-[#041c44f2] hover:text-white hover:scale-105 ease-in-out duration-200 py-1.5 px-3 rounded-2xl hover:cursor-pointer">About</div>
        <div className="hidden md:block hover:bg-[#041c44f2] hover:text-white hover:scale-105 ease-in-out duration-200 py-1.5 px-3 rounded-2xl hover:cursor-pointer">Contact</div>
      </div>
    </>
  );
};

export default Navbar;
