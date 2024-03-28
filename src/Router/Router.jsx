import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import ShowAllProducts from "../Pages/showAllProducts/ShowAllProducts";
import EachProductDetails from "../Pages/showAllProducts/EachProductDetails";

 export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path:'/products',
                element: <ShowAllProducts></ShowAllProducts>
            },
            {
                path:'/productDetails/:id',
                element: <EachProductDetails></EachProductDetails>,
                loader: () => fetch('/homeProducts.json')
            }
        ]
    }
])