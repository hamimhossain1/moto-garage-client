import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import CategorySingleProduct from './CategorySingleProduct';

const CategoryProducts = () => {
    const categoryProducts = useLoaderData()
    console.log(categoryProducts)
    return (
        <div className='w-9/12 mx-auto my-12 text-center'>
            <h1 >This is category Products sections....!</h1>
            <div className='grid grid-cols-3 gap-10 mt-12'>

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