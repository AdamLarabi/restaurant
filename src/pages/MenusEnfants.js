import React from "react";
import MainLayout from "../components/MainLayout";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom"; // Ajout

const menus = [
  {
    id: 1,
    name: "Menu Cheese Burger",
    price: 33,
    description: "Cheese Burger + Frites + Canette",
  },
  {
    id: 2,
    name: "Menu Panini Dinde",
    price: 37,
    description: "Panini Dinde + Frites + Mini Salade",
  },
  {
    id: 3,
    name: "Menu Margherita",
    price: 25,
    description: "Pizza Margherita + Frites + Canette",
  },
  {
    id: 4,
    name: "Menu Salade Mixte",
    price: 35,
    description: "Salade Mixte + Nuggets (6p)",
  },
  {
    id: 5,
    name: "Menu Hot Dog",
    price: 38,
    description: "Hot Dog/Fromage + Canette",
  },
];

export default function MenusEnfants() {
  const { addToCart } = useCart();
  const navigate = useNavigate(); // Ajout

  return (
    <MainLayout>
      {/* Go Back Button */}
      <div className="flex justify-start px-4 mt-6">
        <button
          onClick={() => navigate(-1)}
          className="group flex items-center gap-2 bg-white/60 backdrop-blur-md border border-red-400 text-red-700 font-bold px-6 py-2 rounded-full shadow-lg hover:shadow-red-400/60 hover:bg-green-50 transition-all duration-300 focus:outline-none relative overflow-hidden"
          style={{ boxShadow: "0 4px 24px 0 rgba(197, 48, 34, 0.5)" }}
        >
          <span className="inline-block group-hover:-translate-x-2 group-hover:scale-110 transition-transform duration-300">
            <svg
              className="w-6 h-6 drop-shadow-lg"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </span>
          <span className="tracking-wide group-hover:tracking-widest transition-all duration-300">
            Retour
          </span>
          <span className="absolute inset-0 rounded-full pointer-events-none group-hover:animate-pulse-glow"></span>
        </button>
      </div>

      <h2 className="text-2xl font-bold my-6 text-center text-red-500">
        Menus Enfants 👶
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {menus.map((menu) => (
          <div
            key={menu.id}
            className="bg-white p-4 rounded-lg shadow hover:shadow-md transition"
          >
            <h3 className="font-semibold text-lg">{menu.name}</h3>
            <p className="text-gray-600 text-sm my-2">{menu.description}</p>
            <div className="flex justify-between items-center mt-3">
              <span className="font-bold text-green-600">{menu.price} DH</span>
              <button
                onClick={() => addToCart(menu)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
              >
                Ajouter
              </button>
            </div>
          </div>
        ))}
      </div>
    </MainLayout>
  );
}
