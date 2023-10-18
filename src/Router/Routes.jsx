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


const Routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
          loader:()=>fetch('http://localhost:5000/products')
        },
        {
          path:'/product',
          element:<AddProduct/>
        },
        {
          path:'/cart',
          element:<MyCart/>
        },
        {
          path:'/brand/:brand',
          element:<Brand/>,
          loader:({params})=>fetch(`http://localhost:5000/products/${params.brand}`)
        },
        {
          path:'/products/:brand/:id',
          element:<Product/>,
          loader:({params})=>fetch(`http://localhost:5000/products/${params.brand}/${params.id}`)
        },
        {
          path:'/update/:id',
          element:<Update/>,
          loader:({params})=>fetch(`http://localhost:5000/products/${params.brand}/${params.id}`)
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