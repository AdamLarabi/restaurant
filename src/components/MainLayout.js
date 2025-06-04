import React from "react";
import Navbar from "./Navbar";
import Footer from "./FooterBottom";
import MiniCart from "./MiniCart";

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 mt-16 px-4 sm:px-6 lg:px-8">{children}</main>

      <Footer />

      {/* Mini panier sticky en bas, en position fixed */}
      <MiniCart />
    </div>
  );
}
