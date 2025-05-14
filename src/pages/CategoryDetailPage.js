import React from "react";
import MainLayout from "../components/MainLayout";
import ProductCard from "../components/ProductCard";

const products = [
  {
    id: 1,
    name: "Tacos Poulet",
    description: "Tacos avec sauce fromagère",
    image: "/tacos.jpg",
    price: 35,
  },
];

export default function CategoryDetail() {
  return (
    <MainLayout>
      <h2 className="text-xl font-bold my-6">Produits de la catégorie</h2>
      <div className="grid gap-4">
        {products.map((prod) => (
          <ProductCard
            key={prod.id}
            product={prod}
            onClick={() => console.log("Voir détail produit", prod.id)}
          />
        ))}
      </div>
    </MainLayout>
  );
}
