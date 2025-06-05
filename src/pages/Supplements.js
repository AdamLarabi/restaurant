import React from "react";
import MainLayout from "../components/MainLayout";
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
  const { addToCart } = useCart();

  return (
    <MainLayout>
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
