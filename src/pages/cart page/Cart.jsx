import React from 'react'
import style from './Cart.module.css'
import { MdDelete } from "react-icons/md";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deletes } from '../../store/cart';
const Cart = () => {

    const dispatch = useDispatch()
    const cartItem = useSelector(store => store.cart.cartItem)

    const total = (item) => {
        return item.price * item.quantity
    }

    const subTotal = cartItem.reduce((totalItem, item) => {
        return totalItem + total(item)
    }, 0)
    return (
        <div className='my-5'>
            <div className="container">
                <div className='row'>
                    <div className='col-lg-8 col-12'>
                        <div className={`${style.cartAllItems} `}>
                            <div className={`${style.cartItemContainer} py-2 px-2`}>
                                <div className={`${style.cartItemHeader} d-flex align-items-center justify-content-between p-2`}>
                                    <p className='mb-0'>PRODUCT</p>
                                    <p className='mb-0'>PRODUCT NAME</p>
                                    <p className='mb-0'>PRICE</p>
                                    <p className='mb-0'>QUANTITY</p>
                                    <p className='mb-0'>TOTAL</p>
                                    <p className='mb-0'>ACTION</p>
                                </div>
                                {cartItem.map((item) => {
                                    return <div key={item.id} className={`${style.cartItemBody} d-flex align-items-center justify-content-between my-3 -2`}>
                                        <img src={item.img} alt="" width={"50px"} />
                                        <p className='mb-0'>{item.title}</p>
                                        <p className='mb-0'>{item.quantity} * {item.price}</p>
                                        <input type="text" value={item.quantity} className='text-center' />
                                        <p className='mb-0'>{total(item)}</p>
                                        <MdDelete className='fs-4' onClick={() => { dispatch(deletes(item.id)) }} />
                                    </div>
                                })}

                            </div>
                            <div className='py-2 px-2 d-flex align-items-center justify-content-between mt-5 mb-2'>
                                <button className={style.Btn1}><Link to={'/'}>Return to shop</Link></button>
                                <button className={style.Btn2}><Link to={'/order'}>Next Step</Link></button>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 col-12'>
                        <div className={`${style.summry} p-3`}>
                            <div className='d-flex align-items-center justify-content-between my-3'>
                                <h5 className='mb-0 fs-5'>Summary</h5>
                                <button>{cartItem.length} item</button>
                            </div>
                            <hr />
                            <div className='border'>
                                <div className={`${style.totalProductBox} d-flex align-items-center justify-content-between p-1`}>
                                    <p className='mb-0'>Product</p>
                                    <p className='mb-0'>TOTAL</p>
                                </div>
                                {cartItem.map((item) => {
                                    return <div key={item.id} className={`${style.totalProduct} d-flex align-items-center justify-content-between p-1 mt-1 mb-3`}>
                                        <p className='mb-0'>{item.title} × {item.quantity}</p>
                                        <p className='mb-0'>৳ {total(item)}</p>
                                    </div>
                                })}
                            </div>
                            <div className={`${style.subTotalBox} border my-2 p-2 d-flex flex-column gap-3`}>
                                <div className='d-flex align-items-center justify-content-between gray'>
                                    <p className='mb-0'>Subtotal</p>
                                    <p className='mb-0'>৳ {subTotal.toFixed(2)}</p>
                                </div>
                                <div className='d-flex align-items-center justify-content-between'>
                                    <p className='mb-0'>Tax</p>
                                    <p className='mb-0'>৳0</p>
                                </div>
                                <div className='d-flex align-items-center justify-content-between gray'>
                                    <p className='mb-0'>Total Shipping</p>
                                    <p className='mb-0'>৳0</p>
                                </div>
                                <div className='d-flex align-items-center justify-content-between'>
                                    <p className='mb-0 fw-bold'>Total</p>
                                    <p className='mb-0 fw-bold'>৳ {subTotal.toFixed(2)}</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart
