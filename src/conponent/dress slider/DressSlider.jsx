import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import style from './DressSlider.module.css'
const DressSlider = () => {
    return (
        <div className='my-5'>
            <div className="container">
                <Swiper
                    spaceBetween={10}
                    slidesPerView={8}
                    loop = {true}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    breakpoints={{
                        1200:{
                            slidesPerView:8,
                            spaceBetween: 10
                        },
                        1000:{
                            slidesPerView:6,
                            spaceBetween: 10
                        },
                        800:{
                            slidesPerView:5,
                            spaceBetween: 10
                        },
                        700:{
                            slidesPerView:4,
                            spaceBetween: 10
                        },

                        500:{
                            slidesPerView:3,
                            spaceBetween: 10
                        },
                        300:{
                            slidesPerView:2,
                            spaceBetween: 10
                        }
                    }}
                >
                    <SwiperSlide>
                        <div className={style.dressCard}>
                            <div className={style.dressCardImg}>
                                <img src="image/t-shirt.webp" alt="" width={"100px"} height={"100px"} />
                            </div>
                            <p>Men's Clothing & Fashion</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide><div className={style.dressCard}>
                        <div className={style.dressCardImg}>
                            <img src="image/t-shirt.webp" alt="" width={"100px"} height={"100px"} />
                        </div>
                        <p>Men's Clothing & Fashion</p>
                    </div></SwiperSlide>
                    <SwiperSlide><div className={style.dressCard}>
                        <div className={style.dressCardImg}>
                            <img src="image/t-shirt.webp" alt="" width={"100px"} height={"100px"} />
                        </div>
                        <p>Men's Clothing & Fashion</p>
                    </div></SwiperSlide>
                    <SwiperSlide><div className={style.dressCard}>
                        <div className={style.dressCardImg}>
                            <img src="image/t-shirt.webp" alt="" width={"100px"} height={"100px"} />
                        </div>
                        <p>Men's Clothing & Fashion</p>
                    </div></SwiperSlide>
                    <SwiperSlide><div className={style.dressCard}>
                        <div className={style.dressCardImg}>
                            <img src="image/t-shirt.webp" alt="" width={"100px"} height={"100px"} />
                        </div>
                        <p>Men's Clothing & Fashion</p>
                    </div></SwiperSlide>
                    <SwiperSlide><div className={style.dressCard}>
                        <div className={style.dressCardImg}>
                            <img src="image/t-shirt.webp" alt="" width={"100px"} height={"100px"} />
                        </div>
                        <p>Men's Clothing & Fashion</p>
                    </div></SwiperSlide>
                    <SwiperSlide><div className={style.dressCard}>
                        <div className={style.dressCardImg}>
                            <img src="image/t-shirt.webp" alt="" width={"100px"} height={"100px"} />
                        </div>
                        <p>Men's Clothing & Fashion</p>
                    </div></SwiperSlide>
                    <SwiperSlide><div className={style.dressCard}>
                        <div className={style.dressCardImg}>
                            <img src="image/t-shirt.webp" alt="" width={"100px"} height={"100px"} />
                        </div>
                        <p>Men's Clothing & Fashion</p>
                    </div></SwiperSlide>
                    <SwiperSlide><div className={style.dressCard}>
                        <div className={style.dressCardImg}>
                            <img src="image/t-shirt.webp" alt="" width={"100px"} height={"100px"} />
                        </div>
                        <p>Men's Clothing & Fashion</p>
                    </div></SwiperSlide>
                    <SwiperSlide><div className={style.dressCard}>
                        <div className={style.dressCardImg}>
                            <img src="image/t-shirt.webp" alt="" width={"100px"} height={"100px"} />
                        </div>
                        <p>Men's Clothing & Fashion</p>
                    </div></SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default DressSlider
