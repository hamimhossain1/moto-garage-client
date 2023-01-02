import React from 'react';
import bp1 from '../../../Assets/images/bp-image/bp1.jpg'
import bp2 from '../../../Assets/images/bp-image/bp2.jpg'
import bp3 from '../../../Assets/images/bp-image/bp3.jpg'
import bp4 from '../../../Assets/images/bp-image/bp4.jpg'
import bp5 from '../../../Assets/images/bp-image/bp5.jpg'
import bp6 from '../../../Assets/images/bp-image/bp6.jpg'
import bp7 from '../../../Assets/images/bp-image/bp7.jpg'
import bp8 from '../../../Assets/images/bp-image/bp8.jpg'

const BestProducts = () => {
    return (
        <div>
            <h1 className='uppercase text-3xl font-bold text-center mt-16 mb-10'>Our Best selling Motorcycle</h1>

            <div className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-4  w-11/12 mx-auto'>
                <img className='w-full md:w-96 h-64 mb-8' src={bp1} alt="" />
                <img className='w-full md:w-96 h-64 mb-8' src={bp2} alt="" />
                <img className='w-full md:w-96 h-64 mb-8' src={bp3} alt="" />
                <img className='w-full md:w-96 h-64 mb-8' src={bp4} alt="" />
                <img className='w-full md:w-96 h-64 mb-8' src={bp5} alt="" />
                <img className='w-full md:w-96 h-64 mb-8' src={bp6} alt="" />
                <img className='w-full md:w-96 h-64 mb-8' src={bp7} alt="" />
                <img className='w-full md:w-96 h-64 mb-8' src={bp8} alt="" />
            </div>
        </div>
    );
};

export default BestProducts;