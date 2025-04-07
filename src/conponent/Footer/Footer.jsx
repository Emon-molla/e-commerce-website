import React from 'react'
import style from './Footer.module.css'
const Footer = () => {
  return (
    <footer>
                <div className="container">
                    <div className={`${style.footerListContainer} d-flex justify-content-between py-5 flex-wrap`}>
                        <div className={`${style.footerList}`}>
                            <h5>Contact Us</h5>
                            <p>Address:</p>
                            <h6>Dhaka, Bangladesh</h6>
                        </div>

                        <div className={`${style.footerList}`}>
                            <h5>Informations</h5>
                            <ul>
                                <li>About us</li>
                                <li>Contact Us</li>
                                <li>Terms & Conditions</li>
                                <li>FAQ</li>                              
                            </ul>
                        </div>
                        <div className={`${style.footerList}`}>
                            <h5>My Account</h5>
                            <ul>
                                <li>Login</li>
                                <li>Order History</li>
                                <li>Company</li>                            
                            </ul>
                        </div>
                        <div className={`${style.footerList}`}>
                            <h5>Why Choose Us</h5>
                            <ul>
                                <li>Help Center</li>
                                <li>Customer Service</li>
                                <li>Shopping Guide</li>                            
                            </ul>
                        </div>
                    </div>
                </div>
                <p className='mb-0 text-center py-3 container'>© All rights reserved by Ecommerce | Website Designed by: Ecommerce</p>
            </footer>
  )
}

export default Footer
