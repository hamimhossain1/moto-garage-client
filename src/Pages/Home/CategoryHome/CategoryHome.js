import React from 'react';
import bmw from '../../../Assets/images/category-home-img/bmw2.jpg'
import dirtBike from '../../../Assets/images/category-home-img/d-bick3.jpg'
import harleyDevidson from '../../../Assets/images/category-home-img/harley-dav2.jpg'

const CategoryHome = () => {
    return (
        <div className=' mt-12 mb-14 w-10/12 mx-auto'>
            <h1 className='uppercase text-3xl font-bold text-center mt-16 mb-8'>CAtegory</h1>


            <div className='grid grid-cols-1 lg:grid-cols-3 gap-12'>

                <div className="hero p-2 rounded-full" style={{ backgroundImage: `url("${bmw}")` }}>
                    <div className="hero-overlay rounded-full bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="">
                            <h1 className="mb-5 uppercase text-5xl font-bold">BMW</h1>
                            <button className="btn btn-warning">Check out</button>
                        </div>
                    </div>
                </div>

                <div className="hero p-2  rounded-full" style={{ backgroundImage: `url("${harleyDevidson}")` }}>
                    <div className="hero-overlay rounded-full bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="">
                            <h1 className="mb-5 text-5xl uppercase font-bold">Harley Davidson</h1>
                            <button className="btn btn-warning">Check out</button>
                        </div>
                    </div>
                </div>

                <div className="hero p-2 rounded-full" style={{ backgroundImage: `url("${dirtBike}")` }}>
                    <div className="hero-overlay rounded-full bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="">
                            <h1 className="mb-5 uppercase text-5xl font-bold">Dirt Bikes</h1>
                            <button className="btn btn-warning">Check out</button>
                        </div>
                    </div>
                </div>

                

            </div>

        </div>
    );
};

export default CategoryHome;