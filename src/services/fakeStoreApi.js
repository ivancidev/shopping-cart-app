const URL = "https://fakestoreapi.com/products";

export const fetchProductsApi = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    return data;
}