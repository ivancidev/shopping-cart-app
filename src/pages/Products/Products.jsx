import React, { useContext } from "react";
import CardProduct from "../../components/Card/CardProduct";
import "./styles/products.css";
import { ProductsContext } from "../../context/ProductsContext";
import { ShoppingContext } from "../../context/ShoppingContext";

export default function Products() {
  const { products } = useContext(ProductsContext);
  const { addShopping } = useContext(ShoppingContext);
  return (
    <section className="products">
      {products.map((product) => (
        <CardProduct key={product.id} {...product} handleAddToCart={() => addShopping(product)} />
      ))}
    </section>
  );
}
