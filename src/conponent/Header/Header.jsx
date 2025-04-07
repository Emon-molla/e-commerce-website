import React, { useState } from 'react'
import style from './Header.module.css'
import { IoIosCall } from "react-icons/io";
import { IoSearchSharp } from "react-icons/io5";
import { FaHeart } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import CateOffcan from '../cate offcan/CateOffcan';
import { Link } from 'react-router-dom';
import CartOffCan from '../cart offcan/CartOffCan';
import { IoHome } from "react-icons/io5";
import { IoBag } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
const Header = () => {

    const [showSearch, setShowSearch] = useState(false)

    const handleSearch = () =>{
        setShowSearch(true)
    }
    const handleCrossBtn = () =>{
        setShowSearch(false)
    }
    return (
        <header>
            <div className={`${style.headerTop} py-2`}>
                <div className="container">
                    <div className={`${style.headerTopContainer}`}>
                        <div className='d-flex align-items-center justify-content-between'>
                            <div className={`${style.headerTopLeft} d-flex align-items-center gap-2 fs-6`}>
                                <IoIosCall />
                                <p className='mb-0'>Have any question? Call Us +8801710311191</p>
                            </div>
                            <div className={`${style.headerTopRight} d-flex align-items-center gap-3 fs-6 fw-bold`}>
                                <p className='mb-0 ps'><Link to={'/signin'}>Sign In</Link></p>
                                <p className='mb-0'>|</p>
                                <p className='mb-0 ps'><Link to={'/signup'}>Sign Up</Link></p>
                            </div>
                        </div>
                    </div>
                    {showSearch === true ? <div className={style.extraSearch}>
                        <input type="text" placeholder='Search product' />
                        <div className={style.extraSearchBtn} onClick={handleCrossBtn}>
                            <RxCross2 />
                        </div>
                    </div> : <p className='text-center'>Wellcome Our Website</p>}
                                       
                </div>
            </div>

            <div className={`${style.headerMid} py-1`}>
                <div className='container'>
                    <div className='d-flex align-items-center justify-content-between'>
                        <div className={`${style.headerLogo} d-flex align-items-center gap-2`}>
                            <CateOffcan />
                            <Link to={'/'}><img src="image/logo.png" alt="" className='img-fluid' width={"60px"} /></Link>
                        </div>
                        <div className={`${style.headerSearchBox} `}>
                            <div className='d-flex align-items-center'>
                                <input type="text" placeholder='Search' />
                                <div className={style.searchIcon}>
                                    <IoSearchSharp className='fw-bold' />
                                </div>
                            </div>

                        </div>
                        <div className={`${style.headerCartHeart} d-flex align-items-center gap-3 fs-3`}>
                            <IoSearchSharp className={style.searchIcon2}  onClick={handleSearch}/>
                            <FaHeart className={style.heartIcon} />
                            <CartOffCan />
                        </div>
                    </div>
                </div>
            </div>


            <div className={`${style.headerBottom}`}>
                <div className="container">
                    <div className='d-flex align-items-center justify-content-between'>
                        <div className={style.headerBottomBox}>
                            <CateOffcan />
                            <p className='mb-0'>Categorys</p>
                        </div>
                        <div className={style.headerBottomBox}>
                            <Link to={'/'}><IoHome className='fs-3' />
                                <p className='mb-0'>Home</p></Link>
                        </div>
                        <div className={style.headerBottomBox}>
                            <Link to={'/cart'}><IoBag className='fs-3' />
                                <p className='mb-0'>Cart</p></Link>
                        </div>
                        <div className={style.headerBottomBox}>
                            <Link to={'/signin'}><FaUser className='fs-3' />
                                <p className='mb-0 '>Account</p></Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
