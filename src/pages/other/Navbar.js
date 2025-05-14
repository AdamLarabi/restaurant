import React, { useState } from "react";
import logo from "./assets/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const links = [
    { name: "Accueil", link: "#home" },
    {
      name: "Formation",
      link: "#formation",
      submenu: [
        { name: "Management Hôteliers", link: "/management" },
        { name: "Cuisine", link: "/cuisine" },
        { name: "Service Restauration", link: "/service" },
        { name: "Pâtisserie", link: "/patisserie" },
        { name: "Boucherie", link: "/boucherie" },
        { name: "Réception et Gérance", link: "/reception" },
        { name: "Traiteur", link: "/traiteur" },
        { name: "Offre d’emploi", link: "/emploi" },
      ],
    },
    { name: "À propos", link: "#about" },
    { name: "Cours", link: "#courses" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div>
            <a href="/NewPage" className="flex items-center">
              <img src={logo} alt="s.o.s" className="h-16 w-16 mr-2" />
            </a>
          </div>
          <div>
            <div className="md:hidden">
              <button onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? (
                  <FaTimes className="text-2xl text-gray-700" />
                ) : (
                  <FaBars className="text-2xl text-gray-700" />
                )}
              </button>
            </div>

            <ul
              className={`${
                isOpen
                  ? "opacity-100 translate-y-0 max-h-screen"
                  : "opacity-0 translate-y-[-100%] max-h-0"
              } absolute left-0 top-24 w-full pl-8 bg-white z-10 transition-all duration-500 ease-in-out md:flex md:static md:top-auto md:opacity-100 md:max-h-full md:translate-y-0 md:bg-transparent`}
            >
              {links.map((link) => (
                <li
                  key={link.name}
                  className="group relative md:ml-8 text-lg md:my-0 my-7"
                >
                  <a
                    href={link.link}
                    className="relative text-gray-700 hover:text-gray-500 duration-300"
                    onClick={() =>
                      link.submenu ? setIsSubMenuOpen(!isSubMenuOpen) : null
                    }
                  >
                    {link.name}
                    <span className="absolute left-0 bottom-[2px] w-0 h-[2px] bg-gray-700 transition-all duration-500 group-hover:w-full"></span>
                  </a>

                  {link.submenu && (
                    <ul
                      className={`${
                        isSubMenuOpen ? "block" : "hidden"
                      } absolute left-0 top-full mt-2 md:group-hover:block bg-white shadow-lg z-10`}
                    >
                      {link.submenu.map((sublink) => (
                        <li
                          key={sublink.name}
                          className="px-4 py-2 hover:bg-gray-100 whitespace-nowrap z-50"
                        >
                          <a
                            href={sublink.link}
                            className="block text-gray-700 hover:text-gray-500"
                          >
                            {sublink.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
