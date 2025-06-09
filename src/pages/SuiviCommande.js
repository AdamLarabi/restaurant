import React, { useEffect, useState } from "react";
import MainLayout from "../components/MainLayout";
import axios from "axios";

export default function SuiviCommande() {
  const [order, setOrder] = useState(null);
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [cancelMessage, setCancelMessage] = useState("");
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  useEffect(() => {
    const storedOrder = JSON.parse(localStorage.getItem("client_order"));
    if (storedOrder && storedOrder.id) {
      setOrder(storedOrder);
      fetchStatus(storedOrder.id);
    } else {
      setError("Aucune commande à suivre.");
    }
  }, []);

  const fetchStatus = (orderId) => {
    setLoading(true);
    setCancelMessage("");
    axios
      .get(`/api/order_status.php?order_id=${orderId}`)
      .then((res) => {
        if (res.data && res.data.success) {
          setStatus(res.data.order.status);
          setError("");
        } else {
          setError(res.data.message || "Statut de commande introuvable.");
        }
      })
      .catch(() => setError("Erreur lors de la récupération du statut."))
      .finally(() => setLoading(false));
  };

  const cancelOrder = (orderId) => {
    setLoading(true);
    setCancelMessage("");
    axios
      .post(`/api/cancel_order.php`, { order_id: orderId })
      .then((res) => {
        if (res.data && res.data.success) {
          setStatus("cancelled");
          setCancelMessage("Votre commande a été annulée avec succès.");
          setError("");
        } else {
          setCancelMessage(
            res.data.message || "Impossible d’annuler la commande."
          );
        }
      })
      .catch(() =>
        setCancelMessage("Erreur lors de l’annulation de la commande.")
      )
      .finally(() => {
        setLoading(false);
        setShowConfirmModal(false);
      });
  };

  return (
    <MainLayout>
      <div className="max-w-xl mx-auto bg-white rounded-xl shadow p-6 mt-10 text-center relative">
        {error ? (
          <p className="text-red-500">{error}</p>
        ) : order ? (
          <>
            <h2 className="text-2xl font-bold mb-4">Suivi de votre commande</h2>
            <p className="text-lg mb-2">
              Client : <strong>{order.name}</strong>
            </p>
            <p className="text-sm text-gray-600 mb-2">
              Téléphone : {order.phone}
            </p>
            <p className="text-sm text-gray-600 mb-4">
              Adresse : {order.location}
            </p>
            <p className="text-xl font-semibold mb-4">
              🕒 Statut actuel : {status === "pending" && "⏳ En attente"}
              {status === "preparing" && "🍳 En préparation"}
              {status === "delivered" && "✅ Livrée"}
              {status === "cancelled" && "❌ Annulée"}
              {!["pending", "preparing", "delivered", "cancelled"].includes(
                status
              ) && status}
            </p>

            {cancelMessage && (
              <p
                className={`mb-4 ${
                  status === "cancelled" ? "text-green-600" : "text-red-600"
                }`}
              >
                {cancelMessage}
              </p>
            )}

            <div className="flex justify-center gap-4">
              <button
                onClick={() => fetchStatus(order.id)}
                disabled={loading}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:opacity-50"
              >
                {loading ? "Chargement..." : "Rafraîchir le statut"}
              </button>

              {status !== "delivered" && status !== "cancelled" && (
                <button
                  onClick={() => setShowConfirmModal(true)}
                  disabled={loading}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 disabled:opacity-50"
                >
                  {loading ? "Chargement..." : "Annuler la commande"}
                </button>
              )}
            </div>

            <a
              href={`https://wa.me/2126XXXXXXXX?text=Bonjour, je souhaite suivre ma commande n°${order.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block bg-green-500 text-white px-4 py-2 rounded shadow hover:bg-green-600"
            >
              📲 Contacter via WhatsApp
            </a>

            {/* Modal confirmation */}
            {showConfirmModal && (
              <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
                <div className="bg-white rounded-lg p-6 max-w-sm w-full text-center shadow-lg">
                  <p className="mb-6 text-lg font-semibold">
                    Êtes-vous sûr de vouloir annuler la commande ?
                  </p>
                  <div className="flex justify-center gap-4">
                    <button
                      onClick={() => cancelOrder(order.id)}
                      className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                      disabled={loading}
                    >
                      {loading ? "Annulation..." : "Oui, annuler"}
                    </button>
                    <button
                      onClick={() => setShowConfirmModal(false)}
                      className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
                      disabled={loading}
                    >
                      Non, garder la commande
                    </button>
                  </div>
                </div>
              </div>
            )}
          </>
        ) : (
          <p>Chargement...</p>
        )}
      </div>
    </MainLayout>
  );
}
