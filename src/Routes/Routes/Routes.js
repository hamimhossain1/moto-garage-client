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

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children:[
            {
                path: '/',
                element: <Home></Home>,
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
        ]

    },
    {path: '*', element: <ErrorPage></ErrorPage>}
]);

export default router;