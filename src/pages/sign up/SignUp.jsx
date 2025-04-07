import React from 'react'
import style from './SignUp.module.css'
import { Link } from 'react-router-dom'
const SignUp = () => {
  return (
    <div className='container'>
      <div className={`${style.formContainer} p-4`}>
        <h4 className='text-center mb-4'>Create a new account</h4>
        <form action="#">
            <div className={`${style.formBox}`}>
                <label htmlFor="name">Name *</label>
                <input type="text"/>
            </div>
            <div className={`${style.formBox}`}>
                <label htmlFor="email">Email *</label>
                <input type="text"/>
            </div>
            <div className={`${style.formBox}`}>
                <label htmlFor="phone">Phone *</label>
                <input type="text"/>
            </div>
            <div className={`${style.formBox}`}>
                <label htmlFor="password">Password *</label>
                <input type="password"/>
            </div>
            <div className={`${style.formBox}`}>
                <label htmlFor="password">Conform Password *</label>
                <input type="password"/>
            </div>
            <button className='my-3'>Sign Up</button>
        </form>

        <h4 className='text-center my-4'>Already have an account? <span className='fw-bold'><Link to={'/signin'}>Login Now</Link></span></h4>
      </div>
    </div>
  )
}

export default SignUp
