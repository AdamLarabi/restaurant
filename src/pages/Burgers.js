import React from "react";
import MainLayout from "../components/MainLayout";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom"; // Ajout

const burgers = [
  { id: 1, name: "Normal", price: 25, description: "Burger classique" },
  {
    id: 2,
    name: "Cheese burger",
    price: 27,
    description: "Avec fromage fondu",
  },
  {
    id: 3,
    name: "Double cheese",
    price: 29,
    description: "Double portion de fromage",
  },
  { id: 4, name: "Egg burger", price: 29, description: "Avec œuf au plat" },
  { id: 5, name: "Double burger", price: 33, description: "Double viande" },
  {
    id: 6,
    name: "Big burger",
    price: 40,
    description: "Notre spécialité maison",
  },
  {
    id: 7,
    name: "Chicken burger",
    price: 29,
    description: "Poulet croustillant",
  },
  { id: 8, name: "Double chicken", price: 35, description: "Double poulet" },
];

const paninis = [
  { id: 9, name: "Panini Kebda", price: 32 },
  { id: 10, name: "Panini Kefta", price: 26 },
  { id: 11, name: "Panini Dinde", price: 22 },
  { id: 12, name: "Panini Mixte", price: 30 },
  { id: 13, name: "Panini Saucisse", price: 26 },
  { id: 14, name: "Panini Escalope", price: 26 },
  { id: 15, name: "Panini Thon", price: 20 },
  { id: 16, name: "Panini Poulet Grillé", price: 25 },
  { id: 17, name: "Panini Nugget", price: 26 },
];

export default function Burgers() {
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
        Burgers & Paninis 🍔
      </h2>

      <div className="mb-12">
        <h3 className="text-xl font-semibold mb-4">Nos Burgers</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {burgers.map((item) => (
            <ProductCard key={item.id} item={item} onAddToCart={addToCart} />
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">Nos Paninis</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {paninis.map((item) => (
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
