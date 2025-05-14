import React from "react";
import MainLayout from "../components/MainLayout";

export default function Boissons() {
  return (
    <MainLayout>
      <h2 className="text-2xl font-bold my-6 text-center text-red-500">
        Nos Boissons Rafraîchissantes 🥤
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6">
        <div className="bg-white p-4 rounded-xl shadow">
          <h3 className="text-lg font-semibold text-gray-800">Coca-Cola</h3>
          <p className="text-gray-600">10 DH</p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow">
          <h3 className="text-lg font-semibold text-gray-800">Fanta Orange</h3>
          <p className="text-gray-600">10 DH</p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow">
          <h3 className="text-lg font-semibold text-gray-800">Eau Minérale</h3>
          <p className="text-gray-600">7 DH</p>
        </div>
      </div>
    </MainLayout>
  );
}
