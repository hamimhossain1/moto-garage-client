import React from 'react';
import { Helmet } from 'react-helmet';
import myProductImage from '../../Assets/images/my-product-img/my-product-img.png'

const MyProducts = () => {
    return (
        <div className='mt-8 mb-20'>

            {/* react helmet for dynamic title  */}
            <Helmet>
                <title>Moto Garage/myProduct</title>
            </Helmet>


            <h3 className='text-base-300 uppercase text-2xl font-bold text-center mb-4'>My Product section</h3>
            <img className='w-32 mx-auto' src={myProductImage} alt="" />

        </div>
    );
};

export default MyProducts;