import React from 'react'
import style from './Order.module.css'
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6"
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { deletes, minus, pluse } from '../../store/cart';
const Order = () => {
    const cartItem = useSelector(store => store.cart.cartItem)

    const dispatch = useDispatch()

    const total = (item) => {
        return item.price * item.quantity
    }

    const subTotal = cartItem.reduce((totalItem, item) => {
        return totalItem + total(item)
    }, 0)

    const totalPay = subTotal + 60
    return (
        <div className='my-5'>
            <div className="container">
                <div className='row'>
                    <div className='col-lg-6 col-12'>
                        <div className={`${style.orderForm} p-3 rounded`}>
                            <div className={`${style.orderFormHeader} p-1 rounded mt-3 mb-4`}>
                                <h4 className=' text-center mb-0'>অর্ডার করতে নিচের ফর্মটি পূরণ করুন ....</h4>
                            </div>
                            <form action="#" className='d-flex flex-column gap-4'>
                                <div className={style.orderFormBox}>
                                    <label htmlFor="আপনার নাম">আপনার নাম</label>
                                    <input type="text" placeholder='আপনার নাম' />
                                </div>
                                <div className={style.orderFormBox}>
                                    <label htmlFor="আপনার ঠিকানা">আপনার ঠিকানা</label>
                                    <input type="text" placeholder='আপনার ঠিকানা' />
                                </div>
                                <div className={style.orderFormBox}>
                                    <label htmlFor="আপনার মোবাইল">আপনার মোবাইল</label>
                                    <input type="text" placeholder='আপনার মোবাইল' />
                                </div>
                                <div className={style.orderFormBox}>
                                    <label htmlFor="Select Area">Select Area</label>
                                    <select>
                                        <option value="ঢাকার ভেতরে">ঢাকার ভেতরে (60)</option>
                                        <option value="ঢাকার বাইরে">ঢাকার বাইরে (100)</option>
                                    </select>
                                </div>
                                <button>অর্ডার করুন</button>
                            </form>
                        </div>
                    </div>
                    <div className='col-lg-6 col-12'>
                        <div className={`${style.orderPlace} p-2 rounded`}>
                            <div className={`${style.orderPlaceHeader} pt-5 pb-2`}>
                                <p className='mb-0'>আপনার অর্ডার</p>
                            </div>
                            {cartItem.map((item) => {
                                return <div key={item.id} className={`${style.orderPlaceBox} d-flex align-items-center justify-content-between py-4 px-2 gap-4`}>
                                    <img src={item.img} alt="" width={"100px"} />
                                    <div className={`${style.editOrderItem} d-flex flex-column gap-1`}>
                                        <p className='mb-0'>{item.title}</p>
                                        <p className='mb-0'>৳ {item.price}</p>
                                        <div>
                                            <div className={`${style.orderQuantityBox} d-flex align-items-center gap-2`}>

                                                <FaMinus className='pointer' onClick={() => dispatch(minus({ id: item.id }))} />
                                                <input type="text" value={item.quantity} />
                                                <FaPlus className='pointer' onClick={() => dispatch(pluse({ id: item.id }))} />
                                            </div>
                                        </div>
                                    </div>
                                    <MdDelete className='fs-4'  onClick={()=>{dispatch(deletes(item.id))}}/>
                                </div>
                            })}
                            <hr />
                            <div className={`${style.orderSubTotal} d-flex flex-column gap-3 py-3`}>
                                <div className='d-flex align-items-center justify-content-between'>
                                    <p className='mb-0 fw-bold'>Subtotal:</p>
                                    <p className='mb-0 fw-bold'>৳ {subTotal.toFixed(2)}</p>
                                </div>
                                <div className='d-flex align-items-center justify-content-between'>
                                    <p className='mb-0 fw-bold'>Delivery charge:</p>
                                    <p className='mb-0'>৳ 60</p>
                                </div>
                                <div className='d-flex align-items-center justify-content-between'>
                                    <p className='mb-0 fw-bold'>Total:</p>
                                    <p className='mb-0 fw-bold'>৳ {totalPay.toFixed(2)}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Order
