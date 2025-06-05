import React from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "../components/MainLayout";
import CategoryCard from "../components/CategoryCard";

import sandwichsImg from "../assets/sandwish.jpg";
import tacosImg from "../assets/tacos.jpeg";
import burgersImg from "../assets/Burger.png";
import platsImg from "../assets/plats.jpg";
import pizzasImg from "../assets/pizza.jpg";
import patesImg from "../assets/pates.webp";
import saladesImg from "../assets/salades.png";
import menusImg from "../assets/kids.jpg";
import boissonsImg from "../assets/boissons.png";
import supplementsImg from "../assets/supplements.jpg";

const categories = [
  {
    id: 1,
    name: "Sandwichs & Tchika",
    path: "/sandwichs",
    image: sandwichsImg,
    price: "18-32 DH",
  },
  {
    id: 2,
    name: "Tacos Gratinés",
    path: "/tacos",
    image: tacosImg,
    price: "30-63 DH",
  },
  {
    id: 3,
    name: "Burgers & Panini",
    path: "/burgers",
    image: burgersImg,
    price: "25-40 DH",
  },
  {
    id: 4,
    name: "Gratins & Pasticcio",
    path: "/plats",
    image: platsImg,
    price: "28-60 DH",
  },
  {
    id: 5,
    name: "Pizzas",
    path: "/pizzas",
    image: pizzasImg,
    price: "15-60 DH",
  },
  {
    id: 6,
    name: "Pâtes",
    path: "/pates",
    image: patesImg,
    price: "30-50 DH",
  },
  {
    id: 7,
    name: "Salades",
    path: "/salades",
    image: saladesImg,
    price: "15-50 DH",
  },
  {
    id: 8,
    name: "Menus Enfants",
    path: "/menus",
    image: menusImg,
    price: "25-38 DH",
  },
  {
    id: 9,
    name: "Boissons",
    path: "/boissons",
    image: boissonsImg,
    price: "5-15 DH",
  },
  {
    id: 10,
    name: "Suppléments",
    path: "/supplements",
    image: supplementsImg,
    price: "3-10 DH",
  },
];

export default function Categories() {
  const navigate = useNavigate();

  return (
    <MainLayout>
      <h2 className="text-2xl font-bold my-6 text-center text-red-600">
        Notre Menu Complet
      </h2>
      <div className="grid gap-4 px-4 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((cat) => (
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
