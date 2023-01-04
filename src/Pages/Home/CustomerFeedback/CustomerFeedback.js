import React from 'react';
import Customer1 from '../../../Assets/images/customer-img/cus1.jpg'
import Customer2 from '../../../Assets/images/customer-img/cus2.jpg'
import Customer3 from '../../../Assets/images/customer-img/cus3.jpg'
import Comma from '../../../Assets/images/customer-img/comma.png'
import { Helmet } from 'react-helmet';
const CustomerFeedback = () => {
    return (
        <div className='w-9/12 mx-auto mb-8'>

            {/* making dynamic title by react helmet */}
      <Helmet>
            <title>Moto Garage/Customer Feedback</title>
        </Helmet>

            <h1 className='uppercase text-3xl font-bold text-center mt-10 mb-10'>Customer Feedback</h1>

            <div className='grid md:grid-cols-3 gap-20'>
                <div>
                    <img className='h-28 mx-auto rounded-full w-28' src={Customer1} alt="" />
                    <p className='text-center'> <img className='w-8 h-6' src={Comma} alt="" />Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga quisquam autem corrupti molestias repellat quibusdam vel consequatur maiores iure voluptatibus.</p>
                    <h3 className='text-1xl font-bold text-center'>- Robert Patinson</h3>
                </div>
                <div>
                    <img className='h-28 w-28 mx-auto rounded-full' src={Customer3} alt="" />
                <p className='text-center'> <img className='w-8 h-6' src={Comma} alt="" />Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga quisquam autem corrupti molestias repellat quibusdam vel consequatur maiores iure voluptatibus.</p>
                    <h3 className='text-1xl font-bold text-center'>- Bill Gates</h3>

                </div>
                <div>
                    <img className='h-28 mx-auto rounded-full w-28' src={Customer2} alt="" />
                <p className='text-center'><img className='w-8 h-6' src={Comma} alt="" /> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga quisquam autem corrupti molestias repellat quibusdam vel consequatur maiores iure voluptatibus.</p>
                    <h3 className='text-1xl font-bold text-center'>- Elon Musk</h3>

                </div>
            </div>

        </div>
    );
};

export default CustomerFeedback;