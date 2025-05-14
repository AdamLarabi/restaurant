import React from "react";
import MainLayout from "../components/MainLayout";
import CartItem from "../components/CartItem";
import OrderSummary from "../components/OrderSummary";

const fakeItems = [
  {
    id: 1,
    name: "Tacos Poulet",
    options: ["Coca", "Fromage"],
    price: 35,
    quantity: 1,
    image: "/tacos.jpg",
  },
];

export default function Cart() {
  return (
    <MainLayout>
      <h2 className="text-xl font-bold my-6">Votre Panier</h2>
      <div className="space-y-4">
        {fakeItems.map((item) => (
          <CartItem key={item.id} item={item} onRemove={() => {}} />
        ))}
      </div>
      <OrderSummary items={fakeItems} />
    </MainLayout>
  );
}
