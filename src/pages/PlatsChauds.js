import React from "react";
import MainLayout from "../components/MainLayout";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom"; // Ajout

const plats = [
  { id: 1, name: "Pasticcio Kefta", price: 33 },
  { id: 2, name: "Pasticcio Dinde", price: 28 },
  { id: 3, name: "Pasticcio Mixte", price: 37 },
  { id: 4, name: "Pasticcio fruit de mer", price: 40 },
  { id: 5, name: "Pasticcio Chawarma", price: 32 },
  { id: 6, name: "Pasticcio Escalape", price: 32 },
  { id: 7, name: "Pasticcio Nugget", price: 32 },
  { id: 8, name: "Pasticcio Dinde fumé", price: 28 },
];

const gratins = [
  { id: 11, name: "Gratin Dinde", price: 28 },
  { id: 12, name: "Gratin Kefta", price: 33 },
  { id: 13, name: "Gratin Mixte", price: 37 },
  { id: 14, name: "Gratin Fruit de mer", price: 40 },
  { id: 15, name: "Gratin Chawarma", price: 32 },
  { id: 16, name: "Gratin Escalope", price: 32 },
  { id: 17, name: "Gratin Nugget", price: 32 },
  { id: 18, name: "Gratin Dinde fumé", price: 28 },
];

export default function PlatsChauds() {
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
        Plats Chauds 🍛
      </h2>

      <div className="mb-12">
        <h3 className="text-xl font-semibold mb-4">Pasticcios</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {plats.map((item) => (
            <ProductCard key={item.id} item={item} onAddToCart={addToCart} />
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">Gratins</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {gratins.map((item) => (
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
