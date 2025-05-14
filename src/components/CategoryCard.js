import React from "react";

export default function CategoryCard({ category, onClick }) {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-4 cursor-pointer flex items-center space-x-4"
    >
      <img
        src={category.image}
        alt={category.name}
        className="w-16 h-16 object-cover rounded-full" // Image petite et ronde
      />
      <div>
        <h3 className="text-lg font-bold text-gray-800">{category.name}</h3>
        <p className="text-sm text-gray-500">{category.price}</p>
      </div>
    </div>
  );
}
