import React from 'react';
import HomeBgImg from '../../../Assets/images/bg-Image/banner-img.jpg'

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen " style={{ backgroundImage: `url(${HomeBgImg})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl text-stone-300 font-bold uppercase">Born to ride</h1>
                        <h1 className="mb-5 text-7xl text-lime-300 font-bold uppercase">Ride to live</h1>
                        <p className='uppercase mb-5'>Being a biker is more than riding a bike. You feel it in your heart and in your soul</p>

                        <button className="btn btn-warning hover:bg-green-300">Get Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;