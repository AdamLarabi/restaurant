import React from "react";
import MainLayout from "../components/MainLayout";
import { useNavigate } from "react-router-dom";

const plats = [
  {
    id: 1,
    name: "Tacos Poulet Fromage",
    price: "30 MAD",
    image: "/assets/tacos.jpg",
  },
  {
    id: 2,
    name: "Burger Double Steak",
    price: "45 MAD",
    image: "/assets/burger.jpg",
  },
  {
    id: 3,
    name: "Pizza Margherita",
    price: "50 MAD",
    image: "/assets/pizza.jpg",
  },
];

export default function Plats() {
  const navigate = useNavigate();

  return (
    <MainLayout>
      <h2 className="text-2xl font-bold my-6">Nos Plats 🍽️</h2>
      <div className="grid gap-4">
        {plats.map((plat) => (
          <div
            key={plat.id}
            className="p-4 bg-white rounded-xl shadow-md flex items-center space-x-4"
          >
            <img
              src={plat.image}
              alt={plat.name}
              className="w-20 h-20 object-cover rounded-lg"
            />
            <div>
              <h3 className="text-xl font-semibold">{plat.name}</h3>
              <p className="text-gray-500">{plat.price}</p>
            </div>
          </div>
        ))}
      </div>
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
    </MainLayout>
  );
}
