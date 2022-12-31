import React from 'react';
import { Link } from 'react-router-dom';
import bgImage from '../../Assets/images/bg-Image/error-bg.jpg'
const ErrorPage = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${bgImage})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-9xl font-bold">404</h1>
                        <p className="mb-5 uppercase text-4xl">oop, that link is broken</p>
                        <p className="mb-5 uppercase text-1xl">page doesn't exist or some other error occured. <br></br> go to our</p>
                        <Link to='/home'><button className="btn btn-warning uppercase text-2xl">home page</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;