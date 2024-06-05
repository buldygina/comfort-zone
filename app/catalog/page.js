'use client'
import React from 'react';
import Navbar from "/components/Navbar";
import { VscAccount } from "react-icons/vsc";
import {AiOutlineClose, AiOutlineHeart, AiOutlineUnorderedList} from "react-icons/ai";
import {SlBasket} from "react-icons/sl";
import '@/app/catalog/catalog.css'
import { AiOutlineArrowRight } from "react-icons/ai";
import Link from "next/link";
import {CgCloseO} from "react-icons/cg";
import {useRouter} from "next/navigation";
const colors = ["grey", "grey", "grey"];
const delay = 5000;
export default function Catalog() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [isMenuOpen2, setIsMenuOpen2 ] = React.useState(false);
    const hamburgerMenu2 = () => {
        setIsMenuOpen2(!isMenuOpen2);
    };
    React.useEffect(() => {
        const body = document.body;
        if (isMenuOpen2) {
            body.classList.add('scroll-lock2');
        } else {
            body.classList.remove('scroll-lock2');
        }

        // Очистка при размонтировании компонента
        return () => {
            body.classList.remove('scroll-lock2');
        };
    }, [isMenuOpen2]);
    const [index2, setIndex2] = React.useState(0);
    const timeoutRef2 = React.useRef(null);
    const [isOpen2, setIsOpen2] = React.useState(false);

    const hamburgerMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    React.useEffect(() => {
        const body = document.body;
        if (isMenuOpen) {
            body.classList.add('scroll-lock');
        } else {
            body.classList.remove('scroll-lock');
        }

        // Очистка при размонтировании компонента
        return () => {
            body.classList.remove('scroll-lock');
        };
    }, [isMenuOpen]);

    const [index, setIndex] = React.useState(0);
    const timeoutRef = React.useRef(null);
    const [isOpen, setIsOpen] = React.useState(false);

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }
    React.useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () =>
                setIndex((prevIndex) =>
                    prevIndex === colors.length - 1 ? 0 : prevIndex + 1
                ),
            delay
        );
        return () => {
            resetTimeout();
        };
    }, [index]);
    const router = useRouter()
    const handleButtonClick = (e) => {
        e.preventDefault()
        router.push('/items')
    };
    return (
        <div className='MainPage'>
            <div className="slideshow">
                <div className='hamburgerMenu'>
                    {isMenuOpen2 &&
                        <div className="hamburgerMenu2">
                            <Link href={"/shoppinginformation#Stores"} style={{textDecoration: "none", color: "inherit"}}><p>Stores</p></Link>
                            <Link href={"/shoppinginformation#Guarantee"} style={{textDecoration: "none", color: "inherit"}}><p>Guarantee</p></Link>
                            <Link href={"/shoppinginformation#Delivery"} style={{textDecoration: "none", color: "inherit"}}><p>Delivery</p></Link>
                            <Link href={"/shoppinginformation#Work time"} style={{textDecoration: "none", color: "inherit"}}><p>Work time</p></Link>
                            <Link href={"/shoppinginformation#Sales"} style={{textDecoration: "none", color: "inherit"}}><p>Sales%</p></Link>
                        </div>
                    }
                    <div className='hamburgerMenu' onClick={hamburgerMenu2}>
                        {isMenuOpen2 ? <AiOutlineClose size={30} /> : <AiOutlineUnorderedList size={30} />}
                    </div>
                </div>
                <div className="text">comfort zone</div>
                <div className='button'>
                    <Link href='/account' className='no-underline'><VscAccount size={27} /></Link>
                    <div className='hamburgerMenuContainer'>
                        {isMenuOpen &&
                            <div className="menuHeart">
                                <p>Favourites</p>
                                <div className='hamburgerMenuFavourites'>
                                    <img src={"/3 свеча.png"} style={{ width: '15%', height: "15%", borderRadius:'25px' }} alt="" />
                                    <img src={"/4 свеча.png"} style={{ width: '15%', height: "15%", borderRadius:'25px' }} alt="" />
                                    <div className='favouritesText'>
                                        <p>CANDLE "WARM"</p>
                                        <p>CANDLE "PINK SET"</p>
                                    </div>
                                    <div className='descriptionOfItems'>
                                        <p>22$</p>
                                        <p>19$</p>
                                        <div className='deleteItemFavourites'>
                                            <CgCloseO size={27}/>
                                            <CgCloseO size={27}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                        <div className='hamburgerMenuHeart' onClick={hamburgerMenu}>
                            {isMenuOpen ? <AiOutlineClose size={30} /> : <AiOutlineHeart size={30} />}
                        </div>
                    </div>
                    <Link href='/basket' className='basketUnderline'><SlBasket size={28} /></Link>
                </div>
            </div>
            <div className='buttons'>
                <p>cups</p>
                <p>pillows</p>
                <p>plaids</p>
            </div>
            <div className='textCandles'>
                <p>Home is where comfort begins, and happiness never ends.</p>
            </div>
            <div className='imageCandles'>
            <img src={"/свечи.png"} style={{width: "20%"}} alt=""/>
            </div>
           <div className='candleCatalog'> <p>CANDLE CATALOG</p></div>
            <div className='items'>
            <div className='Items' style={{width: "70%"}}><img src={"/1 свеча.png"} style={{width: "100%"}} alt=""/>
                <div className='Good'>
                    <div className='buttonItems'><p>CANDLE "PINK"</p>
                        <div><AiOutlineHeart/><SlBasket/></div>
                    </div>
                </div>
            </div>
            <div className='Items' style={{width: "70%"}}><img src={"/2 свеча.png"} style={{width: "100%"}} alt=""/>
                <div className='Good'>
                    <div className='buttonItems'><p>CANDLE "COSINESS"</p>
                        <div><AiOutlineHeart/><SlBasket/></div>
                    </div>
                </div>
            </div>
            <div className='Items' style={{width: "70%"}}><img src={"/3 свеча.png"} style={{width: "100%"}} alt=""/>
                <div className='Good'>
                    <div className='buttonItems'><p>CANDLE “WARM”</p>
                        <div><AiOutlineHeart/><SlBasket/></div>
                    </div>
                </div>
            </div>
            </div>
            <div className='items'>
                <div className='Items' onClick={handleButtonClick} style={{width: "70%"}}><img src={"/5 свеча.png"} style={{width: "100%"}} alt=""/>
                    <div className='Good'>
                        <div className='buttonItems'><p>CANDLE “SOFTNESS”</p>
                            <div><AiOutlineHeart/><SlBasket/></div>
                        </div>
                    </div>
                </div>
                <div className='Items' style={{width: "70%"}}><img src={"/4 свеча.png"} style={{width: "100%"}} alt=""/>
                    <div className='Good'>
                        <div className='buttonItems'><p>CANDLE “PINK SET”</p>
                            <div><AiOutlineHeart/><SlBasket/></div>
                        </div>
                    </div>
                </div>
                <div className='Items' style={{width: "70%"}}><img src={"/6 свеча.png"} style={{width: "100%"}} alt=""/>
                    <div className='Good'>
                        <div className='buttonItems'><p>CANDLE “SEASHELL”</p>
                            <div><AiOutlineHeart/><SlBasket/></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='back'>
            <Link href='/' style={{textDecoration: "none", color: "inherit"}}><div className='buttonBack'><p>BACK</p></div></Link>
                <AiOutlineArrowRight /></div>
            <div className='footer'>
                    <div className='footerText'>
                        <Link href={"/shoppinginformation#Stores"} style={{textDecoration: "none", color: "inherit"}}><p>stores</p></Link>
                        <Link href={"/shoppinginformation#Guarantee"} style={{textDecoration: "none", color: "inherit"}}><p>guarantee</p></Link>
                        <Link href={"/shoppinginformation#Delivery"} style={{textDecoration: "none", color: "inherit"}}><p>delivery</p></Link>
                        <Link href={"/shoppinginformation#Work time"} style={{textDecoration: "none", color: "inherit"}}><p>work time</p></Link>
                    </div>
                <p className="email">comfortzone@mail.ru</p>
            </div>
        </div>
    );
}