import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../../Contexts/AuthProvider';

const BookingModal = ({bookingProduct}) => {
    const {name, price} = bookingProduct;
    const {user} = useContext(AuthContext)
    console.log(user)

    const handelSubmit = (event) => {
        event.preventDefault()
        const form = event.target;
        const location = form.location.value;
        const number = form.number.value;

        const modalInfo ={
            location,
            number
        }
        fetch('https://moto-garage-server.vercel.app/modalData', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(modalInfo)
        })
        .then(res => res.json())
        .then(data => {
            toast.success('Item is booked')
            console.log(data)
        })
    }
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    
                    <form onSubmit={handelSubmit}  className='w-8/12 mx-auto my-10'>

                    <div class="mb-6">
                        <label for="userName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">User name</label>
                        <input type="text" id="userName" name="userName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={user?.displayName} disabled required="" />
                    </div>

                    <div class="mb-6">
                        <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">User email</label>
                        <input type="text" id="email" name="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={user?.email} disabled required="" />
                    </div>

                    <div class="mb-6">
                        <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Product name</label>
                        <input type="text" id="name" name="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={name} disabled required="" />
                    </div>

                    
                    <div class="mb-6">
                        <label for="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Product price</label>
                        <input type="text" id="price" name="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={price} disabled required="" />
                    </div>

                    <div class="mb-6">
                        <label for="location" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Meeting location</label>
                        <input type="text" id="location" name="location" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Meeting location" required="" />
                    </div>

                    <div class="mb-6">
                        <label for="number" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Mobile Number</label>
                        <input type="text" id="number" name="number" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Mobile number" required="" />
                    </div>

                    <input className='btn btn-warning block mx-auto' type="submit" value="SUBMIT" />                    
                </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;