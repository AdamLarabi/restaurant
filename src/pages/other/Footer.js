import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-4">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-between items-center">
          <p>© 2024 S.O.S Chefs. Tous droits réservés.</p>
          <div>
            <p>contactez-nous@soschef.casablanca.ma</p>
            <div className="flex justify-end space-x-4 mt-4">
              <div className="flex justify-between items-center space-x-2">
                <FaFacebook />
                <a href="/NewPae" className="hover:text-gray-400">
                  Facebook
                </a>
              </div>
              <div className="flex justify-between items-center space-x-2">
                <FaInstagram />
                <a href="/" className="hover:text-gray-400">
                  Instagram
                </a>
              </div>
              <div className="flex justify-between items-center space-x-2">
                <FaLinkedin />
                <a href="/" className="hover:text-gray-400">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
