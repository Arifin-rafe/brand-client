// import React from 'react';

// import { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
const ProductCard = ({ product }) => {
    const { _id, brandName, image, productName,ratings,price } = product


    const handleAddToCart = (product) => {
        fetch('https://brand-server-i2zlx5cg3-arifin-rafe.vercel.app/cart', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success',
                        text: 'Product added to cart',
                        icon: 'success',
                        confirmButtonText: 'Close'
                    })
                }
            })
    }

    return (
        <div className="mx-16 md:flex justify-center ">
            <div className="card card-compact w-80 mb-10  h-96 bg-base-100 shadow-xl mt-7">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <div className="text-center items-center">
                
                <p className="flex justify-center"><span><Rating style={{ maxWidth: 100 }} value={ratings} readOnly /></span>({ratings})</p>
                <h2 className="text-2xl">Brand- {brandName}</h2>
                <p className="font-semibold">Product- {productName}</p>
                <p className="font-semibold">Price- ${price}</p>
                </div>
                <div className="card-actions justify-center">
                    <button onClick={() => handleAddToCart(product)} className="btn text-white bg-black btn-sm">Add to Cart</button>
                    <Link to={`/products/${_id}`}><button className="btn btn-sm text-white bg-black">Update data</button></Link>
                    <Link to={`/productDetails/${_id}`}><button className="btn btn-sm text-white bg-black">Details</button></Link>
                </div>
            </div>
        </div>
        </div>
    );
};

export default ProductCard;