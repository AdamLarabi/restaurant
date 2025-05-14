import React, { useState } from "react";
import MainLayout from "../components/MainLayout";

export default function Checkout() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    location: "",
    email: "",
    paymentMode: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = () => {
    console.log("Commande envoyée:", formData);
  };

  return (
    <MainLayout>
      <h2 className="text-xl font-bold my-6">Données de Livraison</h2>
      <div className="space-y-4">
        <input
          className="w-full border p-3 rounded-lg"
          type="text"
          placeholder="Nom"
          name="name"
          onChange={handleChange}
        />
        <input
          className="w-full border p-3 rounded-lg"
          type="tel"
          placeholder="Téléphone"
          name="phone"
          onChange={handleChange}
        />
        <input
          className="w-full border p-3 rounded-lg"
          type="text"
          placeholder="Adresse"
          name="address"
          onChange={handleChange}
        />
        <input
          className="w-full border p-3 rounded-lg"
          type="text"
          placeholder="Localisation"
          name="location"
          onChange={handleChange}
        />
        <input
          className="w-full border p-3 rounded-lg"
          type="email"
          placeholder="Email"
          name="email"
          onChange={handleChange}
        />
        <select
          className="w-full border p-3 rounded-lg"
          name="paymentMode"
          onChange={handleChange}
        >
          <option value="">Mode de paiement</option>
          <option value="cash">Paiement à la livraison</option>
          <option value="online">Paiement en ligne</option>
        </select>
        <button
          className="w-full bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600"
          onClick={handleSubmit}
        >
          Confirmer la commande
        </button>
      </div>
    </MainLayout>
  );
}
