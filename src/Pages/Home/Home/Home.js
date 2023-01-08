import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';
import AboutPage from '../AboutPage/AboutPage';
import Banner from '../Banner/Banner';
import BestProducts from '../BestProducts/BestProducts';
import CategoryHome from '../CategoryHome/CategoryHome';
import ContractPage from '../ContractPage/ContractPage';
import CustomerFeedback from '../CustomerFeedback/CustomerFeedback';

const Home = () => {
    const { name } = useContext(AuthContext)
    const categorys = useLoaderData()
    console.log(categorys)
    return (
        <div>
            <Banner></Banner>
            
            {/* home page category data  */}
            <div className=' mt-12 mb-14 w-11/12 lg:w-10/12 mx-auto'>
                <h1 className='uppercase text-3xl font-bold text-center mt-16 mb-8'>CAtegory</h1>

                <div className='grid grid-cols-1 lg:grid-cols-3 gap-12'>
                    {
                        categorys?.map(category => <CategoryHome
                            key={category._id}
                            category={category}
                        ></CategoryHome>)
                    }
                </div>
            </div>

            <AboutPage></AboutPage>
            <BestProducts></BestProducts>
            <CustomerFeedback></CustomerFeedback>
            <ContractPage></ContractPage>
        </div>
    );
};

export default Home;