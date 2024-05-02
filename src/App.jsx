import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Cart, Chekout, HomeLayout, Landing, Login, Orders, Products, Register , Error, About } from "./pages";
import SingleProduct from "./pages/SingleProduct";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      errorElement:<Error/>,
      children: [
        {
          index: true,
          element: <Landing />,
        },
        {
          path: "/products",
          element: <Products />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/product/:id",
          element: <SingleProduct />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/chekout",
          element: <Chekout />,
        },
        {
          path: "/orders",
          element: <Orders />,
        },
      ],
      
    },
    {
    path:"/login",
    errorElement:<Error/>,
    element:<Login/>
    },
    {
      path:"/register",
      errorElement:<Error/>,
      element:<Register/>
      },

  ])
  return <RouterProvider router={routes} />;
}

export default App;
