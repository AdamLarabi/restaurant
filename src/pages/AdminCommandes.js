import React, { useEffect, useState } from "react";
import axios from "axios";

const ADMIN_PASSWORD = "notthathard#123";
const SESSION_KEY = "admin_session_expiry";
const SESSION_DURATION_MS = 4 * 60 * 60 * 1000; // 4 heures en millisecondes

export default function AdminCommandes() {
  // États pour auth
  const [enteredPassword, setEnteredPassword] = useState("");
  const [authorized, setAuthorized] = useState(false);
  const [authError, setAuthError] = useState("");

  // États pour commandes
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState("");

  // Vérifie la session au chargement du composant
  useEffect(() => {
    const expiry = localStorage.getItem(SESSION_KEY);
    if (expiry && new Date(expiry) > new Date()) {
      setAuthorized(true);
      fetchOrders();
    }
  }, []);

  // Fonction pour valider le mot de passe
  const handleSubmit = (e) => {
    e.preventDefault();
    if (enteredPassword === ADMIN_PASSWORD) {
      const expiryDate = new Date(Date.now() + SESSION_DURATION_MS);
      localStorage.setItem(SESSION_KEY, expiryDate.toISOString());
      setAuthorized(true);
      setAuthError("");
      fetchOrders();
    } else {
      setAuthError("Mot de passe incorrect");
    }
  };

  // Déconnexion : supprimer la session
  const handleLogout = () => {
    localStorage.removeItem(SESSION_KEY);
    setAuthorized(false);
    setEnteredPassword("");
  };

  // Récupération des commandes depuis l'API
  const fetchOrders = () => {
    setLoading(true);
    axios
      .get("/api/orders_list.php")
      .then((res) => {
        setOrders(res.data.orders || []);
        setLoading(false);
      })
      .catch(() => {
        setFetchError("❌ Impossible de charger les commandes.");
        setLoading(false);
      });
  };

  // Mise à jour du statut d'une commande
  const handleStatusChange = (id, newStatus) => {
    axios
      .post("/api/order_update_status.php", {
        order_id: id,
        status: newStatus,
      })
      .then(() => {
        setOrders((prev) =>
          prev.map((o) => (o.id === id ? { ...o, status: newStatus } : o))
        );
      })
      .catch(() => {
        alert("❌ Erreur lors de la mise à jour du statut.");
      });
  };

  // Affiche l'écran de connexion si non autorisé
  if (!authorized) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded shadow max-w-sm w-full"
        >
          <h2 className="text-2xl mb-4 text-center font-bold">
            Connexion Admin
          </h2>
          {authError && (
            <p className="text-red-600 mb-4 text-center">{authError}</p>
          )}
          <input
            type="password"
            placeholder="Entrez le mot de passe"
            value={enteredPassword}
            onChange={(e) => setEnteredPassword(e.target.value)}
            className="w-full p-2 border rounded mb-4"
            autoFocus
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Valider
          </button>
        </form>
      </div>
    );
  }

  // Affiche la page admin si autorisé
  return (
    <div className="p-4 max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">📋 Commandes en cours</h1>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Déconnexion
        </button>
      </div>

      {loading ? (
        <div>Chargement des commandes...</div>
      ) : fetchError ? (
        <div className="text-red-600">{fetchError}</div>
      ) : orders.length === 0 ? (
        <p>Aucune commande disponible.</p>
      ) : (
        <div className="space-y-4">
          {orders.map((order) => (
            <div
              key={order.id}
              className="bg-white shadow rounded-xl p-4 space-y-2 border"
            >
              <div className="flex justify-between items-center flex-wrap gap-2">
                <div>
                  <p className="font-semibold text-lg">{order.client_name}</p>
                  <p className="text-sm text-gray-600">{order.client_phone}</p>
                  <p className="text-sm text-gray-600">{order.location}</p>
                </div>
                <select
                  value={order.status}
                  onChange={(e) => handleStatusChange(order.id, e.target.value)}
                  className="border rounded px-2 py-1"
                >
                  <option value="pending">⏳ En attente</option>
                  <option value="preparing">🍳 En préparation</option>
                  <option value="delivered">✅ Livrée</option>
                  <option value="cancelled">❌ Annulée</option>
                </select>
              </div>

              <div className="bg-gray-100 p-2 rounded">
                <p className="font-medium mb-1">🛒 Détails de la commande :</p>
                <ul className="list-disc ml-4 text-sm">
                  {JSON.parse(order.order_details).map((item, index) => (
                    <li key={index}>
                      {item.quantity} × {item.name} — {item.price} DHS
                    </li>
                  ))}
                </ul>
              </div>
              <p className="text-xs text-gray-400">
                Commande #{order.id} - Statut :{" "}
                <span className="uppercase font-semibold">{order.status}</span>
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
