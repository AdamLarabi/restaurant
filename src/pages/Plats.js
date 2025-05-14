import React from "react";
import MainLayout from "../components/MainLayout";

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
    </MainLayout>
  );
}
