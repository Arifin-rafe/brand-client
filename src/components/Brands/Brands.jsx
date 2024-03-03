
import BrandsCard from "../BrandsCard/BrandsCard";
import { useLoaderData } from "react-router-dom";
import MovingText from "../MovingText/MovingText";
import ContactUs from "../ContactUs/ContactUs";
import Banner from "../Banner/Banner";
import Reviews from "../Reviews/Reviews";
import TopProducts from "../TopProducts/TopProducts";
import GenderDiscount from "../GenderDiscount/GenderDiscount";

const Brands = () => {
    const brands = useLoaderData()
    console.log(brands);
    return (
        <div>
            <MovingText></MovingText>
            <Banner></Banner>
            <div className="text-center text-4xl font-serif font-bold mb-5">
                <h2>Our ALL Brands</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mx-32">
                {
                    brands.map(brand => <BrandsCard key={brand._id} brand={brand}></BrandsCard>)
                }

            </div>
            <TopProducts></TopProducts>
            <GenderDiscount></GenderDiscount>
            <Reviews></Reviews>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Brands;