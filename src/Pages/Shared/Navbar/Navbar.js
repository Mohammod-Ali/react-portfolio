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
    <div className="navbar bg-black text-white">
  <div className="navbar-start">
    <div className="dropdown ">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-gray-800 rounded-box w-52">
        <li><a>Item 1</a></li>
        <li tabIndex={0}>
          <a className="justify-between">
            Parent
            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
          </a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <a className="cursor-pointer font-mono font-bold text-4xl m-3">Porfolio</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Item 1</a></li>
      <li tabIndex={0}>
        <a>
          Parent
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </a>
        <ul className="p-2">
          <li><a>Submenu 1</a></li>
          <li><a>Submenu 2</a></li>
        </ul>
      </li>
      <li><a>Item 3</a></li>
    </ul>
  </div>
  {/* <div className="navbar-end">
    <a className="btn">Get started</a>
  </div> */}
</div>
    // <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed">
    //   <div>
    //     <h1 className="text-5xl font-mono ">Portfolio</h1>
    //   </div>
    //   <ul className="md:flex hidden">
    //     {links.map((link) => (
    //       <li key={link.id} className="px-4 text-gray-400 cursor-pointer font-medium hover:scale-105 hover:text-white duration-200">
    //         {link.link}
    //       </li>
    //     ))}
    //   </ul>
    //   <div onClick={() => setNav(!nav)} className="cursor-pointer z-10 text-gray-300 md:hidden">
    //     {
    //         nav ? <FaTimes size={30}></FaTimes> : <FaBars size={30}></FaBars>
    //     }
    //   </div>

    //   {
    //     nav &&    <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-300">
    //     {links.map((link) => (
    //         <li key={link.id} className="px-4 py-4 cursor-pointer">
    //           {link.link}
    //         </li>
    //       ))}
    //     </ul>
    //   }

    // </div>
  );
};

export default Navbar;
