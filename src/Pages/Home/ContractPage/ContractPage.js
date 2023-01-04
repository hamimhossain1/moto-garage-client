import React from 'react';
import { Helmet } from 'react-helmet';
import ContractImage from '../../../Assets/images/contract-image/contract-img.jpg'

const ContractPage = () => {
  return (
    <div className='mt-12'>

      {/* making dynamic title by react helmet */}
      <Helmet>
            <title>Moto Garage/Contract</title>
        </Helmet>

      <div className="hero " style={{ backgroundImage: `url(${ContractImage})` }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-4xl font-bold uppercase">Contract With Us</h1>
            <label for="input-group-1" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
            <div class="relative mb-6 mt-10">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
              </div>
              <input type="text" id="input-group-1" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="motor@garage.com" />
            </div>
            <label for="website-admin" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
            <p className="mb-5">We have been selling second hand motor cycles for years.We have various kinds of motor cycles. So, if you are interest to buy this kind of cycles or if you have any thing to know about it. Send us email, we will be happy to answer you  .</p>
            <button className="btn btn-warning">send your inquire</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContractPage;