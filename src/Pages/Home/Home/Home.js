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
            <BestProducts></BestProducts>
            <CustomerFeedback></CustomerFeedback>
            <AboutPage></AboutPage>
            <ContractPage></ContractPage>

            
            <p>{name}</p>

            
        </div>
    );
};

export default Home;