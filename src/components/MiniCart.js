import React, { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate, useLocation } from "react-router-dom";

export default function MiniCart() {
  const location = useLocation();
  const navigate = useNavigate();
  const { cart, increaseQuantity, decreaseQuantity, justAdded, setJustAdded } =
    useCart();

  const [showToast, setShowToast] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [isVisible, setIsVisible] = useState(true); // 🔁 toggle

  useEffect(() => {
    if (!justAdded) return;

    setShowToast(true);
    setAnimate(true);

    const toastTimer = setTimeout(() => {
      setShowToast(false);
      setJustAdded(false);
    }, 3000);

    const animTimer = setTimeout(() => setAnimate(false), 500);

    return () => {
      clearTimeout(toastTimer);
      clearTimeout(animTimer);
    };
  }, [justAdded, setJustAdded]);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (location.pathname === "/cart") return null;

  const getItemImage = (item) => {
    return item.image || `${process.env.PUBLIC_URL}/emogiesnack.png`;
  };

  return (
    <>
      {/* ✅ Toast Notification */}
      {showToast && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 bg-green-600 text-white px-5 py-3 rounded shadow-lg z-50">
          Produit ajouté au panier !
        </div>
      )}

      {/* ✅ Toggle MiniCart button */}
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="fixed bottom-24 right-4 z-50 bg-green-600 hover:bg-green-700 text-white p-3 rounded-full shadow-lg transition"
        title={isVisible ? "Masquer le panier" : "Afficher le panier"}
      >
        {isVisible ? "⬇️" : "🛒"}
      </button>

      {/* ✅ MiniCart Content */}
      {isVisible && (
        <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg p-4 flex flex-col md:flex-row md:justify-between md:items-center z-40 border-t border-gray-200 space-y-3 md:space-y-0">
          <div className="flex items-center space-x-3 justify-center">
            <div
              className={`relative cursor-pointer ${
                animate ? "animate-bounce" : ""
              }`}
              title="Panier"
            >
              🛒
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </div>
            <div>
              <p className="font-semibold text-gray-700">
                {totalItems} article{totalItems > 1 ? "s" : ""}
              </p>
              <p className="text-gray-500 text-sm">Total : {totalPrice} MAD</p>
            </div>
          </div>

          {/* ✅ Scrollable Cart Items */}
          <div className="flex overflow-x-auto max-h-40 space-x-4 py-2 pr-2 scrollbar-thin scrollbar-thumb-gray-400">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex-shrink-0 w-40 flex items-center space-x-2 border p-2 rounded shadow-sm bg-white"
              >
                <img
                  src={getItemImage(item)}
                  alt={item.name}
                  className="w-12 h-12 object-cover rounded"
                />

                <div>
                  <p className="text-sm font-semibold">{item.name}</p>
                  <p className="text-xs text-gray-500">{item.price} MAD</p>
                  <div className="flex items-center space-x-2 mt-1">
                    <button
                      className="bg-gray-200 px-2 rounded"
                      onClick={() => decreaseQuantity(item.id)}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      className="bg-gray-200 px-2 rounded"
                      onClick={() => increaseQuantity(item.id)}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ✅ View Cart Button */}
          {totalItems > 0 && (
            <div className="flex justify-center md:justify-end w-full md:w-auto">
              <button
                onClick={() => navigate("/cart")}
                className="bg-green-600 text-white px-4 py-2 rounded shadow hover:bg-green-700 transition duration-300 w-full md:w-auto"
              >
                🧺 Voir le panier
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
}
