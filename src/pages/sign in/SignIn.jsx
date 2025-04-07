import React from 'react'
import style from '../sign up/SignUp.module.css'
import { Link } from 'react-router-dom'
const SignIn = () => {
    return (
        <div className='container'>
            <div className={`${style.formContainer} p-4`}>
                <h4 className='text-center mb-4'>Hello, Welcome to your account.</h4>
                <form action="#">
                    <div className={`${style.formBox}`}>
                        <label htmlFor="email">Email *</label>
                        <input type="text" />
                    </div>
                    <div className={`${style.formBox}`}>
                        <label htmlFor="password">Password *</label>
                        <input type="password" />
                    </div>
                    <button className='my-3'>Login</button>
                </form>
                <p className='text-center'>Forget Password ?</p>
                <h4 className='text-center my-4'>Need an account? <span className='fw-bold'><Link to={'/signup'}>Register Now</Link> </span></h4>
            </div>
        </div>
    )
}

export default SignIn
