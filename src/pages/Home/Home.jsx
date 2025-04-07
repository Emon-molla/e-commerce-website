import React from 'react'
import style from './Home.module.css'
import { GiHamburgerMenu } from "react-icons/gi";
import { FaCaretDown } from "react-icons/fa";
import Carousel from 'react-bootstrap/Carousel';
import DressSlider from '../../conponent/dress slider/DressSlider';
import CardSlider from '../../conponent/card slider/CardSlider';
import productData from '../../../mensProduct.json'
import styles from '../../conponent/card slider/CardSlider.module.css'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addCart } from '../../store/cart';
const Home = () => {
    const dispatch = useDispatch()
    return (
        <div>
            <div className={`${style.headerLast}`}>
                <div className="container">
                    <div className='row'>
                        <div className='col-lg-3'>
                            <div className={`${style.cateBox} d-flex align-items-center gap-2 p-2`}>
                                <GiHamburgerMenu />
                                <p className='mb-0'>CATEGORIES</p>
                            </div>
                        </div>
                        <div className='col-lg-9'>
                            <ul className='pl-0 mb-0 d-flex align-items-center gap-3 p-2'>
                                <li>Home</li>
                                <li>Combo Offer</li>
                                <li>News Feed</li>
                                <li>Order Tracker</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className={`${style.heroSec}`}>
                    <div className='row'>
                        <div className={`col-lg-3 ${style.heroCateContainer}`}>
                            <div className={style.heroCate}>
                                <ul className='pl-0 mt-1 p-2'>
                                    <li className='d-flex align-items-center justify-content-between'>
                                        <p className='mb-0'><img src="image/t-shirt.webp" alt="" className='img-fluid' width={"30px"} /> Men's Clothing & Fashion</p>
                                        <FaCaretDown />
                                    </li>
                                </ul>
                                <div className={`${style.dropDown}`}>
                                    <li>Men's T-Shirt</li>
                                    <li> T-Shirt</li>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-9 col-12'>
                            <Carousel fade>
                                <Carousel.Item>
                                    <img src="image/hero-bannar-1.jpg" alt="" className='img-fluid' />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img src="image/hero-bannar-2.jpg" alt="" className='img-fluid' />
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>

            <DressSlider />

            <div className={style.featureProductSection}>
                <div className="container">
                    <div className={`${style.featureProductConatiner} mb-3`}>
                        <div className={`${style.featureProductHeader} d-flex align-items-center justify-content-between p-3`}>
                            <h4 className='fw-bold'>Featured Products</h4>
                            <button><Link to={'/viewpage'}>VIEW ALL</Link></button>
                        </div>
                        <div className={style.border}></div>
                        <CardSlider />
                    </div>
                </div>
            </div>

            <div className={style.mensProductSection}>
                <div className="container">
                    <div className={`${style.mensProductConatiner} mb-3`}>
                        <div className={`${style.mensProductHeader} d-flex align-items-center justify-content-between p-3`}>
                            <h4 className='fw-bold'>Featured Products</h4>
                            <button><Link to={'/viewpage'}>VIEW ALL</Link></button>
                        </div>
                        <div className={style.border}></div>
                        <div className='d-flex align-items-center gap-3 p-1 flex-wrap justify-content-center'>
                            {productData.map((item) =>
                                <div key={item.id} className={`${styles.cards}`}>
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
                                            img:item.img,
                                            title:item.title,
                                            price:item.price,
                                            quantity: 1
                                        }))}}><Link to={'/order'}>অর্ডার করুন</Link></button>
                                    </div>
                                </div>)}
                        </div>

                    </div>

                </div>
            </div>


        </div>
    )
}

export default Home
