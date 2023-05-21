import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import Logo from "../../assets/logocopy.png";

const Navbar = (props) => {
  return (
    <nav className="nav px-8 md:px-16 bg-white z-20 shadow-md flex justify-between py-2">
      <div className="flex">
        <button className={`text-3xl md:hidden`} onClick={props.toggleDocsMenu}>
          <RxHamburgerMenu />
        </button>
        <Link className="flex items-center gap-2" to={"/"}>
          <img
            style={{ borderRadius: "50%", marginLeft: "1rem" }}
            src={
              Logo
            }
            className="w-12"
          />

          <h1 className="font font-bold text-lg">A TO Z Security</h1>
        </Link>
      </div>
      <ul className="hidden md:flex items-center justify-end  gap-4 md:gap-8 text-md">
        <li className="text-gray-600 hover:text-gray-800 cursor-pointer">
          Docs
        </li>
        <li className="text-gray-600 hover:text-gray-800 cursor-pointer">
          Contact
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
