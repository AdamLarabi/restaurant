import React, { useEffect, useState } from "react";
import MainLayout from "../components/MainLayout";
import { useNavigate } from "react-router-dom";

export default function InfosClient() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState(""); // Ajout du numéro de téléphone
  const [location, setLocation] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Récupérer la localisation approximative via IP
  useEffect(() => {
    fetch("https://ipapi.co/json/")
      .then((res) => res.json())
      .then((data) => {
        setLocation(
          `${data.city || ""}, ${data.region || ""}, ${data.country_name || ""}`
        );
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/commande-en-cours", { state: { name, phone, location } });
  };

  return (
    <MainLayout>
      <h2 className="text-2xl font-bold my-8 text-center text-green-700">
        Informations Client
      </h2>
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto bg-white rounded-xl shadow p-6 space-y-6"
      >
        <div>
          <label className="block font-semibold mb-2">Votre nom :</label>
          <input
            type="text"
            required
            className="w-full border rounded px-3 py-2"
            value={name}
            onChange={(e) => {
              const val = e.target.value.replace(/[^a-zA-ZÀ-ÿ\s]/g, "");
              setName(val);
            }}
            placeholder="Entrez votre nom"
            pattern="^[a-zA-ZÀ-ÿ\s]+$"
            title="Le nom ne doit contenir que des lettres et des espaces"
          />
        </div>
        <div>
          <label className="block font-semibold mb-2">
            Votre numéro de téléphone :
          </label>
          <input
            type="tel"
            required
            className="w-full border rounded px-3 py-2"
            value={phone}
            onChange={(e) => {
              const val = e.target.value.replace(/\D/g, "").slice(0, 10);
              setPhone(val);
            }}
            placeholder="06XXXXXXXX"
            pattern="^0[5-7][0-9]{8}$"
            title="Numéro marocain valide (ex: 0612345678)"
            maxLength={10}
          />
        </div>
        <div>
          <label className="block font-semibold mb-2">
            Votre localisation :
          </label>
          <input
            type="text"
            required
            className="w-full border rounded px-3 py-2"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Votre ville, région, pays"
            disabled={loading}
          />
          {loading && (
            <p className="text-xs text-gray-400 mt-1">
              Détection automatique de votre localisation...
            </p>
          )}
        </div>
        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-full shadow-lg transition"
          disabled={loading}
        >
          Valider mes informations
        </button>
        <button
          onClick={() => navigate(-1)}
          className="w-full mt-4 bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 rounded-full transition"
        >
          Retour au panier
        </button>
      </form>
    </MainLayout>
  );
}
