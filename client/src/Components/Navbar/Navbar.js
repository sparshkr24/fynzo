import React from "react";

import logo from "../../assets/logo.jpg";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-start items-center border p-3">
        <div className="">
          <img className="mr-10" src={logo} alt="Logo" width={140}></img>
        </div>
        <div className="mr-10 hidden md:block">Products</div>
        <div className="mr-10 hidden md:block">Blog</div>
        <div className="mr-10 hidden md:block">Partners</div>
        <div className="mr-10 hidden md:block">About</div>
        <div className="hidden md:block">Contact</div>
      </div>
    </>
  );
};

export default Navbar;
