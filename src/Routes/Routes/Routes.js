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

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children:[
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch(`http://localhost:5000/category`)
            },
            {
                path: '/home',
                element: <Home></Home>,
                loader: () => fetch(`http://localhost:5000/category`)
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
                element: <CategoryProducts></CategoryProducts>,
                // element: <PrivateRoutes><CategoryProducts></CategoryProducts></PrivateRoutes>,
                loader: ({params}) => fetch(`http://localhost:5000/categoryProducts/${params.name}`)
            },
            {
                path: '/addProduct',
                element: <AddProduct></AddProduct>,
            },
            {
                path: '/myProduct',
                element: <MyProducts></MyProducts>,
            },
            // {
            //     path: '/allServices',
            //     element: <PrivateRoutes><CategoryProducts></CategoryProducts></PrivateRoutes>,
            //     loader: ({params}) => fetch(`http://localhost:5000/categoryProducts/${params.name}`)
            // },
            {
                path: '/categoryFirstHome/:name',
                element: <PrivateRoutes><CategoryFirstHome></CategoryFirstHome></PrivateRoutes>,
                loader: ({params}) => fetch(`http://localhost:5000/categoryProducts/${params.name}`)
            }
        ]

    },
    {path: '*', element: <ErrorPage></ErrorPage>}
]);

export default router;