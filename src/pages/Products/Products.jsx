import React, { useContext } from "react";
import CardProduct from "../../components/Card/CardProduct";
import "./styles/products.css";
import { ProductsContext } from "../../context/ProductsContext";

export default function Products() {
  const { products } = useContext(ProductsContext);
  return (
    <section className="products">
      {products.map((product) => (
        <CardProduct key={product.id} {...product} />
      ))}
    </section>
  );
}
