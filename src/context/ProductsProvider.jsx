import React, { useEffect, useState } from "react";
import { ProductsContext } from "./ProductsContext";
import { fetchProductsApi } from "../services/fakeStoreApi";

export default function ProductsProvider({ children }) {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const data = await fetchProductsApi();
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
}
