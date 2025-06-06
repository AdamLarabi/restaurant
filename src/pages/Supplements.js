import React from "react";
import MainLayout from "../components/MainLayout";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const supplements = [
  { id: 1, name: "Frites", price: 7, category: "Accompagnement" },
  { id: 2, name: "Escalope", price: 6, category: "Viande" },
  { id: 3, name: "Nugget", price: 3, category: "Viande" },
  { id: 4, name: "Fromage", price: 3, category: "Fromage" },
  { id: 5, name: "Sauce Andalousse", price: 3, category: "Sauce" },
  { id: 6, name: "Sauce Biginé", price: 3, category: "Sauce" },
  { id: 7, name: "Sauce Algérienne", price: 3, category: "Sauce" },
  { id: 8, name: "Raib Fruit Normal", price: 5, category: "Dessert" },
  { id: 9, name: "Raib Fruit Sec", price: 10, category: "Dessert" },
];

export default function Supplements() {
  const navigate = useNavigate();
  const { addToCart } = useCart();

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
        Suppléments & Desserts 🧂
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
        {supplements.map((supp) => (
          <div
            key={supp.id}
            className="bg-white p-3 rounded-lg shadow hover:shadow-md transition flex justify-between items-center"
          >
            <div>
              <h3 className="font-medium">{supp.name}</h3>
              <p className="text-xs text-gray-500">{supp.category}</p>
            </div>
            <div className="flex items-center space-x-2">
              <span className="font-bold text-green-600">{supp.price} DH</span>
              <button
                onClick={() => addToCart(supp)}
                className="bg-red-500 text-white w-6 h-6 flex items-center justify-center rounded-full hover:bg-red-600 transition"
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>
    </MainLayout>
  );
}
