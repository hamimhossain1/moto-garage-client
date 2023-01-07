import React from 'react';

const CategoryHome = ({category}) => {

    console.log(category)


    return (
                <div className="hero p-2 " style={{ backgroundImage: `url("${category.image}")` }}>
                    <div className="hero-overlay  bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="">
                            <h1 className="mb-5 uppercase text-5xl font-bold">{category.name}</h1>
                            <button className="btn btn-warning">Check out</button>
                        </div>
                    </div>
                </div>
    );
};

export default CategoryHome;