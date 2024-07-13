import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Root from "./routes/root"
import ErrorPage from "./routes/error-page"
import Products from "./pages/Products"
import Shopping from "./pages/Shopping"

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
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
