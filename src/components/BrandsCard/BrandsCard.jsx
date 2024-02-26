// import React from 'react';

import { Link } from "react-router-dom";

const BrandsCard = ({ brand }) => {

    const { brandName, image } = brand
    return (

        <Link to={`/productsCard/${brandName}`}>
            <div className="group relative items-center justify-center shadow-xl">
                <img className='w-full h-52 rounded-lg hover:opacity-50 ' src={image} alt="" />
                <div className="absolute bottom-0 left-0 w-full h-52 bg-black bg-opacity-80 text-white opacity-0 group-hover:opacity-100 transition-opacity rounded-lg">
                    <p className="text-2xl font-serif font-semibold text-center my-24">{brandName}</p>
                </div>
            </div>
        </Link>


    );
};

export default BrandsCard;