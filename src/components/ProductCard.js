import React from "react";

export default function ProductCard({ product, onClick }) {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-2xl shadow hover:shadow-lg transition-all p-4 cursor-pointer"
    >
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-cover rounded-xl mb-3"
      />
      <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
      <p className="text-gray-500 text-sm">{product.description}</p>
      <p className="text-red-500 font-bold mt-2">{product.price} DH</p>
    </div>
  );
}
