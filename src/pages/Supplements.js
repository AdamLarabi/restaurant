import React from "react";
import MainLayout from "../components/MainLayout";

export default function Supplements() {
  return (
    <MainLayout>
      <h2 className="text-2xl font-bold my-6 text-center text-red-500">
        Suppléments Savoureux 🧀
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6">
        <div className="bg-white p-4 rounded-xl shadow">
          <h3 className="text-lg font-semibold text-gray-800">Fromage</h3>
          <p className="text-gray-600">5 DH</p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow">
          <h3 className="text-lg font-semibold text-gray-800">Sauce Biggy</h3>
          <p className="text-gray-600">4 DH</p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow">
          <h3 className="text-lg font-semibold text-gray-800">Oeuf</h3>
          <p className="text-gray-600">6 DH</p>
        </div>
      </div>
    </MainLayout>
  );
}
