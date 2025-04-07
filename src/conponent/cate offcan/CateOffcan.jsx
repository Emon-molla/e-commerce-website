import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { GiHamburgerMenu } from "react-icons/gi";
import style from './CateOffcan.module.css'
import { IoMdAdd } from "react-icons/io";
function CateOffcan() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [showDropMenu, setshowDropMenu] = useState(false)

    const  handleClick  = ()=>{
        return setshowDropMenu(!showDropMenu)
    }

    return (
        <>
            <div variant="none" onClick={handleShow}>
                <GiHamburgerMenu className='hamOffcan' />
            </div>

            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton className={style.offCanHeader}>
                    <Offcanvas.Title>| CATEGORIES</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className={style.offcanBody}>
                    <ul className='fs-5'>
                        <li className='d-flex align-items-center justify-content-between pb-2'>Men's Clothing & Fashion <IoMdAdd  onClick={handleClick}/></li>
                    </ul>
                    {showDropMenu === true ? <div className={style.drop1}>
                        <li>Men's T-shirt</li>
                        <li>T-shirt</li>
                    </div> : ""}
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default CateOffcan;