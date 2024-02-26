// import React from 'react';

import { useEffect, useState } from "react";

const Carousel = ({ children: slides, autoSlide = false, autoSlideInterval = 3000, }) => {
    const [curr, setCurr] = useState(0)
    const prev = () =>
        setCurr((curr) => (curr == 0 ? slides.length - 1 : curr - 1))
    const next = () =>
        setCurr((curr) => (curr == slides.length - 1 ? 0 : curr + 1))

    useEffect((() => {
        if (!autoSlide) return
        const slideInterval = setInterval(next, autoSlideInterval)
        return () => clearInterval(slideInterval)
    }), [])
    return (
        <div className="overflow-hidden relative h-96">
            <div className="flex transition-transform ease-out duration-500" style={{ transform: `translateX(-${curr * 100}%)` }}>{slides}</div>
            <div className="absolute inset-0 flex items-center justify-between p-4">
                {/* <button onClick={prev} className=" p-1 rounded shadow bg-white/80 text-gray-800 hover:bg-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                    </svg>

                </button>
                <button onClick={next} className=" p-1 rounded shadow bg-white/80 text-gray-800 hover:bg-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>

                </button> */}
                <div className="absolute bottom-4 right-0 left-0">
                </div>
            </div>
        </div>
    );
};

export default Carousel;