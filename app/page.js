// eslint-disable-next-line @next/next/no-document-import-in-page
'use client'
import { Placemark, YMaps, Map } from '@pbe/react-yandex-maps';
import { useState } from "react";
import React from 'react';
import {AiFillHeart, AiOutlineUnorderedList} from "react-icons/ai";
import { VscAccount } from "react-icons/vsc";
import { AiOutlineHeart } from "react-icons/ai";
import { SlBasket } from "react-icons/sl";
import { AiOutlineClose } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { CgCloseO } from "react-icons/cg";
import Link from "next/link";
import FavouriteItem from "@/components/FavouriteItem";
const colors = ["grey", "grey", "grey"];
const delay = 5000;
export default function Home() {
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
    const [isLiked, setIsLiked] = React.useState(false);

    const handleLikeClick = () => {
        setIsLiked(!isLiked);
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
            <div className="slideshowSlider" style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
                <img src={"/слайд шоу 1.png"} style={{ width: '100%', height: "100%" }} alt="" />
                <img src={"/слайд шоу 2.png"} style={{ width: "100%", height: '100%' }} alt="" />
                <img src={"/слайд шоу 3.png"} style={{ width: '100%', height: '100%' }} alt="" />
            </div>
            <div className="slideshowDots">
                {colors.map((color, idx) => (
                    <div key={idx}
                        className={`slideshowDot${index === idx ? " active" : ""}`}
                        onClick={() => setIndex(idx)}
                    />
                ))}
            </div>
            <div className="buttonsMenu">
               <Link href='/catalog'><img src={"/кнопка свечи.png"} style={{ width: "100%" }} alt="" /></Link>
                <Link href='/catalog'><img src={"/кнопка пледы.png"} style={{ width: "100%" }} alt="" /></Link>
                <Link href='/catalog'><img src={"/кнопка кружки.png"} style={{ width: "100%" }} alt="" /></Link>
                    <Link href='/catalog'>  <img src={"/кнопка подушки.png"} style={{ width: "100%" }} alt="" /></Link>
            </div>
            <div className='buttonContainer'>
                <div className='popularItems'> POPULAR ITEMS</div>
                <Link href='/catalog'> <button className='buttonSeeAll'>SEE ALL</button></Link>
            </div>
            <div className='items'>
                <div className='Items' style={{ width: "70%" }}><img src={"/1 товар.png"} style={{ width: "100%" }} alt="" />
                    <div className='Good'>
                        <div className='buttonItems'><p>Pillow "Cot"</p>
                            <div className='cost'><p>30$</p></div>
                            <div className='buttonsFavourites'>
                                <FavouriteItem defaultLiked={false}/><SlBasket /></div>
                        </div>
                    </div>
                </div>
                <div className='Items' style={{ width: "70%" }}><img src={"/2 товар.png"} style={{ width: "100%" }} alt="" />
                    <div className='Good'>
                        <div className='buttonItems'><p>Candle “Fire” </p> <div className='cost'><p>20$</p></div>
                            <div className='buttonsFavourites'><FavouriteItem defaultLiked={false}/><SlBasket /></div>
                        </div>
                    </div>
                </div>
                <div className='Items' style={{ width: "70%" }}><img src={"/3 товар.png"} style={{ width: "100%" }} alt="" />
                    <div className='Good'>
                        <div className='buttonItems'><p>Plaid “Pink”</p>
                            <div className='cost'><p>35$</p></div>
                            <div className='buttonsFavourites'><FavouriteItem defaultLiked={false}/><SlBasket /></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='aboutUs'>
                ABOUT US
            </div>
            <div className='photoAboutUs'>
                <div className='textAboutUs'>Welcome to our cozy world! In our store, we've created the perfect space
                    for those who value homey comfort and coziness. Here you'll find everything you need to make your
                    home even cozier and the atmosphere around you even more pleasant. We believe that comfort doesn't
                    have to be expensive. That's why we offer affordable prices on all our products, so everyone can
                    create their own corner of comfort without breaking the bank. Step into our warm haven where comfort
                    reigns supreme! At our store, we've curated a delightful collection to cater to those who cherish
                    the snug embrace of home. Whether it's soft throws, inviting cushions, or ambient lighting, we've
                    assembled all the essentials to elevate your living space into a sanctuary of serenity. We firmly
                    believe that luxury shouldn't come with a hefty price tag. Hence, we strive to provide
                    pocket-friendly prices on our entire range, ensuring that crafting your personal oasis remains
                    within reach for all. Come, immerse yourself in the aura of coziness with us, and let's embark on a
                    journey to transform your abode into a haven of tranquility and warmth!
                </div>
                <div className='map'>
                    <YMaps>
                        <Map
                            height={'600px'}
                            width={'600px'}
                            defaultState={{
                                center: [55.75, 37.57],
                                zoom: 14,
                                controls: ["zoomControl", "fullscreenControl"],
                            }}
                            modules={["control.ZoomControl", "control.FullscreenControl"]}
                        >
                            <Placemark
                                modules={["geoObject.addon.balloon"]}
                                defaultGeometry={[55.75, 37.57]}
                                properties={{
                                    balloonContentBody:
                                        "This is balloon loaded by the Yandex.Maps API module system",
                                }}
                            />
                        </Map>
                    </YMaps>
                </div>
            </div>
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
