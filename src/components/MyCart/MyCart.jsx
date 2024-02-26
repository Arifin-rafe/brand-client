// import React from 'react';

import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const MyCart = () => {

    const cart = useLoaderData()
    const { productName, _id, brandName } = cart
    console.log(brandName);
    const handleDelete = _id => {
        console.log(_id);
        // Swal.fire({
        //     title: 'Are you sure?',
        //     text: "You won't be able to revert this!",
        //     icon: 'warning',
        //     showCancelButton: true,
        //     confirmButtonColor: '#3085d6',
        //     cancelButtonColor: '#d33',
        //     confirmButtonText: 'Yes, delete it!'
        // }).then((result) => {
        //     if (result.isConfirmed) {

        //         fetch(`http://localhost:5000/cart/${_id}`,{
        //             method:'DELETE'

        //         })
        //             .then(res => res.json())
        //             .then(data => {
        //                 console.log(data);
        //                 if (data.deletedCount > 0) {
        //                       Swal.fire(
        //                         'Deleted!',
        //                         'Your file has been deleted.',
        //                         'success'
        //                       )
        //                 }
        //             })
        //     }
        // })
    }
    return (

        <div className="flex justify-center items-center ">
            <div className="gap-4 mb-10 md:mx-28 ">
            {cart.map(cartItem => (
                <div key={cartItem._id} className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 ">
                    <div className="flex items-center justify-between">
                        <img className="h-24 w-24 rounded-full object-cover mr-2" src={cartItem.image} alt={`Image of ${cartItem.productName}`} />
                        <div className="flex flex-col flex-grow ml-2">
                            <h1 className="text-lg font-semibold text-gray-800 mb-1">Brand-{cartItem.brandName}</h1>
                            <h2 className="text-md font-semibold text-gray-700 mb-1">Product-{cartItem.productName}</h2>
                            <p className="text-sm text-gray-600 font-medium">$ {cartItem.price}</p>


                        </div>
                        <button onClick={() => handleDelete(cartItem._id)} className="btn bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg shadow-sm transition duration-300 ease-in-out transform hover:scale-105"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                        </svg>
                        </button>
                    </div>
                </div>
            ))}
        </div>
        </div>


    );
};

export default MyCart;