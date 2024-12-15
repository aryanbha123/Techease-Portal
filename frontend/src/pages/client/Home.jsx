import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Correct import for CSS in Swiper v9+
import 'swiper/css/pagination'; // For pagination
import 'swiper/css/navigation'; // If you're using navigation
import { Pagination, Autoplay } from 'swiper';

export default function Home() {
    return (
        <>
            <div className='px-5' >
                <h1 className="text-2xl py-3">Popular Courses</h1>
                <Swiper
                    spaceBetween={10}
                    slidesPerView={3}
                    autoplay={{ delay: 3000 }}  // Auto-scrolling with 3 seconds delay
                    pagination={{ clickable: true }}  // Dots for pagination
                    breakpoints={{
                        1024: {
                            slidesPerView: 3,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        480: {
                            slidesPerView: 1,
                        },
                    }}
                    modules={[Pagination, Autoplay]}  // Adding the necessary modules
                >
                    <SwiperSlide>
                        <div className="rounded-2xl h-56 w-full bg-[#f1f1f1]"></div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="rounded-2xl h-56 w-full bg-[#f1f1f1]"></div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="rounded-2xl h-56 w-full bg-[#f1f1f1]"></div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="rounded-2xl h-56 w-full bg-[#f1f1f1]"></div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="rounded-2xl h-56 w-full bg-[#f1f1f1]"></div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="rounded-2xl h-56 w-full bg-[#f1f1f1]"></div>
                    </SwiperSlide>
                </Swiper>
            </div>

            <div className='px-5' >
                <h1 className="text-2xl py-3">Top Courses</h1>
                <Swiper
                    spaceBetween={10}
                    slidesPerView={3}
                    autoplay={{ delay: 3000 }}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        1024: {
                            slidesPerView: 3,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        480: {
                            slidesPerView: 1,
                        },
                    }}
                    modules={[Pagination, Autoplay]}
                >
                    <SwiperSlide>
                        <div className="rounded-2xl h-56 w-full bg-[#f1f1f1]"></div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="rounded-2xl h-56 w-full bg-[#f1f1f1]"></div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="rounded-2xl h-56 w-full bg-[#f1f1f1]"></div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="rounded-2xl h-56 w-full bg-[#f1f1f1]"></div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="rounded-2xl h-56 w-full bg-[#f1f1f1]"></div>
                    </SwiperSlide>
                </Swiper>
            </div>

            <div className='px-5' > 
                <h1 className="text-2xl py-3">Placement Courses</h1>
                <Swiper
                    spaceBetween={10}
                    slidesPerView={3}
                    autoplay={{ delay: 3000 }}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        1024: {
                            slidesPerView: 3,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        480: {
                            slidesPerView: 1,
                        },
                    }}
                    modules={[Pagination, Autoplay]}
                >
                    <SwiperSlide>
                        <div className="rounded-2xl h-56 w-full bg-[#f1f1f1]">1</div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="rounded-2xl h-56 w-full bg-[#f1f1f1]">2</div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="rounded-2xl h-56 w-full bg-[#f1f1f1]">3</div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="rounded-2xl h-56 w-full bg-[#f1f1f1]">4</div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="rounded-2xl h-56 w-full bg-[#f1f1f1]">5</div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    )
}
