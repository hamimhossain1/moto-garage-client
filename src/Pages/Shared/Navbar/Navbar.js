import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import navlogo from '../../../Assets/logo/nav-logo.png'
import { AuthContext } from '../../../Contexts/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    // --logOut method applied here---//
    const handleLogout = () => {
        logOut()
            .then(result => {
                toast.success('Logout succeed')
            })
            .catch(error => {
                toast.error('error here:', error)
            })

    }

    return (
        <div className='bg-lime-400  z-20 w-full sticky top-0'>
            <div className="navbar w-11/12 p-5 mx-auto">
                <div className="navbar-start ">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to='/home'>HOME</Link></li>
                            {/* <li><Link to='/allServices'>CATEGORY</Link></li> */}
                            {/* <li><Link to='/addProduct'>Add Product</Link></li> */}
                            {/* <li><Link to='/myProduct'>MY PRODUCTS</Link></li> */}
                            <li><Link to='/dashboard'>DASHBOARD</Link></li>


                            <>

                                {/* <li><Link to='/addService'>Add Service</Link></li> */}
                            </>


                            <li><Link to='/blog'>BLOG</Link></li>


                        </ul>
                    </div>
                    <Link to='/home' className="btn btn-ghost normal-case text-xl"><img src={navlogo} className='w-16' alt="navbar logo" /></Link>
                    <h3 className='text-1xl md:text-2xl font-bold text-base-
                    300'>MOTO GARAGE</h3>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li><Link to='/home'>HOME</Link></li>
                
                        <li><Link to='/dashboard'>DASHBOARD</Link></li>


                        <>
                            {/* <li><Link to='/addService'>Add Service</Link></li> */}

                        </>


                        <li><Link to='/blog'>BLOG</Link></li>


                    </ul>
                </div>
                <div className="navbar-end">
                    <img className='mr-3 w-10 hidden md:block rounded-full' src={user?.photoURL} alt="" />
                    <p className='hidden md:block mr-12 font-bold'>{user?.email}</p>

                    {user?.uid ?
                        <button onClick={handleLogout} className="btn glass text-red-800  hover:bg-sky-100"><Link to='/login'>Logout</Link></button>
                        :
                        <button className="btn glass text-red-800  hover:bg-sky-100"><Link to='/login'>Login</Link></button>
                    }
                </div>
            </div>

            <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden  ">
                <p className='text-gray-500'>DASHBOARD</p>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
        </div>


    );
};

export default Navbar;