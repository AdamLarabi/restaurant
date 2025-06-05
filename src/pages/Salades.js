import React from "react";
import MainLayout from "../components/MainLayout";
import { useCart } from "../context/CartContext";

const salades = [
  {
    id: 1,
    name: "Salade Niçoise",
    price: 20,
    description: "Thon, œuf, tomate, olives",
  },
  {
    id: 2,
    name: "Salade Mexicaine",
    price: 20,
    description: "Maïs, avocat, poulet épicé",
  },
  {
    id: 3,
    name: "Salade César",
    price: 35,
    description: "Poulet grillé, croûtons, sauce césar",
  },
  {
    id: 4,
    name: "Salade Marocaine",
    price: 15,
    description: "Légumes frais, vinaigrette maison",
  },
  {
    id: 5,
    name: "Salade de Pâtes",
    price: 20,
    description: "Pâtes fraîches avec légumes",
  },
  {
    id: 6,
    name: "Salade Pêcheur",
    price: 40,
    description: "Fruits de mer frais",
  },
  {
    id: 7,
    name: "Salade Chef",
    price: 40,
    description: "Notre spécialité maison",
  },
  {
    id: 8,
    name: "Salade Relish",
    price: 50,
    description: "La plus complète de notre carte",
  },
];

export default function Salades() {
  const { addToCart } = useCart();

  return (
    <MainLayout>
      <h2 className="text-2xl font-bold my-6 text-center text-red-500">
        Nos Salades 🥗
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
        {salades.map((salade) => (
          <div
            key={salade.id}
            className="bg-white p-4 rounded-lg shadow hover:shadow-md transition"
          >
            <h3 className="font-semibold">{salade.name}</h3>
            <p className="text-sm text-gray-600 my-1">{salade.description}</p>
            <div className="flex justify-between items-center mt-2">
              <span className="font-bold text-green-600">
                {salade.price} DH
              </span>
              <button
                onClick={() => addToCart(salade)}
                className="bg-red-500 text-white px-2 py-1 rounded text-sm hover:bg-red-600 transition"
              >
                Commander
              </button>
            </div>
          </div>
        ))}
      </div>
    </MainLayout>
  );
}
