import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';

const Dashboard = () => {
    return (
        <div className=''>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile mt-10">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side ">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-base-content ">


                        <li><Link to="/dashboard/mybookings">My Bookings</Link></li>



                        <li><Link to="/dashboard/addProduct">Add Product</Link></li>


                        <>
                            <li><Link to="/dashboard/seller">All Seller</Link></li>
                            <li><Link to="/dashboard/buyer">All Buyer</Link></li>
                        </>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;