

const Reviews = () => {
    return (
        <div className=" mt-7">
            <div className="text-center py-10">
                <h5>Product Reviews</h5>
                <h1 className="text-4xl w-96 mx-auto leading-normal font-bold mb-12 font-serif">Read what others have to say</h1>
                <div className="md:flex max-w-5xl mx-auto gap-8 group">
                    <div className="bg-white/10 group-hover:blur-sm hover:!blur-none p-8 rounded-xl mix-blend-luminosity">
                        <img className="rounded-full h-20 mx-auto" src="../../../public/images/re1.JPG" alt="" />
                        <h4 className="uppercase text-xl font-bold">John doe</h4>
                        <p className="text-sm leading-7 my-3 font-light opacity-50">Soft, comfortable fabric with stylish design; fits well and feels great. Excellent quality and  price.</p>
                        <button className="btn btn-primary py-2.5 px-8 rounded-full">Get in Touch</button>
                    </div>
                    <div className="bg-white/10 group-hover:blur-sm hover:!blur-none p-8 rounded-xl mix-blend-luminosity">
                        <img className="rounded-full h-20 mx-auto" src="../../../public/images/re2.JPG" alt="" />
                        <h4 className="uppercase text-xl font-bold">Alex Dox</h4>
                        <p className="text-sm leading-7 my-3 font-light opacity-50">Elegant design, flattering fit, durable material. Versatile for various occasions. A wardrobe staple worth investing in for long-term wear.</p>
                        <button className="btn btn-primary py-2.5 px-8 rounded-full">Get in Touch</button>
                    </div>
                    <div className="bg-white/10 group-hover:blur-sm hover:!blur-none p-8 rounded-xl mix-blend-luminosity">
                        <img className="rounded-full h-20 mx-auto" src="../../../public/images/re3.JPG" alt="" />
                        <h4 className="uppercase text-xl font-bold">Larry Page</h4>
                        <p className="text-sm leading-7 my-3 font-light opacity-50">Sleek, modern look with attention to detail. Comfortable to wear, perfect for casual or formal settings. Highly recommended.</p>
                        <button className="btn btn-primary py-2.5 px-8 rounded-full">Get in Touch</button>
                    </div>

                </div>

            </div>

        </div>
    );
}
export default Reviews;