import { useState } from 'react';
import { FaShoppingCart } from "react-icons/fa";
import Offcanvas from 'react-bootstrap/Offcanvas';
import style from "./CartOffCan.module.css"
import { MdDelete } from "react-icons/md";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deletes } from '../../store/cart';
function CartOffCan() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const cartItem = useSelector(store => store.cart.cartItem)

    const dispatch = useDispatch()

    const total = (item) =>{
        return item.price * item.quantity
    }

    const subTotal = cartItem.reduce((totalItem, item)=>{
        return totalItem + total(item)
    },0)

    return (
        <>
            <div variant="none" onClick={handleShow} className='mb-2'>
                <FaShoppingCart/>
                <div className={style.cartNum}>{cartItem.length}</div>
            </div>

            <Offcanvas show={show} onHide={handleClose} placement='end'>
                <Offcanvas.Header closeButton className={style.cartHeader}>
                    <Offcanvas.Title className='fw-bold'>Cart Items</Offcanvas.Title>
                </Offcanvas.Header>
                {cartItem.length !== 0 ? <Offcanvas.Body>
                    <div className='d-flex flex-column gap-3 mb-5'>
                        {cartItem.map((item) => {
                            return <div key={item.id} className={`${style.cartItemBox} d-flex align-items-center justify-content-between p-3`}>
                                <div className='d-flex align-items-center gap-3'>
                                    <img src={item.img} alt="" className='img-fluid' width={"50px"} />
                                    <div>
                                        <p className='mb-0'>{item.title}</p>
                                        <p className='mb-0'>৳ {item.price}</p>
                                    </div>
                                </div>
                                <MdDelete className='fs-4'  onClick={()=>{dispatch(deletes(item.id))}}/>
                            </div>

                        })}

                    </div>
                    <hr />
                    <div className='text-end'>
                        <p>Total Sub: ৳ {subTotal} </p>
                        <button className='cartbtn' onClick={handleClose}><Link to={'/cart'}>View Cart</Link></button>
                    </div>
                </Offcanvas.Body> : ""}
            </Offcanvas>
        </>
    );
}

export default CartOffCan;