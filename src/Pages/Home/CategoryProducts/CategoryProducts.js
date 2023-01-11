import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import BookingModal from '../BookingModal/BookingModal';
import CategorySingleProduct from './CategorySingleProduct';

const CategoryProducts = () => {
    const [bookingProduct, setBookingProduct] = useState({});
    const categoryProducts = useLoaderData()
    console.log(categoryProducts)
    return (
        <>
            <div className='w-11/12 lg:w-9/12 mx-auto my-12 text-center'>
                <h1 className='text-center mb-8 text-2xl md:text-3xl uppercase font-bold text-base-300'>category Products section</h1>

                <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 mt-12'>

                    {
                        categoryProducts?.map(product => <CategorySingleProduct
                            key={product._id}
                            product={product}
                            setBookingProduct={setBookingProduct}
                        ></CategorySingleProduct>)
                    }
                </div>

                <Link to='/'><button className='btn btn-warning mx-auto block my-10'>GO BACK</button></Link>


            </div>
            {
                bookingProduct &&
                <BookingModal bookingProduct={bookingProduct}></BookingModal>
            }
        </>
    );
};

export default CategoryProducts;