// components/CardCarousel.js
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

export default function CardCarousel() {
    const items = [0, 1, 2, 3, 4, 5, 6];

    return (
        <div className="w-full max-w-4xl mx-auto py-12 px-4 bg-black text-white">
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                navigation
                loop
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5,
                    slideShadows: false,
                }}
                modules={[EffectCoverflow, Navigation]}
                className="mySwiper"
            >
                {items.map((item, index) => (
                    <SwiperSlide key={index} className="!w-[200px] !h-[200px] flex items-center justify-center bg-purple-500 text-3xl font-bold rounded-md">
                        {item}
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
