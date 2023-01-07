import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { AuthContext } from '../../../Contexts/AuthProvider';
import AboutPage from '../AboutPage/AboutPage';
import Banner from '../Banner/Banner';
import BestProducts from '../BestProducts/BestProducts';
import CategoryHome from '../CategoryHome/CategoryHome';
import ContractPage from '../ContractPage/ContractPage';
import CustomerFeedback from '../CustomerFeedback/CustomerFeedback';

const Home = () => {
    const { name } = useContext(AuthContext)
    return (
        <div>

            {/* making dynamic title by react helmet */}
            {/* <Helmet>
                <title>Moto Garage/Home...........</title>
            </Helmet> */}

            <Banner></Banner>
            <CategoryHome></CategoryHome>
            <AboutPage></AboutPage>
            <BestProducts></BestProducts>
            <CustomerFeedback></CustomerFeedback>
            <ContractPage></ContractPage>
        </div>
    );
};

export default Home;