import React from 'react';
import { FaAdversal } from 'react-icons/fa';
import { MdDeleteForever } from 'react-icons/md';


const SingleMyProduct = ({product, handleDelete}) => {
        const { name, image, price, originalPrice, location, yearOfUse, sellerName, postTime, _id } = product;

    return (
         <div className=' gap-10 relative'>
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
                <div className='absolute top-1 right-2 flex'>
                    {/* <RiAdvertisementLine></RiAdvertisementLine> */}
                    <FaAdversal className='text-green-500 text-2xl hover:bg-gray-700 mr-2'></FaAdversal>
                    <button className="btn  btn-xs hover:bg-purple-500">Available</button>
                    <MdDeleteForever onClick={() => handleDelete(_id)}  className='text-red-500 text-2xl hover:bg-red-900 mr-2'></MdDeleteForever>
                    
                </div>
            </div>
    );
};

export default SingleMyProduct;