import React from 'react';
import { Link } from 'react-router-dom';

const CategorySingleProduct = ({product}) => {
    const {name, image} = product;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>


                    <Link to='/'><button>GO BACK</button></Link>
                </div>
            </div>
        </div>
    );
};

export default CategorySingleProduct;