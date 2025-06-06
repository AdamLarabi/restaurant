import React from "react";
import MainLayout from "../components/MainLayout";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const tacosSizes = [
  { id: 1, name: "M", price: 0 },
  { id: 2, name: "XL", price: 0 },
  { id: 3, name: "XXL", price: 0 },
];

const tacosVariants = [
  { id: 1, baseName: "Dinde", prices: [30.0, 38.0, 48.0] },
  { id: 2, baseName: "Kefta", prices: [34.0, 43.0, 54.0] },
  { id: 3, baseName: "Saucisse", prices: [34.0, 43.0, 55.0] },
  { id: 4, baseName: "Escalope", prices: [32.0, 43.0, 53.0] },
  { id: 5, baseName: "Mixte", prices: [37.0, 48.0, 63.0] },
  { id: 6, baseName: "Chawarma", prices: [37.0, 48.0, 63.0] },
  { id: 7, baseName: "Poulet grillé", prices: [37.0, 48.0, 63.0] },
  { id: 8, baseName: "Nugget", prices: [32.0, 43.0, 53.0] },
];

export default function Tacos() {
  const { addToCart } = useCart();
  const navigate = useNavigate();

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
        Tacos Gratinés 🌯🧀
      </h2>

      <div className="overflow-x-auto px-4">
        <table className="w-full bg-white rounded-lg shadow">
          <thead>
            <tr className="border-b">
              <th className="text-left p-3">Variété</th>
              {tacosSizes.map((size) => (
                <th key={size.id} className="p-3 text-center">
                  {size.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tacosVariants.map((variant) => (
              <tr key={variant.id} className="border-b hover:bg-gray-50">
                <td className="p-3 font-medium">{variant.baseName}</td>
                {variant.prices.map((price, index) => (
                  <td key={index} className="p-3 text-center">
                    <div className="flex items-center justify-center space-x-2">
                      <span>{price.toFixed(2)} DH</span>
                      <button
                        onClick={() =>
                          addToCart({
                            id: `${variant.id}-${index}`,
                            name: `Tacos ${variant.baseName} (${tacosSizes[index].name})`,
                            price: price,
                            description: "Tacos gratiné maison",
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
    </MainLayout>
  );
}
