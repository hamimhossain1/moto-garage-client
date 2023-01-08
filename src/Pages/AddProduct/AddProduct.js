import React from 'react';
import { Helmet } from 'react-helmet';
import addProductImage from '../../Assets/images/add-product-image/addProductImg.png'

const AddProduct = () => {
    return (
        <div className='mt-8 mb-20'>

            {/* react helmet for dynamic title  */}
            <Helmet>
                <title>Moto Garage/addProduct</title>
            </Helmet>


            <h3 className='text-base-300 uppercase text-2xl font-bold text-center mb-4'>Add Your Product</h3>
            <img className='w-32 mx-auto mb-4' src={addProductImage} alt="" />
            <div className="card w-10/12 lg:w-5/12 bg-gray-200 shadow-xl p-5 mx-auto">
                <form className='w-8/12 mx-auto my-10'>

                    <div class="mb-6">
                        <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Product name</label>
                        <input type="text" id="name" name="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Product name" required="" />
                    </div>

                    <div class="mb-6">
                        <label for="photoURL" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Product Photo URL</label>
                        <input type="text" id="photoURL" name="photoURL" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter PhotoURL" required="" />
                    </div>

                    <div class="mb-6">
                        <label for="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Service Price</label>
                        <input type="text" id="price" name="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Service price" required="" />
                    </div>

                    <div class="mb-6">
                        <label for="number" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Mobile Number</label>
                        <input type="text" id="number" name="number" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Mobile number" required="" />
                    </div>

                    <div class="mb-6">
                        <label for="location" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Location</label>
                        <input type="text" id="location" name="location" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Location" required="" />
                    </div>

                    <div class="mb-6">
                        <label for="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Product Category</label>
                        <input type="text" id="category" name="category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Product category" required="" />
                    </div>

                    <div class="mb-6">
                        <label for="purchase" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Years of Purchase</label>
                        <input type="text" id="purchase" name="purchase" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Years of purchase" required="" />
                    </div>

                    <div className='mb-6'>
                        <label for="condition" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Product Condition</label>

                        <select id="condition" name="condition" className="select w-full max-w-xs">
                            <option disabled selected>What is your product condition?</option>
                            <option>Excellent</option>
                            <option>Good</option>
                            <option>Fair</option>
                        </select>
                    </div>


                    <div class="mb-6">
                        <label for="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Product Description</label>

                        <textarea type="text" id="description" name="description" className="textarea textarea-bordered w-full" placeholder="Product description"></textarea>
                    </div>

                    <button className="btn btn-warning w-full">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;