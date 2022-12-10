import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {

    const [nav, setNav] = useState(false)

  const links = [
    {
      id: 1,
      link: "Home",
    },
    {
      id: 2,
      link: "About",
    },
    {
      id: 3,
      link: "Experience",
    },
    {
      id: 4,
      link: "Contact",
    },
  ];
  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed">
      <div>
        <h1 className="text-5xl font-mono ">Portfolio</h1>
      </div>
      <ul className="md:flex hidden">
        {links.map((link) => (
          <li key={link.id} className="px-4 text-gray-400 cursor-pointer font-medium hover:scale-105 hover:text-white duration-200">
            {link.link}
          </li>
        ))}
      </ul>
      <div onClick={() => setNav(!nav)} className="cursor-pointer z-10 text-gray-300 md:hidden">
        {
            nav ? <FaTimes size={30}></FaTimes> : <FaBars size={30}></FaBars>
        }
      </div>

      {
        nav &&    <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-300">
        {links.map((link) => (
            <li key={link.id} className="px-4 py-4 cursor-pointer">
              {link.link}
            </li>
          ))}
        </ul>
      }

    </div>
  );
};

export default Navbar;
