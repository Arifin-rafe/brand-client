import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2'


const UpdateProduct = () => {

    const product = useLoaderData()
    const { _id, brandName, productName, type, price, ratings, details } = product
    console.log(product);
    const handleUpdateProduct = event => {

        event.preventDefault()

        const form = event.target;
        const brandName = form.brandName.value;
        const productName = form.productName.value;
        const type = form.type.value;
        const price = form.price.value;
        const ratings = form.ratings.value;
        const details = form.details.value;

        const image = form.image.value;

        const updateProduct = { brandName, productName, type, price, ratings, details, image };
        console.log(updateProduct);

        //send to server
        fetch(`https://brand-server-delta.vercel.app/products/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success',
                        text: 'Do you want to Update more Product',
                        icon: 'success',
                        confirmButtonText: 'Close'
                    })
                }
            })

    }
    return (
        <div className="bg-[#F4F3F0] p-24">
            <h2 className="text-3xl font-serif">Update Product-{brandName}</h2>
            <form onSubmit={handleUpdateProduct} >

                {/*form name and quantity row */}
                <div className="md:flex gap-3">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Brand Name</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="brandName" defaultValue={brandName} placeholder="Brand Name"  className="input input-bordered w-full" />
                        </label>
                    </div>


                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Product name</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="productName" placeholder="Product name" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/*form supplier row */}
                <div className="md:flex gap-3">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Type</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="type" placeholder="Type" className="input input-bordered w-full" />
                        </label>
                    </div>


                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="price" placeholder="Price" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/*form category and details row */}
                <div className="md:flex gap-3">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Ratings</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="ratings" placeholder="Ratings" className="input input-bordered w-full" />
                        </label>
                    </div>


                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="details" placeholder="Details" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/*form row */}
                <div className="">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="image" placeholder="Photo URL" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <input type="submit" value="Update Product" className="btn btn-block bg-black text-white mt-3" />
            </form>
        </div>
    );
};

export default UpdateProduct;