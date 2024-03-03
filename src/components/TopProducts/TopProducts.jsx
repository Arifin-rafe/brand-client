import { useState } from "react";
import { useEffect } from "react";
import React, { useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

const TopProducts = () => {

    const [top, setTop] = useState([])

    useEffect(() => {
        fetch('https://brand-server-delta.vercel.app/top')
            .then(res => res.json())
            .then(data => setTop(data))
    }, [])
    
    return (
        <div>
            <h2 className="text-4xl font-bold font-serif text-center mt-10">Top Rated</h2>

            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                {top.map(items=><SwiperSlide key={items._id}>
                <div className="relative">
                <img src={items.image} />
                <button className="btn text-white text-3xl absolute bg-transparent  rounded-full top-1 right-1 border-none hover:bg-green-400 ">+</button>
                </div>
                </SwiperSlide>)}
              
            </Swiper>
        </div>
    );
};

export default TopProducts;