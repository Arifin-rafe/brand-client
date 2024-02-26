
const GenderDiscount = () => {
    return (
        <div className="md:flex gap-16 mt-10 justify-between">
            <div className="relative h-[800px]">
                <img src='../../../public/images/women-shoes.jpg' className="object-cover w-full h-full" />
                <div className="absolute top-1/2 left-1/3">
                    <p className="text-3xl text-black font-normal">Summer OFF for WoMEN</p>
                    <p className="text-2xl text-black font-medium">Enjoy 25% Off On Fit Wear For Women</p>
                    <button className="btn text-black bg-transparent top-1 right-1 border-spacing-1 hover:bg-black">Shop Now</button>
                </div>
            </div>
            <div className="relative h-[800px]">
                <img className="object-cover w-full h-full" src='../../../public/images/men-shoes.jpg' />
                <div className="absolute top-1/2 left-1/3">
                    <p className="text-3xl text-white">Summer OFF for MEN</p>
                    <p className="text-2xl text-white font-medium">Save 15% On Stylish Fit Wear</p>
                    <button className="btn text-white bg-transparent top-1 right-1 border-spacing-1 hover:bg-black">Shop Now</button>
                </div>
            </div>
        </div>

    );
};

export default GenderDiscount;