import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes, FaHamburger } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const Links = [
    { name: "Accueil", link: "/" },
    { name: "Catégories", link: "/categories" },
    { name: "Panier", link: "/cart" },
  ];

  return (
    <div className="shadow-md w-full top-0 left-0 bg-white fixed z-50">
      <div className="md:flex items-center justify-between py-4 px-7 md:px-10">
        <div className="font-bold text-2xl cursor-pointer flex items-center text-gray-800">
          <span className="text-3xl text-red-500 mr-1 pt-1">
            <FaHamburger />
          </span>
          SnackApp
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl md:hidden cursor-pointer absolute right-8 top-6"
        >
          {open ? <FaTimes /> : <FaBars />}
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-[50%] sm:w-[40%] md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20" : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-lg md:my-0 my-7 group">
              <Link
                to={link.link}
                className="relative text-gray-700 hover:text-red-500 duration-300"
                onClick={() => setOpen(false)}
              >
                {link.name}
                <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-red-500 transition-all duration-500 group-hover:w-full"></span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
