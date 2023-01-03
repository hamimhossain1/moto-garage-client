import React, { useContext } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider';
import AboutPage from '../AboutPage/AboutPage';
import Banner from '../Banner/Banner';
import BestProducts from '../BestProducts/BestProducts';
import ContractPage from '../ContractPage/ContractPage';
import CustomerFeedback from '../CustomerFeedback/CustomerFeedback';

const Home = () => {
    const {name} = useContext(AuthContext)
    return (
        <div>
            <Banner></Banner>
            <AboutPage></AboutPage>
            <BestProducts></BestProducts>
            <CustomerFeedback></CustomerFeedback>
            <ContractPage></ContractPage>
        </div>
    );
};

export default Home;