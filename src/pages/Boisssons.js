import React, { useState, useRef } from "react";
import MainLayout from "../components/MainLayout";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom"; // Ajout

import cocaImg from "../assets/COCA.webp";
import fantaImg from "../assets/fanta.webp";
import eauImg from "../assets/sidi-ali.jpg";
import jusImg from "../assets/jus.jpg";
import theImg from "../assets/THE.jpg";
import nescafeImg from "../assets/cafe.png";

const boissons = [
  { id: 1, name: "Coca-Cola", price: 10, image: cocaImg },
  { id: 2, name: "Fanta Orange", price: 10, image: fantaImg },
  { id: 3, name: "Eau Minérale", price: 7, image: eauImg },
  { id: 4, name: "Jus d’Orange Frais", price: 15, image: jusImg },
  { id: 5, name: "Thé à la Menthe", price: 8, image: theImg },
  { id: 6, name: "Nescafé", price: 12, image: nescafeImg },
];

export default function Boissons() {
  const { addToCart } = useCart();
  const [showMessage, setShowMessage] = useState(false);
  const timeoutRef = useRef(null);
  const navigate = useNavigate(); // Ajout

  const handleAddToCart = (boisson) => {
    addToCart(boisson);

    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    setShowMessage(true);

    timeoutRef.current = setTimeout(() => {
      setShowMessage(false);
    }, 1500);
  };

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
        Nos Boissons Rafraîchissantes 🥤
      </h2>

      {showMessage && (
        <div className="fixed top-20 right-1/2 translate-x-1/2 bg-green-600 text-white px-5 py-3 rounded shadow-lg z-50">
          Produit ajouté au panier !
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 px-6">
        {boissons.map((boisson) => (
          <div
            key={boisson.id}
            className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center"
          >
            <img
              src={boisson.image}
              alt={boisson.name}
              className="w-16 h-16 object-cover rounded-full"
            />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                {boisson.name}
              </h3>
              <p className="text-sm text-gray-600">{boisson.price} MAD</p>
            </div>
            <button
              onClick={() => handleAddToCart(boisson)}
              className="ml-auto bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
            >
              +
            </button>
          </div>
        ))}
      </div>
    </MainLayout>
  );
}
