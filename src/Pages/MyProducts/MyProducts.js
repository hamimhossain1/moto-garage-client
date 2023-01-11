import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
import SingleMyProduct from './SingleMyProduct';
// import myProductImage from '../../Assets/images/my-product-img/my-product-img.png'
// import  { AuthContext } from '../../Contexts/AuthProvider';
// import SingleMyProduct from './SingleMyProduct';

const MyProducts = () => {
    const { user } = useContext(AuthContext)
    const [myProducts, setMyProducts] = useState([])
    console.log(myProducts)


    useEffect(() => {
        fetch(`http://localhost:5000/myProductsList?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setMyProducts(data)
            })
    }, [user?.email])

    return (
        <div>
            <div className='w-9/12 mx-auto mb-10 '>
                <h1 className='text-center mt-10 mb-10 uppercase font-bold text-3xl text-base-300'>My products</h1>
                {/* <p className='text-center'>{user.email}</p> */}
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>

                    {
                        myProducts?.map(product => <SingleMyProduct
                            key={product._id}
                            product={product}
                        ></SingleMyProduct>)
                    }
                </div>
            </div>
        </div>
    );
};

export default MyProducts;