'use client'
import React from 'react';
import '@/app/shoppinginformation/shoppinginformation.css'
import { IoArrowBackOutline } from "react-icons/io5";
import {Button} from "antd";
import {CgCloseO} from "react-icons/cg";
import {AiOutlineClose, AiOutlineHeart} from "react-icons/ai";
import {VscAccount} from "react-icons/vsc";
import {SlBasket} from "react-icons/sl";
export default function ShoppingInformation() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
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
    return(
        <div>
            <div className='containerShoppingInformation'>
            <div className='headerShoppingInformation'>
                <IoArrowBackOutline size={30}/>
                comfort zone
            </div>
            <div className='button'>
                <VscAccount size={27} />
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
                <SlBasket size={28} />
            </div>
            </div>
            <div className='shoppingInformationText'>
                Shopping information
            </div>
            <div className='Sales'>
                <p>Sales %</p>
                <div className='salesCard'>
                <img src={"/скидочная карта.png"} style={{ width: '40%', height: "40%" }} alt="" />
                </div>
                <div className='salesCardText'>
                    Get a discount on your first order. The discount will be sent to your email.
                </div>
                <Button type="primary" ghost style={{width: '200px',height:'50px',  color:'white', borderColor: '#D8B388', backgroundColor:'#D8B388', position: 'absolute', top: '130%', left: '51%', transform: 'translate(-50%, -50%)', fontFamily:'Raleway', fontSize:'20px'}}>
                    Get a discount
                </Button>
            </div>
        </div>
    )
}