import React from "react";
import MainLayout from "../components/MainLayout";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom"; // Ajout de l'import

const sandwichs = [
  { id: 1, name: "Kebda", price: 27, description: "Sandwich foie frais" },
  { id: 2, name: "Kefta", price: 22, description: "Sandwich viande hachée" },
  { id: 3, name: "Dinde", price: 18, description: "Sandwich dinde fraîche" },
  { id: 4, name: "Mixte", price: 25, description: "Combinaison savoureuse" },
  { id: 5, name: "Saucisse", price: 22, description: "Saucisse maison" },
  { id: 6, name: "Escalope", price: 22, description: "Escalope croustillante" },
  { id: 7, name: "Thon", price: 17, description: "Thon frais" },
  { id: 8, name: "Poulet grillé", price: 23, description: "Poulet mariné" },
  {
    id: 9,
    name: "Omelette crevette",
    price: 20,
    description: "Omelette aux crevettes",
  },
  { id: 10, name: "Nugget", price: 22, description: "Nuggets croustillants" },
];

const tchika = [
  { id: 11, name: "Tchika Kebda", price: 32, size: "Standard" },
  { id: 12, name: "Tchika Kefta", price: 28, size: "Standard" },
  { id: 13, name: "Tchika Dinde", price: 25, size: "Standard" },
  { id: 14, name: "Tchika Mixte", price: 30, size: "Standard" },
  { id: 15, name: "Tchika Saucisse", price: 28, size: "Standard" },
  { id: 16, name: "Tchika Escalope", price: 28, size: "Standard" },
  { id: 17, name: "Tchika Nugget", price: 28, size: "Standard" },
  { id: 18, name: "Tchika Poulet grillé", price: 28, size: "Standard" },
];

export default function Sandwichs() {
  const { addToCart } = useCart();
  const navigate = useNavigate(); // Ajout du hook

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
        Nos Sandwichs 🥪
      </h2>

      <div className="mb-12">
        <h3 className="text-xl font-semibold mb-4">Sandwichs Classiques</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {sandwichs.map((item) => (
            <ProductCard key={item.id} item={item} onAddToCart={addToCart} />
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">Tchika</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {tchika.map((item) => (
            <ProductCard key={item.id} item={item} onAddToCart={addToCart} />
          ))}
        </div>
      </div>
    </MainLayout>
  );
}

function ProductCard({ item, onAddToCart }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow hover:shadow-md transition">
      <div className="flex justify-between">
        <div>
          <h4 className="font-medium">{item.name}</h4>
          {item.description && (
            <p className="text-sm text-gray-600">{item.description}</p>
          )}
        </div>
        <span className="font-bold text-green-600">{item.price} DH</span>
      </div>
      <button
        onClick={() => onAddToCart(item)}
        className="mt-2 w-full bg-red-500 text-white py-1 rounded hover:bg-red-600 transition"
      >
        Ajouter
      </button>
    </div>
  );
}
