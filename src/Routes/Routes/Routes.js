import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import AboutPage from "../../Pages/Home/AboutPage/AboutPage";
import ContractPage from "../../Pages/Home/ContractPage/ContractPage";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import CustomerFeedback from "../../Pages/Home/CustomerFeedback/CustomerFeedback";
import BestProducts from "../../Pages/Home/BestProducts/BestProducts";
import CategoryProducts from "../../Pages/Home/CategoryProducts/CategoryProducts";
import AddProduct from "../../Pages/AddProduct/AddProduct";
import MyProducts from "../../Pages/MyProducts/MyProducts";
import PrivateRoutes from "../PrivateRoutes";
import CategorySingleProduct from "../../Pages/Home/CategoryProducts/CategorySingleProduct";
import CategoryFirstHome from "../../Pages/Home/CagegoryFirstHome/CategoryFirstHome";
import Dashboard from "../../Pages/Dashboard/Dashboard";
import DashboardLayout from "../../Layout/DashboardLayout";
import Admin from "../../Pages/Admin/Admin";
import Sellers from "../../Pages/Sellers/Sellers";
import Buyers from "../../Pages/Buyers/Buyers";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch(`https://moto-garage-server.vercel.app/category`)
            },
            {
                path: '/home',
                element: <Home></Home>,
            },
            {
                path: '/blog',
                element: <Blog></Blog>,
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>,
            },

            {
                path: '/aboutUs',
                element: <AboutPage></AboutPage>,
            },

            {
                path: '/contract',
                element: <ContractPage></ContractPage>,
            },

            {
                path: '/feedback',
                element: <CustomerFeedback></CustomerFeedback>,
            },
            {
                path: '/bestProducts',
                element: <BestProducts></BestProducts>,
            },
            {
                path: '/categoryProducts/:name',
                element: <PrivateRoutes><CategoryProducts></CategoryProducts></PrivateRoutes>,
                loader: ({ params }) => fetch(`https://moto-garage-server.vercel.app/categoryProducts/${params.name}`)
            },
            
            {
                path: '/categoryFirstHome/:name',
                element: <PrivateRoutes><CategoryFirstHome></CategoryFirstHome></PrivateRoutes>,
                loader: ({ params }) => fetch(`https://moto-garage-server.vercel.app/categoryProducts/${params.name}`)
            }
        ]

    },
    

    {
        path: '/dashboard',
        element: <PrivateRoutes><DashboardLayout></DashboardLayout></PrivateRoutes>,
        children: [
            {
                path: '/dashboard/myProduct',
                element: <MyProducts></MyProducts>, 
            },
            {
                path: '/dashboard',
                element: <MyProducts></MyProducts>, 
            },
            {
                path: '/dashboard/addProduct',
                element: <AddProduct></AddProduct>
            },
            {
                path: '/dashboard/admins',
                element: <Admin></Admin>
            },
            {
                path: '/dashboard/sellers',
                element: <Sellers></Sellers>
            },
            {
                path: '/dashboard/buyers',
                element: <Buyers></Buyers>
            }
            
        ]
    },

    { path: '*', element: <ErrorPage></ErrorPage> }
]);

export default router;