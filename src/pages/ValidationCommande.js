import React from "react";
import { useCart } from "../context/CartContext";
import MainLayout from "../components/MainLayout";
import { useNavigate } from "react-router-dom";

export default function ValidationCommande() {
  const { cart } = useCart();
  const navigate = useNavigate();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <MainLayout>
      <h2 className="text-2xl font-bold my-8 text-center text-green-700">
        Résumé de votre commande
      </h2>
      <div className="max-w-xl mx-auto bg-white rounded-xl shadow p-6">
        <ul className="mb-6">
          {cart.map((item) => (
            <li
              key={item.id}
              className="flex justify-between items-center border-b py-2"
            >
              <span>
                <span className="font-semibold">{item.name}</span>
                <span className="text-gray-500"> x{item.quantity}</span>
              </span>
              <span className="text-green-700">
                {item.price} DH x {item.quantity} ={" "}
                <span className="font-bold">
                  {item.price * item.quantity} DH
                </span>
              </span>
            </li>
          ))}
        </ul>
        <div className="text-right font-bold text-xl mb-6">
          Montant total : <span className="text-green-800">{total} DH</span>
        </div>
        <button
          onClick={() => navigate("/infos-client")}
          className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-full shadow-lg transition"
        >
          Valider la commande
        </button>
        <button
          onClick={() => navigate(-1)}
          className="w-full mt-4 bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 rounded-full transition"
        >
          Retour au panier
        </button>
      </div>
    </MainLayout>
  );
}
