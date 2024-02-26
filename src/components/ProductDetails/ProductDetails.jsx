import { useLoaderData } from "react-router-dom";

const ProductDetails = () => {

    const singleDetails = useLoaderData()
    const { brandName, image, productName, details, ratings, type, price } = singleDetails
    return (
        <div className="md:flex items-center justify-center">
            <div className="flex items-center justify-center mt-5 mb-5">
                <img src={image} alt="" className="mx-auto w-1/2 max-h-screen" />
            </div>
            <div className="text-left">
                <h2 className="text-3xl font-semibold mb-4 text-gray-800">Brand-{brandName}</h2>
                <h3 className="text-2xl font-semibold mb-2 text-gray-700">Product-{productName}</h3>
                <p><span className="text-xl font-semibold text-gray-600">Ratings:</span> {ratings}</p>
                <p><span className="text-xl font-semibold text-gray-600">Price:</span> ${price}</p>
                <p><span className="text-xl font-semibold text-gray-600">Type:</span> {type}</p>
                <p><span className="text-xl font-semibold text-gray-600">Description:</span> {details}</p>
            </div>

        </div>
    )
};

export default ProductDetails;