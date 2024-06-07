'use client'
import React from 'react';
import Navbar from "/components/Navbar";
import {VscAccount} from "react-icons/vsc";
import {AiOutlineClose, AiOutlineHeart, AiOutlineUnorderedList} from "react-icons/ai";
import {SlBasket} from "react-icons/sl";
import '@/app/catalog/catalog.css'
import {AiOutlineArrowRight} from "react-icons/ai";
import Link from "next/link";
import {CgCloseO} from "react-icons/cg";
import {useRouter} from "next/navigation";
import FavouriteItem from "@/components/FavouriteItem";
import {useCookies} from "react-cookie";
import {useGetSpecificCategoryQuery} from "@/api/api";

const colors = ["grey", "grey", "grey"];
const delay = 5000;
export default function Catalog({params}) {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [isMenuOpen2, setIsMenuOpen2] = React.useState(false);
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
    const {data, error} = useGetSpecificCategoryQuery({categoryId: params.id})
    return (
        <div className='MainPage'>
            <div className="slideshow">
                <div className='hamburgerMenu'>
                    {isMenuOpen2 &&
                        <div className="hamburgerMenu2">
                            <Link href={"/shoppinginformation#Stores"}
                                  style={{textDecoration: "none", color: "inherit"}}><p>Stores</p></Link>
                            <Link href={"/shoppinginformation#Guarantee"}
                                  style={{textDecoration: "none", color: "inherit"}}><p>Guarantee</p></Link>
                            <Link href={"/shoppinginformation#Delivery"}
                                  style={{textDecoration: "none", color: "inherit"}}><p>Delivery</p></Link>
                            <Link href={"/shoppinginformation#Work time"}
                                  style={{textDecoration: "none", color: "inherit"}}><p>Work time</p></Link>
                            <Link href={"/shoppinginformation#Sales"}
                                  style={{textDecoration: "none", color: "inherit"}}><p>Sales%</p></Link>
                        </div>
                    }
                    <div className='hamburgerMenu' onClick={hamburgerMenu2}>
                        {isMenuOpen2 ? <AiOutlineClose size={30}/> : <AiOutlineUnorderedList size={30}/>}
                    </div>
                </div>
                <div className="text">comfort zone</div>
                <div className='button'>
                    <Link href='/account' className='no-underline'><VscAccount size={27}/></Link>
                    <div className='hamburgerMenuContainer'>
                        {isMenuOpen &&
                            <div className="menuHeart">
                                <p>Favourites</p>
                                <div className='hamburgerMenuFavourites'>
                                    <img src={"/3 свеча.png"}
                                         style={{width: '15%', height: "15%", borderRadius: '25px'}} alt=""/>
                                    <img src={"/4 свеча.png"}
                                         style={{width: '15%', height: "15%", borderRadius: '25px'}} alt=""/>
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
                            {isMenuOpen ? <AiOutlineClose size={30}/> : <AiOutlineHeart size={30}/>}
                        </div>
                    </div>
                    <Link href='/basket' className='basketUnderline'><SlBasket size={28}/></Link>
                </div>
            </div>
            <div className='buttons'>
                <p>cups</p>
                <p>pillows</p>
                <p>plaids</p>
            </div>
            <div className='textCandles'>
                <p>{data.description}</p>
            </div>
            <div className='imageCandles'>
                <img src={data.image} style={{width: "20%"}} alt=""/>
            </div>
            <div className='candleCatalog'><p>{data.name} CATALOG</p></div>
            <div className='items'>
                {data?.items.length > 0 && data.items.map(item => <Link href={`/catalog/${params.id}/items/${item.id}`} key={item.id}>
                    <div className='Items' style={{width: "70%"}}><img src={item.image} style={{width: "100%"}} alt=""/>
                        <div className='Good'>
                            <div className='buttonItems'><p>{item.name}</p>
                                <div className='buttonsFavourites'><FavouriteItem defaultLiked={false}/><SlBasket/>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>)
                }
            </div>
            <div className='back'>
                <Link href='/' style={{textDecoration: "none", color: "inherit"}}>
                    <div className='buttonBack'><p>BACK</p></div>
                </Link>
                <AiOutlineArrowRight/></div>
            <div className='footer'>
                <div className='footerText'>
                    <Link href={"/shoppinginformation#Stores"} style={{textDecoration: "none", color: "inherit"}}>
                        <p>stores</p></Link>
                    <Link href={"/shoppinginformation#Guarantee"} style={{textDecoration: "none", color: "inherit"}}>
                        <p>guarantee</p></Link>
                    <Link href={"/shoppinginformation#Delivery"} style={{textDecoration: "none", color: "inherit"}}>
                        <p>delivery</p></Link>
                    <Link href={"/shoppinginformation#Work time"} style={{textDecoration: "none", color: "inherit"}}>
                        <p>work time</p></Link>
                </div>
                <p className="email">comfortzone@mail.ru</p>
            </div>
        </div>
    );
}