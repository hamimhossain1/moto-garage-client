import React from 'react';

const SingleMyProduct = ({product}) => {
        const { name, image, price, originalPrice, location, yearOfUse, sellerName, postTime } = product;

    return (
         <div className=' gap-10'>
                <div className="card  bg-base-300 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={image} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{name}</h2>
                        <h2 className="card-title">{sellerName}</h2>
                        <p>{location}, Bangladesh</p>
                        <p className=''><span className='font-bold'>Current price: </span> {price}</p>
                        <p className=''><span className='font-bold'>Original price: </span> {originalPrice}</p>
                        <p className=''><span className='font-bold'>Year of use: </span> {yearOfUse}</p>
                        <p className=''><span className='font-bold'>Post time: </span> {postTime}</p>

                        <div className="card-actions">
                            <button className="btn btn-warning">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default SingleMyProduct;