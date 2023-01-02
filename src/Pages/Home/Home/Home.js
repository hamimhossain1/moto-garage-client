import React, { useContext } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider';
import Banner from '../Banner/Banner';
import BestProducts from '../BestProducts/BestProducts';

const Home = () => {
    const {name} = useContext(AuthContext)
    return (
        <div>
            <Banner></Banner>
            <BestProducts></BestProducts>
            
            <p>{name}</p>

            
        </div>
    );
};

export default Home;