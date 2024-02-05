import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import TopRated from "../pages/TopRated";
import About from "../pages/About";
import MyCart from "../pages/MyCart";

const routers = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        children:[
            {
            path:'/',
            element:<Home></Home>
            },
            {
            path:'/topRated',
            element:<TopRated></TopRated>
            },
            {
            path:'/about',
            element:<About></About>
            },
            {
            path:'/myCart',
            element:<MyCart></MyCart>
            },
        ]
        
    }

]);

export default routers;