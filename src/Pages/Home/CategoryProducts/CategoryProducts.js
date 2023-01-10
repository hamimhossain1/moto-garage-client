import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import CategorySingleProduct from './CategorySingleProduct';

const CategoryProducts = () => {
    const categoryProducts = useLoaderData()
    console.log(categoryProducts)
    return (
        <div className='w-11/12 lg:w-9/12 mx-auto my-12 text-center'>
            <h1 className='text-center mb-8 text-2xl md:text-3xl uppercase font-bold text-base-300'>category Products section</h1>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 mt-12'>

                {
                    categoryProducts?.map(product => <CategorySingleProduct
                        key={product._id}
                        product={product}
                    ></CategorySingleProduct>)
                }
            </div>

            <Link to='/'><button className='btn btn-warning mx-auto block my-10'>GO BACK</button></Link>


        </div>
    );
};

export default CategoryProducts;