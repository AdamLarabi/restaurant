import React, { useState } from "react";
import MainLayout from "../components/MainLayout";
import { useCart } from "../context/CartContext";
// import defaultImage from `${process.env.PUBLIC_URL}/assets/emogiesnack.png`;
// import sandwichsImg from "../assets/sandwish.jpg";
// import tacosImg from "../assets/tacos.jpeg";
// import burgersImg from "../assets/Burger.png";
// import platsImg from "../assets/plats.jpg";
// import pizzasImg from "../assets/pizza.jpg";
// import patesImg from "../assets/pates.webp";
// import saladesImg from "../assets/salades.png";
// import menusImg from "../assets/kids.jpg";
// import boissonsImg from "../assets/boissons.png";
// import supplementsImg from "../assets/supplements.jpg";

export default function Cart() {
  // const categoryImages = {
  //   sandwichs: sandwichsImg,
  //   tacos: tacosImg,
  //   burgers: burgersImg,
  //   plats: platsImg,
  //   pizzas: pizzasImg,
  //   pates: patesImg,
  //   salades: saladesImg,
  //   menus: menusImg,
  //   boissons: boissonsImg,
  //   supplements: supplementsImg,
  // };

  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } =
    useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const getItemImage = (item) => {
    return item.image || `${process.env.PUBLIC_URL}/emogiesnack.png`;
  };

  const [confirmItem, setConfirmItem] = useState(null);

  return (
    <MainLayout>
      <h2 className="text-3xl font-extrabold my-8 text-gray-900">
        Votre Panier
      </h2>

      {cart.length === 0 ? (
        <p className="text-center text-gray-500 text-lg mt-20">
          Votre panier est vide 😞
        </p>
      ) : (
        <>
          <div className="space-y-6">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row items-center bg-white rounded-2xl shadow-lg p-4 hover:shadow-xl transition-shadow"
              >
                <img
                  src={getItemImage(item)}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-xl shadow-md"
                />

                <div className="flex-1 sm:ml-6 mt-4 sm:mt-0">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                    {item.name}
                  </h3>
                  <p className="mt-1 text-gray-600 text-base sm:text-lg">
                    Prix unitaire :{" "}
                    <span className="font-medium">{item.price} DH</span>
                  </p>
                  <p className="text-gray-600 mt-1 text-base sm:text-lg">
                    Total :{" "}
                    <span className="font-bold text-green-600">
                      {item.price * item.quantity} DH
                    </span>
                  </p>

                  <div className="flex items-center mt-4 space-x-3">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 transition text-gray-700 text-xl font-bold"
                      aria-label={`Réduire quantité de ${item.name}`}
                    >
                      −
                    </button>
                    <span className="text-lg font-semibold">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 transition text-gray-700 text-xl font-bold"
                      aria-label={`Augmenter quantité de ${item.name}`}
                    >
                      +
                    </button>
                  </div>
                </div>

                <button
                  onClick={() => setConfirmItem(item)}
                  className="mt-6 sm:mt-0 sm:ml-6 text-red-600 hover:text-red-800 font-semibold transition text-base sm:text-lg"
                >
                  Supprimer
                </button>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-green-50 rounded-3xl p-8 text-right shadow-inner">
            <p className="text-gray-700 font-semibold text-base sm:text-lg">
              Articles dans le panier :{" "}
              <span className="text-green-700">{totalItems}</span>
            </p>
            <p className="text-2xl sm:text-3xl font-extrabold text-green-900 mt-2">
              Total à payer : {total} DH
            </p>
          </div>

          <div className="text-right mt-8">
            <button
              onClick={() => alert("Merci pour votre commande !")}
              className="bg-green-700 text-white px-6 sm:px-8 py-3 rounded-full font-bold text-lg shadow-lg hover:bg-green-800 transition"
            >
              Passer la commande
            </button>
          </div>
          {confirmItem && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white p-6 rounded shadow-lg w-80 text-center">
                <p className="text-lg font-semibold mb-4">
                  Supprimer{" "}
                  <span className="text-red-600">{confirmItem.name}</span> du
                  panier ?
                </p>
                <div className="flex justify-center space-x-4">
                  <button
                    onClick={() => {
                      removeFromCart(confirmItem.id);
                      setConfirmItem(null);
                    }}
                    className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                  >
                    Supprimer
                  </button>
                  <button
                    onClick={() => setConfirmItem(null)}
                    className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
                  >
                    Annuler
                  </button>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </MainLayout>
  );
}
