import React from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "../components/MainLayout";
import CategoryCard from "../components/CategoryCard";
import platsImg from "../assets/plats.jpg";
import boissonsImg from "../assets/boissons.png";
import supplementsImg from "../assets/supplements.jpg";

const fakeCategories = [
  {
    id: 1,
    name: "Plats",
    path: "/plats",
    image: platsImg,
    price: "à partir de 30 MAD",
  },
  {
    id: 2,
    name: "Boissons",
    path: "/boissons",
    image: boissonsImg,
    price: "à partir de 10 MAD",
  },
  {
    id: 3,
    name: "Suppléments",
    path: "/supplements",
    image: supplementsImg,
    price: "à partir de 5 MAD",
  },
];

export default function Categories() {
  const navigate = useNavigate();

  return (
    <MainLayout>
      <h2 className="text-xl font-bold my-6 text-center text-red-600">
        Explorez Nos Catégories 🍽️
      </h2>
      <div className="grid gap-4 px-4 sm:grid-cols-2 md:grid-cols-3">
        {fakeCategories.map((cat) => (
          <CategoryCard
            key={cat.id}
            category={cat}
            onClick={() => navigate(cat.path)}
          />
        ))}
      </div>
    </MainLayout>
  );
}
