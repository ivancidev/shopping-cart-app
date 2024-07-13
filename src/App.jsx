import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Root from "./routes/root"
import ErrorPage from "./routes/error-page"
import Products from "./pages/Products/Products"
import Shopping from "./pages/Shopping"
import ProductsProvider from "./context/ProductsProvider"

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Products />
        },
        {
          path: "/shopping",
          element: <Shopping />
        }
      ]
    }
  ])

  return (
    <ProductsProvider>
      <RouterProvider router={router} />
    </ProductsProvider>
  )
}

export default App
