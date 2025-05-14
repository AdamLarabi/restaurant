import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-center py-4 mt-16">
      <p className="text-sm text-gray-500">
        &copy; {new Date().getFullYear()} SnackApp. Tous droits réservés.
      </p>
    </footer>
  );
}
