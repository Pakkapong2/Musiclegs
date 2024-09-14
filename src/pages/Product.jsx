import React from "react";
import Layout from "../components/Layout";
import GuitarCard from "./GuitarCard";

const Products = () => {
  const guitar = [
    { pic: "yamaha.webp", name: "Yamaha", price: 4500 },
    { pic: "enya.png", name: "Enya", price: 6500 },
    { pic: "gusta.webp", name: "Gusta", price: 50000 },
    { pic: "epiphone.png", name: "Epiphone", price: 4300 },
  ];
  return (
    <Layout>
      <div className="img bg-gray-600 flex justify-center py-5">
        <img className="rounded-full" src="./pic/product-head.jpg" alt="" />
      </div>

      <div className="flex justify-center mt-10 mb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-10">
          {guitar.map((g) => (
            <GuitarCard key={g.name} {...g} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Products;
