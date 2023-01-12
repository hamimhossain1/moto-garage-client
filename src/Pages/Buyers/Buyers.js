import React from 'react';
import { Helmet } from 'react-helmet';

const Buyers = () => {
    return (
        <div>

            {/* react helmet for dynamic title  */}
            <Helmet>
                <title>Moto Garage/Buyers</title>
            </Helmet>


            <h1 className='text-center mt-10 mb-10 uppercase font-bold text-3xl text-base-300'>Buyers section</h1>
        </div>
    );
};

export default Buyers;