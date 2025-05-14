import React, { useState } from "react";
import MainLayout from "../components/MainLayout";
import OptionSelector from "../components/OptionSelector";
import QuantitySelector from "../components/QuantitySelector";

const boissons = [{ id: "coca", name: "Coca-Cola", price: 10 }];
const supplements = [{ id: "fromage", name: "Fromage", price: 5 }];

export default function ProductDetail() {
  const [selectedBoissons, setSelectedBoissons] = useState([]);
  const [selectedSupplements, setSelectedSupplements] = useState([]);
  const [quantity, setQuantity] = useState(1);

  const handleOptionChange = (id, state, setter) => {
    setter((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  return (
    <MainLayout>
      <div className="space-y-6">
        <img
          src="/tacos.jpg"
          className="w-full h-64 object-cover rounded-lg"
          alt="Produit"
        />
        <h2 className="text-2xl font-bold">Tacos Poulet</h2>
        <p className="text-gray-600">
          Un délicieux tacos au poulet avec fromage fondu.
        </p>

        <div>
          <h3 className="font-semibold mb-2">Boissons</h3>
          <OptionSelector
            options={boissons}
            selectedOptions={selectedBoissons}
            onChange={(id) =>
              handleOptionChange(id, selectedBoissons, setSelectedBoissons)
            }
          />
        </div>

        <div>
          <h3 className="font-semibold mb-2">Suppléments</h3>
          <OptionSelector
            options={supplements}
            selectedOptions={selectedSupplements}
            onChange={(id) =>
              handleOptionChange(
                id,
                selectedSupplements,
                setSelectedSupplements
              )
            }
          />
        </div>

        <QuantitySelector quantity={quantity} setQuantity={setQuantity} />

        <button className="w-full bg-red-500 text-white py-3 rounded-xl text-lg mt-4 hover:bg-red-600 transition">
          Ajouter au panier
        </button>
      </div>
    </MainLayout>
  );
}
