import React from "react";
import heroVideo from "./assets/acceuil.mp4";

const HeroSection = () => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="flex-1 text-center md:text-left mb-10 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Bienvenue à S.O.S Chefs
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8">
            Formations culinaires pour les professionnels et passionnés.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="px-8 py-3 bg-orange-400 text-white text-lg font-semibold rounded hover:bg-orange-600 hover:scale-105 transform transition duration-300 ease-in-out"
            >
              Rejoignez-nous
            </a>
          </div>
        </div>

        <div className="relative">
          <video
            src={heroVideo}
            autoPlay
            loop
            muted
            className="w-full h-auto rounded-lg shadow-lg object-cover"
          />
          <div className="absolute top-0 left-0 right-0 bottom-10 flex items-end justify-center">
            <h1 className="text-4xl text-gray-400 font-bold">S.O.S Chef</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
