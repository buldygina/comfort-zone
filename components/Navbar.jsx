import React, {useState} from "react";
import style from './Navbar.module.css'
import {AiOutlineMenu, AiOutlineClose} from "react-icons/ai";

const Navbar = () => {
    const [nav, setNav] = useState(false)
    return (
        <header className={style.header}>
            <div className={style.container}>
                <div className={style.box}>
                    <ul className={nav ? [style.menu, style.active].join(' ') : [style.menu]}>
                        <li>
                            <a className={style.link} href="##">Stores</a>
                        </li>
                        <li>
                            <a className={style.link} href="##">Guarantee</a>
                        </li>
                        <li>
                           <a className={style.link} href="##">Delivery</a>
                        </li>
                        <li>
                            <a className={style.link} href="##">Work time</a>
                        </li>
                        <li>
                             <a className={style.link} href="##">Sales %</a>
                        </li>
                    </ul>
                    <div onClick={() => setNav(!nav)} className={style.mobile_btn}>
                        {nav ? <AiOutlineClose size={25}/> : <AiOutlineMenu size={25}/>}
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Navbar;