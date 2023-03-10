import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CategoryHome from '../CategoryHome/CategoryHome';

const CategoryFirstHome = () => {
    
    const {data:categorys = []} = useQuery({
        queryKey: ['category'],
        queryFn: () => fetch(`https://moto-garage-server.vercel.app/category`)
        .then(res => res.json())
    })


    return (
        <div>
            {/* home page category data  */}
            <div className=' mt-12 mb-14 w-11/12 lg:w-10/12 mx-auto'>
                <h1 className='uppercase text-3xl font-bold text-center mt-16 mb-8'>CAtegory</h1>

                <div className='grid grid-cols-1 lg:grid-cols-3 gap-12'>
                    {
                        categorys?.map(category => <CategoryHome
                            key={category._id}
                            category={category}
                        ></CategoryHome>)
                    }
                </div>
            </div>
            
        </div>
    );
};

export default CategoryFirstHome;