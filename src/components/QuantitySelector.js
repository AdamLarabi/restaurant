import React from "react";

export default function QuantitySelector({ quantity, setQuantity }) {
  return (
    <div className="flex items-center gap-3 mt-2">
      <button
        onClick={() => setQuantity(Math.max(1, quantity - 1))}
        className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded-full text-xl"
      >
        -
      </button>
      <span className="text-lg font-medium">{quantity}</span>
      <button
        onClick={() => setQuantity(quantity + 1)}
        className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded-full text-xl"
      >
        +
      </button>
    </div>
  );
}
