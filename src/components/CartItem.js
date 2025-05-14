import React from "react";

export default function CartItem({ item, onRemove }) {
  return (
    <div className="flex gap-4 p-3 border-b">
      <img
        src={item.image}
        alt={item.name}
        className="w-20 h-20 object-cover rounded-lg"
      />
      <div className="flex-1">
        <h4 className="font-bold text-gray-800">{item.name}</h4>
        <p className="text-sm text-gray-500">{item.options.join(", ")}</p>
        <p className="text-red-500 font-semibold">{item.price} DH</p>
      </div>
      <button
        onClick={() => onRemove(item.id)}
        className="text-sm text-red-600 hover:underline"
      >
        Supprimer
      </button>
    </div>
  );
}
