// import React from 'react';

import { useLoaderData } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";

const Products = () => {
    const products = useLoaderData()
    console.log(products);
    return (
        <div className="md:grid grid-cols-2 lg:grid-cols-3">
            {
                products.map(product => <ProductCard key={product._id} product={product}></ProductCard>)
            }
        </div>
    );
};

export default Products;