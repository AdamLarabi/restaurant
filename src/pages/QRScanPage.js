import React from "react";
import MainLayout from "../components/MainLayout";

export default function QRCodePage() {
  return (
    <MainLayout>
      <h2 className="text-xl font-bold my-6">Scannez le Code</h2>
      <div className="text-center space-y-4">
        <img src="/qr-code.png" alt="QR Code" className="w-48 mx-auto" />
        <p className="text-gray-600">
          Scannez pour consulter notre menu ou installer l’application
        </p>
      </div>
    </MainLayout>
  );
}
