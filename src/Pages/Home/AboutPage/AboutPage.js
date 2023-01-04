import React from 'react';
import { Helmet } from 'react-helmet';
import AboutImg from '../../../Assets/images/about-img/about-img.jpg'

const AboutPage = () => {
    return (
        <div className='mt-12'>

            {/* making dynamic title by react helmet */}
            <Helmet>
                <title>Moto Garage/About Us</title>
            </Helmet>

            <h1 className='uppercase text-3xl font-bold text-center mt-10 mb-8'>About Us</h1>



            <div className="hero  bg-base-200">
                <div className="hero-content flex-col justify-around md:flex-row-reverse">
                    <img src={AboutImg} className=" rounded-lg hidden md:block shadow-2xl w-2/4" alt='' />
                    <div>
                        <h1 className='text-center  md:text-left text-3xl font-bold text-blue-500'>About Our Company</h1>
                        <p className="py-6 text-center  md:text-left">Customers turn to Moto Garage with all kinds of tuning orders, and thanks to having an experience of what we’ve been able to do in the past and what kind of a salesman we have now we are positive that making any tuning idea of yours come true will be easy for us! In order to get such a result, we combine the highest quality products with cutting-edge technologies and tool just to eventually make your motorcycle stand out uniquely!</p>
                        <button className="mx-auto md:ml-0 md:text-center block btn btn-warning uppercase">Read More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;