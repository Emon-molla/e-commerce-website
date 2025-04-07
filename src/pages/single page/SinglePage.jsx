import React, { useEffect, useState } from 'react'
import style from './SinglePage.module.css'
import productData from '../../../allProduct.json'
import { useParams } from 'react-router-dom'
import CardSlider from '../../conponent/card slider/CardSlider'
import styles from '../Home/Home.module.css'
import { useDispatch } from 'react-redux'
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa";
import { addCart } from '../../store/cart'
const SinglePage = () => {

  const { id } = useParams()
  const product = productData.filter((item) => item.id === id)

  const [show, setshow] = useState(true)
  const [color, setcolor] = useState(0)
  const [size, setsize] = useState(0)
  const [quantity, setquantity] = useState(1)


  // dispatch

  const dispatch = useDispatch()

  const handleShowDes = () => {
    setshow(true)
  }
  const handleShowRev = () => {
    setshow(false)
  }

  // handle quantity

  const handleMinus = () => {
    if (quantity > 1) {
      setquantity(quantity - 1)
    }
  }

  const handlePlus = () => {
    setquantity(quantity + 1)
  }


  // handle colors

  const handleBlackColor = () => {
    setcolor(1)
  }
  const handleWhiteColor = () => {
    setcolor(2)
  }

  // handle size 

  const handleSizeS = () => {
    setsize(1)
  }
  const handleSizeM = () => {
    setsize(2)
  }
  const handleSizeL = () => {
    setsize(3)
  }
  const handleSizeXL = () => {
    setsize(4)
  }

  return (
    <div>
      <div className={`${style.singleProductContainer} container my-5 p-3`}>
        {product.map((item) => <div key={item.id} className='row'>
          <div className='col-lg-6 col-12 mb-3'>
            <img src={item.img} alt="" className='img-fluid' />
          </div>
          <div className='col-lg-6 col-12'>
            <div className={`${style.singleProductContent} p-3 d-flex flex-column`}>
              <h4 className='mb-0 fs-4 fw-bold'>{item.title}</h4>
              <hr />
              <p className='mb-0 fs-5 ap'> <span className='me-3 as'>৳ {item.discount}</span>৳ {item.price}</p>
              <hr />
              <div className={`${style.quantityBox} d-flex align-items-center gap-3`}>
                <p className='mb-0'>Quantity:</p>
                <FaMinus className='pointer' onClick={handleMinus} />
                <input type="number" className='text-center' value={quantity} />
                <FaPlus className='pointer' onClick={handlePlus} />
              </div>
              <hr />
              <div className={`${style.colorSizeBtn} d-flex flex-column gap-3`}>
                <div className={`${style.color} d-flex align-items-center gap-3`}>
                  <h5 className='mb-0 fw-bold'>কালার:</h5>
                  <div className={color === 1 ? "border p-2 rounded fs-5 perpel pointer" : "border p-2 rounded fs-5 pointer"} onClick={handleBlackColor}>Black</div>
                  <div className={color === 2 ? "border p-2 rounded fs-5 perpel pointer" : "border p-2 rounded fs-5 pointer"} onClick={handleWhiteColor}>White</div>
                </div>
                <div className={`${style.size} d-flex align-items-center gap-3`}>
                  <h5 className='mb-0 fw-bold'>সাইজ:</h5>
                  <div className={size === 1 ? 'border p-2 rounded fs-5 perpel pointer' : 'border p-2 rounded fs-5 pointer'} onClick={handleSizeS}>S</div>
                  <div className={size === 2 ? 'border p-2 rounded fs-5 perpel pointer' : 'border p-2 rounded fs-5 pointer'} onClick={handleSizeM}>M</div>
                  <div className={size === 3 ? 'border p-2 rounded fs-5 perpel pointer' : 'border p-2 rounded fs-5 pointer'} onClick={handleSizeL}>L</div>
                  <div className={size === 4 ? 'border p-2 rounded fs-5 perpel pointer' : 'border p-2 rounded fs-5 pointer'} onClick={handleSizeXL}>XL</div>
                </div>
                <div className={`${style.addCartBtn} d-flex align-items-center gap-4 mt-3`}>
                  <button onClick={()=>{dispatch(addCart({
                    id:item.id,
                    title:item.title,
                    img:item.img,
                    quantity:quantity,
                    price:item.price
                  }))}}>কার্টে যোগ করুন</button>
                  <button>অর্ডার করুন</button>
                </div>
                <hr />
              </div>
              <div className='d-flex align-items-center gap-3 my-3'>
                <p className='mb-0'>Charge:</p>
                <div>
                  <p className='mb-0'>ঢাকা সিটির মধ্যে ডেলিভারি চার্জ ৬০ টাকা</p>
                  <p className='mb-0'>ঢাকা সিটির বাইরে ডেলিভারি চার্জ ১০০ টাকা</p>
                </div>
              </div>
              <hr />
              <div className={style.callBtn}>
                <button>কল করুন 01644439523</button>
              </div>
              <hr />
            </div>
          </div>
        </div>)}
      </div>

      <div className={`${style.revAndDes} container p-3 rounded`}>
        <div className={`${style.revAndDesHeader} d-flex align-items-center gap-4 `}>
          <h6 className={show === true ? "redpad" : "red"} onClick={handleShowDes}>DESCRIPTION</h6>
          <h6 className={show === false ? "greenpad" : "green"} onClick={handleShowRev}>REVIEW</h6>
        </div>
        {show === true ? <div className={`${style.desBody} mt-3`}>
          <p>Material: 200GSM হাই-কোয়ালিটি কটন</p>
          <p>✔ Available Sizes: M, L, XL, XXL</p>
          <p>✔ DTF print</p>
          <p>2 colour ash and black</p>
        </div> : <div className={`${style.revBody} my-4`}>

        </div>}
      </div>


      <div className='my-5'>
        <div className={styles.featureProductSection}>
          <div className="container">
            <div className={`${styles.featureProductConatiner} mb-3`}>
              <div className={`${styles.featureProductHeader} d-flex align-items-center  p-3`}>
                <h4 className='fw-bold'>Related products</h4>
              </div>
              <div className={styles.border}></div>
              <CardSlider />
            </div>
          </div>
        </div>
      </div>

      <div className='my-5'>
        <div className={styles.featureProductSection}>
          <div className="container">
            <div className={`${styles.featureProductConatiner} mb-3`}>
              <div className={`${styles.featureProductHeader} d-flex align-items-center justify-content-between p-3`}>
                <h4 className='fw-bold'>Promotional Offers</h4>
                <button>VIEW ALL</button>
              </div>
              <div className={styles.border}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SinglePage
