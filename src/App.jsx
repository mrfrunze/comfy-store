import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { About, Cart, Checkout, Error, HomeLayout, Landing, Login, Orders, Products, Register, SingleProduct } from "./pages/index"

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout/>,
    errorElement: <Error/>,
    children: [
      {
        index: true,
        element: <Landing/>
      },
      {
        index: "products",
        element: <Products/>
      },
      {
        index: "products/id",
        element: <SingleProduct/>
      },
      {
        index: "cart",
        element: <Cart/>
      },
      {
        index: "about",
        element: <About/>
      },
      {
        index: "checkout",
        element: <Checkout/>
      },
      {
        index: "orders",
        element: <Orders/>
      },
    ]
  },
  {
    path: "/login",
    element: <Login/>,
    errorElement: <Error/>
  },
  {
    path: "register",
    element: <Register/>,
    errorElement: <Error/>
  }
])

const App = () => {
  return (
    <RouterProvider router={router} />
    
  )
}

export default App