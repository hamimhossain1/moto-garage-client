import React, { useContext } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider';

const BookingModal = ({bookingProduct}) => {
    const {name} = bookingProduct;
    const {user} = useContext(AuthContext)
    console.log(user)
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    
                    <form  className='w-8/12 mx-auto my-10'>

                    <div class="mb-6">
                        <label for="userName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">User name</label>
                        <input type="text" id="userName" name="userName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={user?.displayName} required="" />
                    </div>

                    <div class="mb-6">
                        <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">User email</label>
                        <input type="text" id="email" name="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={user?.email} required="" />
                    </div>

                    <div class="mb-6">
                        <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Product name</label>
                        <input type="text" id="name" name="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Product name" required="" />
                    </div>

                    
                    <div class="mb-6">
                        <label for="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Product price</label>
                        <input type="text" id="price" name="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Product price" required="" />
                    </div>

                    <div class="mb-6">
                        <label for="location" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Meeting location</label>
                        <input type="text" id="location" name="location" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Meeting location" required="" />
                    </div>

                    <div class="mb-6">
                        <label for="number" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Mobile Number</label>
                        <input type="text" id="number" name="number" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Mobile number" required="" />
                    </div>

                    
                   
                    

                    <div class="mb-6">
                        <label for="postTime" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Post time </label>
                        <input type="text" id="postTime" name="postTime" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Time got posted (5-01-2023)" required="" />
                    </div>

                    <input className='btn btn-warning block mx-auto' type="submit" value="SUBMIT" />                    
                </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;