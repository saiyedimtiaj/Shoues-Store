import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import AddProduct from "../Pages/AddProduct/AddProduct";
import MyCart from "../Pages/MyCart/MyCart";
import Brand from "../Pages/Brand/Brand";
import Product from "../Pages/Product/Product";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import Update from "../Pages/Update/Update";
import PrivateRoute from "./PrivateRoute";
import Error from "../Pages/Error/Error";


const Routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement:<Error/>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
          loader:()=>fetch('/data/category.json')
        },
        {
          path:'/product',
          element:<PrivateRoute><AddProduct/></PrivateRoute>
        },
        {
          path:'/cart/:email',
          element:<PrivateRoute><MyCart/></PrivateRoute>,
          loader:({params})=>fetch(`https://assingment-10-server-eta.vercel.app/cart/${params.email}`)
        },
        {
          path:'/products/:brand',
          element:<PrivateRoute><Brand/></PrivateRoute>,
          loader:({params})=>fetch(`https://assingment-10-server-eta.vercel.app/products/${params.brand}`)
        },
        {
          path:'/products/:brand/:id',
          element:<PrivateRoute><Product/></PrivateRoute>,
          loader:({params})=>fetch(`https://assingment-10-server-eta.vercel.app/products/${params.brand}/${params.id}`)
        },
        {
          path:'/update/:id',
          element:<PrivateRoute><Update/></PrivateRoute>,
          loader:({params})=>fetch(`https://assingment-10-server-eta.vercel.app/products/${params.brand}/${params.id}`)
        },
        {
          path:'/register',
          element:<Register/>
        },
        {
          path:'/login',
          element:<Login/>
        }
      ],
    },
  ]);

export default Routes;