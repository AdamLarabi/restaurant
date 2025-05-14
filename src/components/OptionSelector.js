import React from "react";

export default function OptionSelector({ options, selectedOptions, onChange }) {
  return (
    <div className="space-y-2">
      {options.map((option) => (
        <label
          key={option.id}
          className="flex items-center gap-3 p-2 border rounded-lg hover:bg-gray-100 transition"
        >
          <input
            type="checkbox"
            checked={selectedOptions.includes(option.id)}
            onChange={() => onChange(option.id)}
            className="w-5 h-5 accent-red-500"
          />
          <span className="text-gray-700">{option.name}</span>
          <span className="ml-auto text-sm text-gray-500">
            +{option.price} DH
          </span>
        </label>
      ))}
    </div>
  );
}
