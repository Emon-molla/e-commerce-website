import React, { useState } from 'react'
import styles from "./CardSlider.module.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import productData from '../../../allProduct.json'
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addCart } from '../../store/cart';
const CardSlider = () => {

    const dispatch = useDispatch()


    return (
        <div className='p-3'>
            <Swiper
                spaceBetween={15}
                slidesPerView={5}
                modules={[Navigation, Autoplay]}
                navigation
                loop={true}
                autoplay={{ delay: 2000 }}
                breakpoints={{
                    1200: {
                        slidesPerView: 5,
                        spaceBetween: 10
                    },
                    1000: {
                        slidesPerView: 4,
                        spaceBetween: 10
                    },
                    700: {
                        slidesPerView: 3,
                        spaceBetween: 10
                    },
                    500: {
                        slidesPerView: 2,
                        spaceBetween: 10
                    },
                    300: {
                        slidesPerView: 2,
                        spaceBetween: 20
                    }
                }}
            >
                {productData.map((item) => <SwiperSlide key={item.id}>
                    <div className={styles.cards}>
                        <Link to={`/singlePage/${item.id}`}>
                            <div className={styles.cardImg}>
                                <img src={item.img} alt="" className='img-fluid' />
                                <div className={styles.disCard}>{item.discount}%</div>
                            </div></Link>
                        <div className={styles.cardBody}>
                            <p className='mb-0'>{item.title}</p>
                            <h5 className='mb-0 fw-bold'>৳ {item.price}</h5>
                            <button onClick={()=>{dispatch(addCart({
                                id:item.id,
                                title:item.title,
                                img:item.img,
                                price:item.price,
                                quantity:1
                            }))}}><Link to={'order'}>অর্ডার করুন</Link></button>
                        </div>
                    </div>
                </SwiperSlide>)}
            </Swiper>
        </div>
    )
}

export default CardSlider
