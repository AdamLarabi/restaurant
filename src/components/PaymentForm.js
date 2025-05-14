import React from "react";

export default function PaymentForm({ formData, onChange }) {
  return (
    <form className="grid gap-4">
      <input
        type="text"
        placeholder="Nom complet"
        name="name"
        value={formData.name}
        onChange={onChange}
        className="input"
      />
      <input
        type="tel"
        placeholder="Téléphone"
        name="phone"
        value={formData.phone}
        onChange={onChange}
        className="input"
      />
      <input
        type="text"
        placeholder="Adresse"
        name="address"
        value={formData.address}
        onChange={onChange}
        className="input"
      />
      <input
        type="text"
        placeholder="Localisation"
        name="location"
        value={formData.location}
        onChange={onChange}
        className="input"
      />
      <input
        type="email"
        placeholder="Email"
        name="email"
        value={formData.email}
        onChange={onChange}
        className="input"
      />
    </form>
  );
}
