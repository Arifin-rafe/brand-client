// import React from 'react';

import Swal from "sweetalert2";

const AddBrand = () => {

    const handleAddBrand = event => {
        event.preventDefault()

        const form = event.target;
        const brandName = form.brandName.value;
        const image = form.image.value;
        const newBrand = { brandName, image }
        console.log(newBrand);

        fetch('https://brand-server-eight.vercel.app/brands', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newBrand)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success',
                        text: 'Do you want to add more brands',
                        icon: 'success',
                        confirmButtonText: 'Close'
                    })
                }
            })
    }
    return (

        <div className=" flex justify-center items-center bg-slate-300">
            <div className="w-96">
                <form onSubmit={handleAddBrand} action="">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text ">Brand Name</span>
                        </label>
                        <label className="input-group">
                            <input
                                type="text"
                                name="brandName"
                                placeholder="Brand Name "
                                className="input input-bordered w-full"
                                required
                            />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Image</span>
                        </label>
                        <label className="input-group">
                            <input
                                type="text"
                                name="image"
                                placeholder="Image Link"
                                className="input input-bordered w-full"
                            />
                        </label>
                    </div>
                    <input
                        type="submit"
                        value="Add Brand"
                        className="btn btn-block bg-black text-white mt-3"
                    />
                </form>
            </div>
        </div>

    );
};

export default AddBrand;