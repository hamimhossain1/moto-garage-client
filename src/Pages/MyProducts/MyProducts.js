import React from 'react';
import { Helmet } from 'react-helmet';
import { useLoaderData } from 'react-router-dom';
import myProductImage from '../../Assets/images/my-product-img/my-product-img.png'
import SingleMyProduct from './SingleMyProduct';

const MyProducts = () => {
    const products = useLoaderData()
    // const { name, image, price, originalPrice, location, yearOfUse, sellerName, postTime } = products;
    console.log(products)

    return (
        <div className='w-11/12 lg:w-9/12 mx-auto mb-10'>
            <div className='mt-8 mb-20'>

                {/* react helmet for dynamic title  */}
                <Helmet>
                    <title>Moto Garage/myProduct</title>
                </Helmet>


                <h3 className='text-base-300 uppercase text-2xl font-bold text-center mb-4'>My Product section</h3>
                <img className='w-32 mx-auto' src={myProductImage} alt="" />

            </div>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>
            {
                products.map(product => <SingleMyProduct
                key={product._id}
                product={product}
                ></SingleMyProduct>)
            }
            </div>
        </div>
    );
};

export default MyProducts;