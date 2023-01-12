import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { toast } from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
import SingleMyProduct from './SingleMyProduct';


const MyProducts = () => {
    const { user } = useContext(AuthContext)
    const [myProducts, setMyProducts] = useState([])
    // console.log(myProducts)

    useEffect(() => {
        fetch(`https://moto-garage-server.vercel.app/myProducts`)
            .then(res => res.json())
            .then(data => {
                setMyProducts(data)
            })
    }, [])

    const handleDelete = id => {
        const proceed = window.confirm('Do you agree ot delete?');
        console.log(proceed)
        if (proceed) {
            fetch(`https://moto-garage-server.vercel.app/myProducts/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount) {
                        toast.success('Deleted successfully')
                        const remaining = myProducts.filter(myPro => myPro._id !== id)
                        setMyProducts(remaining);
                    }
                })
        }
    }

    return (
        <div>

            {/* react helmet for dynamic title  */}
            <Helmet>
                <title>Moto Garage/myProducts</title>
            </Helmet>

            <div className='w-9/12 mx-auto mb-10 '>
                <h1 className='text-center mt-10 mb-10 uppercase font-bold text-3xl text-base-300'>My products</h1>
                {/* <p className='text-center'>{user.email}</p> */}
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>

                    {
                        myProducts?.map(product => <SingleMyProduct
                            key={product._id}
                            product={product}
                            handleDelete={handleDelete}
                        ></SingleMyProduct>)
                    }
                </div>
            </div>
        </div>
    );
};

export default MyProducts;