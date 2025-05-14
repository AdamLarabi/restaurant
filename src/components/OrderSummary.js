import React from "react";

export default function OrderSummary({ items }) {
  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="bg-white shadow-md rounded-xl p-4 mt-4">
      <h3 className="text-lg font-bold mb-3">Résumé de la commande</h3>
      <ul className="divide-y">
        {items.map((item) => (
          <li key={item.id} className="py-2 flex justify-between text-sm">
            <span>
              {item.name} x{item.quantity}
            </span>
            <span>{item.price * item.quantity} DH</span>
          </li>
        ))}
      </ul>
      <div className="mt-4 border-t pt-2 flex justify-between font-bold">
        <span>Total</span>
        <span>{total} DH</span>
      </div>
    </div>
  );
}
