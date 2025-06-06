import React from "react";

export default function WhatsAppButton({ phone }) {
  const link = `https://wa.me/${phone}`;
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-40 right-4 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-all"
      aria-label="Contactez-nous sur WhatsApp"
    >
      <svg
        className="w-7 h-7"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="16" cy="16" r="16" fill="#25D366" />
        <path
          d="M22.7 9.3A8.6 8.6 0 0 0 9.3 22.7l-1.1 4.1a1 1 0 0 0 1.2 1.2l4.1-1.1A8.6 8.6 0 1 0 22.7 9.3Zm-6.7 13.1a7.1 7.1 0 0 1-3.6-1l-.3-.2-2.2.6.6-2.2-.2-.3a7.1 7.1 0 1 1 5.7 3.1Zm3.9-5.3c-.2-.1-1.2-.6-1.4-.7-.2-.1-.3-.1-.5.1-.1.1-.5.7-.6.8-.1.1-.2.2-.4.1-.2-.1-.8-.3-1.5-1-.6-.6-1.1-1.3-1.2-1.5-.1-.2 0-.3.1-.4.1-.1.2-.2.3-.3.1-.1.1-.2.2-.3 0-.1 0-.2 0-.3 0-.1-.2-.9-.4-1.2-.1-.3-.3-.3-.5-.3h-.4c-.1 0-.3 0-.4.2-.1.1-.6.6-.6 1.5 0 .9.6 1.8.7 1.9.1.1 1.2 2 3 2.7.5.2.9.3 1.2.2.4-.1.7-.5.8-.7.1-.2.1-.4.1-.5 0-.1-.1-.2-.3-.3Z"
          fill="#fff"
        />
      </svg>
    </a>
  );
}
