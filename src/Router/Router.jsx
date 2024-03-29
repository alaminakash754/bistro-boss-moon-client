import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import ShowAllProducts from "../Pages/showAllProducts/ShowAllProducts";
import EachProductDetails from "../Pages/showAllProducts/EachProductDetails";
import Login from "../Pages/login/Login";
import SignUp from "../Pages/Shared/signup/SignUp";
import DashBoard from "../Layout/DashBoard";
import AllUsers from "../Pages/Dashboard/Allusers/AllUsers";
import AdminHome from "../Pages/Dashboard/adminHome/AdminHome";
import UserHome from "../Pages/Dashboard/userHome/UserHome";
import Cart from "../Pages/Dashboard/userCart/Cart";
import PrivateRoute from "./PrivateRoute";

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
                path: '/products',
                element: <ShowAllProducts></ShowAllProducts>
            },
            {
                path: '/productDetails/:id',
                element: <EachProductDetails></EachProductDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/products/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            }
        ]
    },
    {
        path: 'dashboard',
        element:<PrivateRoute><DashBoard></DashBoard></PrivateRoute> ,
        children: [
            {
                path:'userHome',
                element:<UserHome></UserHome>
            },
            {
                path: 'cart',
                element:<Cart></Cart>
            },
            {
                path:'adminHome',
                element: <AdminHome></AdminHome>
            },
            {
                path: 'users',
                element: <AllUsers></AllUsers>
            },
        ]
    }
])