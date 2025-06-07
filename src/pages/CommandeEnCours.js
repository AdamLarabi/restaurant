import React, { useEffect } from "react";
import MainLayout from "../components/MainLayout";
import { useLocation } from "react-router-dom";
import axios from "axios";

export default function CommandeEnCours() {
  const location = useLocation();
  const {
    name,
    phone,
    location: userLocation,
    orderDetails, // tableau [{ name, quantity, price }]
  } = location.state || {};

  useEffect(() => {
    if (name && phone && userLocation && orderDetails?.length) {
      axios
        .post("http://dardablo.wuaze.com/api/orders", {
          client_name: name,
          client_phone: phone,
          location: userLocation,
          order_details: orderDetails,
        })
        .then((res) => {
          console.log("✅ Commande enregistrée :", res.data);
        })
        .catch((err) => {
          console.error(
            "❌ Erreur lors de l'enregistrement :",
            err.response?.data || err.message
          );
        });
    }
  }, [name, phone, userLocation, orderDetails]);

  return (
    <MainLayout>
      <div className="max-w-xl mx-auto bg-white rounded-xl shadow p-8 mt-10 text-center">
        <h2 className="text-2xl font-bold text-green-700 mb-4">
          Commande en cours
        </h2>
        <p className="mb-2">
          Merci <span className="font-semibold">{name}</span> !
        </p>
        <p className="mb-4">Votre commande est en cours de préparation.</p>
        <p className="text-gray-600 mb-1">
          📍 Adresse : <span className="font-semibold">{userLocation}</span>
        </p>
        <p className="text-gray-600">
          📞 Téléphone : <span className="font-semibold">{phone}</span>
        </p>
        <div className="mt-8 animate-pulse text-green-600 text-4xl">⏳</div>
      </div>
    </MainLayout>
  );
}
