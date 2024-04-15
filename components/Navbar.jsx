import React, {useState} from "react";
import style from './Navbar.module.css'
import {AiOutlineMenu, AiOutlineClose} from "react-icons/ai";
import Link from "next/link";

const Navbar = () => {
    const [nav, setNav] = useState(false)
    return (
        <div>
            <ul className={nav ? [style.menu, style.active].join(' ') : [style.menu]}>
                <li>
                    <Link className={style.link} href="#">Stores</Link>
                </li>
                <li>
                    <Link className={style.link} href="#">Guarantee</Link>
                </li>
                <li>
                    <Link className={style.link} href="#">Delivery</Link>
                </li>
                <li>
                    <Link className={style.link} href="#">Work time</Link>
                </li>
                <li>
                    <Link className={style.link} href="#">Sales %</Link>
                </li>
            </ul>
            <div onClick={() => setNav(!nav)} className={style.mobile_btn}>
                {nav ? <AiOutlineClose size={25}/> : <AiOutlineMenu size={25}/>}
            </div>
        </div>
    )
}
export default Navbar;