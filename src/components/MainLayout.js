import React from "react";
import Navbar from "./Navbar";
import Footer from "./FooterBottom";

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 mt-16 px-4 sm:px-6 lg:px-8">{children}</main>
      <Footer />
    </div>
  );
}
