import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import addProductImage from '../../Assets/images/add-product-image/addProductImg.png'

const AddProduct = () => {
    // const [product, setProduct] = useState();

    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const price = form.price.value;
        const originalPrice = form.originalPrice.value;
        const number = form.number.value;
        const sellerName = form.sellerName.value;
        const postTime = form.postTime.value;
        const email = form.email.value;
        const location = form.location.value;
        const category = form.category.value;
        const purchase = form.purchase.value;
        const condition = form.condition.value;
        const description = form.description.value;

        console.log(name, photoURL, price, number, location,  category, purchase, condition, description)

        const product = {
            name,
            image: photoURL,
            price,
            originalPrice,
            number,
            sellerName,
            postTime,
            email,
            location,
            category,
            yearOfUse: purchase,
            condition,
            description
        }
        
        fetch('http://localhost:5000/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
        .then(res => res.json())
        .then(data => {
            // setProduct(data)
            console.log(data)
        })

    }
    
    return (
        <div className='mt-8 mb-20'>

            {/* react helmet for dynamic title  */}
            <Helmet>
                <title>Moto Garage/addProduct</title>
            </Helmet>


            <h3 className='text-base-300 uppercase text-2xl font-bold text-center mb-4'>Add Your Product</h3>
            <img className='w-32 mx-auto mb-4' src={addProductImage} alt="" />
            <div className="card w-10/12 lg:w-5/12 bg-gray-200 shadow-xl p-5 mx-auto">

                <form onSubmit={handleSubmit} className='w-8/12 mx-auto my-10'>

                    <div class="mb-6">
                        <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Product name</label>
                        <input type="text" id="name" name="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Product name" required="" />
                    </div>

                    <div class="mb-6">
                        <label for="photoURL" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Product Photo URL</label>
                        <input type="text" id="photoURL" name="photoURL" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter PhotoURL" required="" />
                    </div>

                    <div class="mb-6">
                        <label for="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Product price</label>
                        <input type="text" id="price" name="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Current price" required="" />
                    </div>

                    <div class="mb-6">
                        <label for="originalPrice" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Original price</label>
                        <input type="text" id="originalPrice" name="originalPrice" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Original price" required="" />
                    </div>

                    <div class="mb-6">
                        <label for="number" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Mobile Number</label>
                        <input type="text" id="number" name="number" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Mobile number" required="" />
                    </div>

                    <div class="mb-6">
                        <label for="sellerName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Seller name</label>
                        <input type="text" id="sellerName" name="sellerName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Seller name" required="" />
                    </div>

                    <div class="mb-6">
                        <label for="postTime" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Post time </label>
                        <input type="text" id="postTime" name="postTime" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Time got posted (5-01-2023)" required="" />
                    </div>

                    <div class="mb-6">
                        <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email</label>
                        <input type="text" id="email" name="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Mobile number" required="" />
                    </div>

                    <div class="mb-6">
                        <label for="location" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Location</label>
                        <input type="text" id="location" name="location" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Location" required="" />
                    </div>

                    {/* <div class="mb-6">
                        <label for="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Product Category</label>
                        <input type="text" id="category" name="category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="bmw/ harley davidson/ dirt bikes " required="" />
                    </div> */}


                    <div className='mb-6'>
                        <label for="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Product Category</label>

                        <select id="category" name="category" className="select w-full max-w-xs">
                            <option disabled selected>Choose your product...!</option>
                            <option value="bmw">BMW</option>
                            <option value="harley davidson">Harley Davidson</option>
                            <option value="dirt bikes">Dirt Bikes</option>
                        </select>
                    </div>




                    <div class="mb-6">
                        <label for="purchase" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Years of use</label>
                        <input type="text" id="purchase" name="purchase" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Years of use" required="" />
                    </div>

                    <div className='mb-6'>
                        <label for="condition" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Product Condition</label>

                        <select id="condition" name="condition" className="select w-full max-w-xs">
                            <option disabled selected>What is your product condition?</option>
                            <option value="excellent">Excellent</option>
                            <option value="good">Good</option>
                            <option value="fair">Fair</option>
                        </select>
                    </div>


                    <div class="mb-6">
                        <label for="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Product Description</label>

                        <textarea type="text" id="description" name="description" className="textarea textarea-bordered w-full" placeholder="Product description"></textarea>
                    </div>

                    <input className='btn btn-warning block mx-auto' type="submit" value="SUBMIT" />                    
                </form>
            </div>
        </div>
    );
};

export default AddProduct;