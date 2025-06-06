import React from "react";
import MainLayout from "../components/MainLayout";
import WhatsAppButton from "../components/WhatsAppButton";
import dish1 from "../assets/slider4.jpg";
import dish2 from "../assets/slider3.jpg";
import dish3 from "../assets/slider2.jpg";
import banner from "../assets/slider1.jpg";
import { useNavigate } from "react-router-dom"; // <-- Ajout

export default function Home() {
  const navigate = useNavigate(); // <-- Ajout

  const dishes = [
    {
      image: dish1,
      name: "Burger Royal",
      description:
        "Un burger croustillant garni de poulet pané, cheddar fondant, salade fraîche et une sauce secrète maison. Une explosion de saveurs à chaque bouchée ! ",
    },
    {
      image: dish2,
      name: "Pizza Supreme",
      description:
        "Une pizza généreuse aux bords dorés, garnie de pepperoni, poivrons frais, oignons et fromage coulant. Un vrai festin pour les amateurs de pizza ! ",
    },
    {
      image: dish3,
      name: "Tchika Sandwich",
      description:
        "Trois étages de pur plaisir : poulet grillé, légumes croquants, bacon croustillant et sauce crémeuse, accompagnés de frites dorées. ",
    },
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="text-center mt-10 px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-red-600 mb-4">
          Bienvenue chez Relish Fast Food !
        </h1>
        <p className="text-gray-700 text-lg mb-6 max-w-2xl mx-auto">
          Commandez vos plats préférés, rapidement et facilement, depuis le
          confort de votre domicile.
        </p>
        <img
          src={banner}
          alt="Banner"
          className="w-full max-w-4xl mx-auto rounded-2xl shadow-xl"
        />
        <div className="flex justify-center">
          <button
            onClick={() => navigate("/categories")}
            className="mt-12 flex items-center justify-center gap-3 bg-gradient-to-r from-green-500 via-green-600 to-green-700 hover:scale-105 hover:shadow-2xl transition-all duration-300 text-white font-bold py-3 px-8 rounded-full shadow-lg animate-pulse"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            Voir toutes les catégories
          </button>
        </div>
      </section>

      <section className="mt-16 px-6">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8">
          Nos Plats Populaires 🍽️
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {dishes.map((dish, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition"
            >
              <img
                src={dish.image}
                alt={dish.name}
                className="w-full h-52 object-cover mb-4 rounded-lg"
              />
              <h3 className="text-xl font-bold text-red-500 mb-2">
                {dish.name}
              </h3>
              <p className="text-gray-600">{dish.description}</p>
            </div>
          ))}
        </div>
      </section>

      <WhatsAppButton phone="212600000000" />
    </MainLayout>
  );
}
