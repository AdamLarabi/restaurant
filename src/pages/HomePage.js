import React from "react";
import MainLayout from "../components/MainLayout";
import WhatsAppButton from "../components/WhatsAppButton";
import dish1 from "../assets/slider4.jpg";
import dish2 from "../assets/slider3.jpg";
import dish3 from "../assets/slider2.jpg";
import banner from "../assets/slider1.jpg";

export default function Home() {
  const dishes = [
    {
      image: dish1,
      name: "Burger Royal Crunch",
      description:
        "Un burger croustillant garni de poulet pané, cheddar fondant, salade fraîche et une sauce secrète maison. Une explosion de saveurs à chaque bouchée ! ",
    },
    {
      image: dish2,
      name: "Pizza Supreme Deluxe",
      description:
        "Une pizza généreuse aux bords dorés, garnie de pepperoni, poivrons frais, oignons et fromage coulant. Un vrai festin pour les amateurs de pizza ! ",
    },
    {
      image: dish3,
      name: "Club Sandwich Gourmand",
      description:
        "Trois étages de pur plaisir : poulet grillé, légumes croquants, bacon croustillant et sauce crémeuse, accompagnés de frites dorées. ",
    },
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="text-center mt-10 px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-red-600 mb-4">
          Bienvenue chez SnackApp !
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
      </section>

      {/* Featured Dishes */}
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

      {/* WhatsApp CTA */}
      <WhatsAppButton phone="212600000000" />
    </MainLayout>
  );
}
