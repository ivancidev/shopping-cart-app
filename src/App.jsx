import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import ErrorPage from "./routes/error-page";
import Products from "./pages/Products/Products";
import Shopping from "./pages/Shopping";
import ProductsProvider from "./context/ProductsProvider";
import ShoppingProvider from "./context/ShoppingProvider";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Products />,
        },
        {
          path: "/shopping",
          element: <Shopping />,
        },
      ],
    },
  ]);

  return (
    <ProductsProvider>
      <ShoppingProvider>
        <RouterProvider router={router} />
      </ShoppingProvider>
    </ProductsProvider>
  );
}

export default App;
