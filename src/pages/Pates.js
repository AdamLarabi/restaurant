import React from "react";
import MainLayout from "../components/MainLayout";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom"; // Ajout

const patesTypes = [
  { id: 1, name: "Spaghetti/Penne" },
  { id: 2, name: "Tagliatelle" },
];

const patesVariantes = [
  {
    id: 1,
    baseName: "Kefta",
    prices: [35, 40],
    description: "Viande hachée maison",
  },
  {
    id: 2,
    baseName: "Dinde",
    prices: [30, 35],
    description: "Dinde fraîche",
  },
  {
    id: 3,
    baseName: "Mixte",
    prices: [40, 45],
    description: "Combinaison savoureuse",
  },
  {
    id: 4,
    baseName: "Fruit de mer",
    prices: [45, 50],
    description: "Fruits de mer frais",
  },
  {
    id: 5,
    baseName: "Thon",
    prices: [30, 35],
    description: "Thon frais",
  },
];

export default function Pates() {
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
        Nos Pâtes 🍝
      </h2>

      <div className="overflow-x-auto px-4">
        <table className="w-full bg-white rounded-lg shadow">
          <thead>
            <tr className="border-b">
              <th className="text-left p-3">Variété</th>
              {patesTypes.map((type) => (
                <th key={type.id} className="p-3">
                  {type.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {patesVariantes.map((variante) => (
              <tr key={variante.id} className="border-b hover:bg-gray-50">
                <td className="p-3">
                  <div className="font-medium">{variante.baseName}</div>
                  <div className="text-xs text-gray-600">
                    {variante.description}
                  </div>
                </td>
                {variante.prices.map((price, index) => (
                  <td key={index} className="p-3 text-center">
                    <div className="flex items-center justify-center space-x-2">
                      <span>{price} DH</span>
                      <button
                        onClick={() =>
                          addToCart({
                            id: `${variante.id}-${index}`,
                            name: `${variante.baseName} (${patesTypes[index].name})`,
                            price: price,
                            description: variante.description,
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
