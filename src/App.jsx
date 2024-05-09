import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Cart, Chekout,SingleProduct, HomeLayout, Landing, Login, Orders, Products, Register , Error, About } from "./pages";
import { ErrorElement } from "./components";

import { loader as LandingLoader } from "./pages/Landing";
import {loader as SingleProductLoader} from './pages/SingleProduct'
import {loader as ProductsLoader} from './pages/Products'

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
          errorElement:<ErrorElement></ErrorElement>,
          loader:LandingLoader  
        },
        {
          path: "/products",
          element: <Products />,
          loader:ProductsLoader,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/products/:id",
          element: <SingleProduct/>,
          loader:SingleProductLoader
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
