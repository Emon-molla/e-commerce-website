import React from 'react'
import style from '../Home/Home.module.css'
import productData from '../../../mensProduct.json'
import { Link } from 'react-router-dom'
import styles from '../../conponent/card slider/CardSlider.module.css'
import { useDispatch } from 'react-redux'
import { addCart } from '../../store/cart'
const ViewProduct = () => {
    const dispatch = useDispatch()
    return (
        <div>
            <div className={style.mensProductSection}>
                <div className="container">
                    <div className={`${style.mensProductConatiner} mb-3`}>
                        <div className='d-flex align-items-center gap-3 p-3 flex-wrap justify-content-center'>
                            {productData.map((item) =>
                                <div key={item.id} className={`${styles.cards}`}>
                                    <Link to={`/singlePage/${item.id}`}>
                                        <div className={styles.cardImg}>
                                            <img src={item.img} alt="" className='img-fluid' />
                                            <div className={styles.disCard}>{item.discount}%</div>
                                        </div></Link>
                                    <div className={styles.cardBody}>
                                        <p className='mb-0'>{item.title}</p>
                                        <h5 className='mb-0 fw-bold'> ৳ {item.price}</h5>
                                        <button onClick={()=>{dispatch(addCart({
                                            id:item.id,
                                            title:item.title,
                                            img:item.img,
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

export default ViewProduct
