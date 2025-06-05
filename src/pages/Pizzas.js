import React from "react";
import MainLayout from "../components/MainLayout";
import { useCart } from "../context/CartContext";

const pizzaSizes = [
  { id: 1, name: "P", price: 0 },
  { id: 2, name: "M", price: 0 },
  { id: 3, name: "G", price: 0 },
];

const pizzaVariants = [
  { id: 1, baseName: "Margarita", prices: [15.0, 20.0, 30.0] },
  { id: 2, baseName: "Chawarma", prices: [25.0, 35.0, 40.0] },
  { id: 3, baseName: "Champignon", prices: [23.0, 26.0, 40.0] },
  { id: 4, baseName: "Poulet", prices: [25.0, 35.0, 40.0] },
  { id: 5, baseName: "Thon", prices: [25.0, 35.0, 40.0] },
  {
    id: 6,
    baseName: "Ness ness (dinde + viande hachée)",
    prices: [30.0, 40.0, 50.0],
  },
  { id: 7, baseName: "Royal", prices: [35.0, 45.0, 60.0] },
  { id: 8, baseName: "4 Saisons", prices: [30.0, 40.0, 55.0] },
  { id: 9, baseName: "Mixte", prices: [30.0, 40.0, 50.0] },
  { id: 10, baseName: "Viande hachée", prices: [30.0, 40.0, 50.0] },
  { id: 11, baseName: "Fruit de mer", prices: [35.0, 45.0, 60.0] },
  { id: 12, baseName: "Végétarienne", prices: [25.0, 35.0, 40.0] },
  { id: 13, baseName: "Dinde fumé", prices: [25.0, 35.0, 40.0] },
  { id: 14, baseName: "4 Fromages", prices: [30.0, 40.0, 50.0] },
];

export default function Pizzas() {
  const { addToCart } = useCart();

  return (
    <MainLayout>
      <h2 className="text-2xl font-bold my-6 text-center text-red-500">
        Nos Pizzas 🍕
      </h2>

      <div className="overflow-x-auto px-4 mb-12">
        <table className="w-full bg-white rounded-lg shadow">
          <thead>
            <tr className="border-b">
              <th className="text-left p-3">Variétés</th>
              {pizzaSizes.map((size) => (
                <th key={size.id} className="p-3 text-center">
                  {size.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {pizzaVariants.map((variant) => (
              <tr key={variant.id} className="border-b hover:bg-gray-50">
                <td className="p-3">
                  <div className="font-medium">{variant.baseName}</div>
                </td>
                {variant.prices.map((price, index) => (
                  <td key={index} className="p-3 text-center">
                    <div className="flex items-center justify-center space-x-2">
                      <span>{price.toFixed(2)} DH</span>
                      <button
                        onClick={() =>
                          addToCart({
                            id: `${variant.id}-${index}`,
                            name: `Pizza ${variant.baseName} (${pizzaSizes[index].name})`,
                            price: price,
                            description: "Pizza maison cuite au feu de bois",
                          })
                        }
                        className="text-xs bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                      >
                        +
                      </button>
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="px-4">
        <h3 className="text-xl font-semibold mb-4 text-center">
          Delicious Cheese
        </h3>
        <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 text-center">
          <p className="text-gray-700">
            Nos pizzas sont préparées avec un mélange de fromages fondants
          </p>
        </div>
      </div>
    </MainLayout>
  );
}
