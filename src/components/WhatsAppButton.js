import React from "react";

export default function WhatsAppButton({ phone }) {
  const link = `https://wa.me/${phone}`;
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-10 right-5 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-all"
    >
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.5 3.5a11.41 11.41 0 0 0-16.15 0C1.73 6.18.9 9.69 2.1 12.83L.5 21.5l8.84-2.37a11.5 11.5 0 0 0 11.16-4.28 11.41 11.41 0 0 0 0-11.35zM12 20a9.27 9.27 0 0 1-4.67-1.27l-.34-.2-5.25 1.4 1.4-5.25-.2-.34a9.26 9.26 0 0 1 1.27-11.53 9.28 9.28 0 0 1 13.1 13.1A9.27 9.27 0 0 1 12 20z" />
      </svg>
    </a>
  );
}
