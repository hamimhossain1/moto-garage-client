import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CategorySingleProduct from './CategorySingleProduct';

const CategoryProducts = () => {
    const categoryProducts = useLoaderData()
    console.log(categoryProducts)
    return (
        <div>
            <h1>This is category Products sections....!</h1>

            {
                categoryProducts.map(product => <CategorySingleProduct
                key={product._id}
                product={product}
                ></CategorySingleProduct>)
            }

        </div>
    );
};

export default CategoryProducts;