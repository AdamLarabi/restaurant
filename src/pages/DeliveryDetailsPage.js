import React from "react";
import MainLayout from "../components/MainLayout";

const delivery = {
  name: "Ahmed",
  phone: "0600000000",
  address: "Rue Exemple, Ville",
  location: "Lien Google Maps",
  paid: false,
  items: [
    {
      name: "Tacos Viande",
      price: 40,
      quantity: 1,
      image: "/tacos.jpg",
      options: ["Fromage", "Coca"],
    },
  ],
};

export default function DeliveryDetails() {
  return (
    <MainLayout>
      <h2 className="text-xl font-bold my-6">Détails de Livraison</h2>
      <div className="bg-white shadow p-4 rounded-lg space-y-4">
        <p>
          <strong>Nom:</strong> {delivery.name}
        </p>
        <p>
          <strong>Téléphone:</strong> {delivery.phone}
        </p>
        <p>
          <strong>Adresse:</strong> {delivery.address}
        </p>
        <p>
          <strong>Localisation:</strong> {delivery.location}
        </p>
        <p>
          <strong>Payée:</strong> {delivery.paid ? "Oui" : "Non"}
        </p>

        <div>
          <h3 className="text-lg font-semibold">Produits Commandés:</h3>
          {delivery.items.map((item, index) => (
            <div key={index} className="flex items-center gap-4 my-3">
              <img
                src={item.image}
                className="w-16 h-16 rounded-lg"
                alt={item.name}
              />
              <div>
                <p className="font-medium">{item.name}</p>
                <p className="text-sm text-gray-600">
                  {item.options.join(", ")} | Qté: {item.quantity} |{" "}
                  {item.price} DH
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
}
