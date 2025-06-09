import React, { useEffect, useState, useRef } from "react";
import MainLayout from "../components/MainLayout";
import { useLocation } from "react-router-dom";
import axios from "axios";

export default function CommandeEnCours() {
  const routerLocation = useLocation();
  const {
    name,
    phone,
    location: userLocation,
    orderDetails,
  } = routerLocation.state || {};

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [isSending, setIsSending] = useState(false);
  const alreadySentRef = useRef(false); // empêche les doubles envois

  useEffect(() => {
    if (
      !alreadySentRef.current &&
      name &&
      phone &&
      userLocation &&
      orderDetails?.length
    ) {
      alreadySentRef.current = true; // bloque les prochains appels
      setIsSending(true);

      axios
        .post("http://restaurant-api-try.mooo.com/api/order_store.php", {
          client_name: name,
          client_phone: phone,
          location: userLocation,
          order_details: orderDetails,
        })
        .then((res) => {
          if (
            res.data?.message?.includes("succès") ||
            res.data?.message?.includes("success")
          ) {
            setSuccess(true);
            localStorage.removeItem("cart");
            localStorage.setItem(
              "client_order",
              JSON.stringify({
                id: res.data.order_id,
                name,
                phone,
                location: userLocation,
              })
            );
          } else {
            setError("❌ La commande n'a pas été enregistrée.");
          }
        })
        .catch((err) => {
          console.error("Erreur:", err);
          setError(
            "❌ Une erreur est survenue lors de l'envoi de la commande."
          );
        });
    } else if (!isSending && !alreadySentRef.current) {
      setError("❌ Données manquantes pour envoyer la commande.");
    }
  }, [name, phone, userLocation, orderDetails, isSending]);

  return (
    <MainLayout>
      <div className="max-w-xl mx-auto bg-white rounded-xl shadow p-8 mt-10 text-center">
        {success ? (
          <>
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
          </>
        ) : error ? (
          <div>
            <h2 className="text-xl font-bold text-red-600 mb-4">Erreur</h2>
            <p className="text-red-500">{error}</p>
          </div>
        ) : (
          <p className="text-gray-600">Envoi de la commande en cours...</p>
        )}
      </div>
    </MainLayout>
  );
}
