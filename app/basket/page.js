'use client'
import React from 'react';
import '@/app/basket/basket.css'
import { VscAccount } from "react-icons/vsc";
import {AiOutlineArrowRight, AiOutlineClose, AiOutlineHeart, AiOutlineUnorderedList} from "react-icons/ai";
import {SlBasket} from "react-icons/sl";
import { RiDeleteBin6Line } from "react-icons/ri";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import Link from "next/link";
import {CgCloseO} from "react-icons/cg";
import {useRouter} from "next/navigation";
export default function Basket() {
    const router = useRouter()
    const [itemCountFirst, setItemCountFirst] = React.useState(1);
    const [itemCountSecond, setItemCountSecond] = React.useState(1);
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

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }
    const handleButtonClick = (e) => {
        e.preventDefault()
        router.push('/order')
    };
    return (
        <div>
        <div className='logoComfortZone'>
           <div className='textLogoComfortZone'> <p>comfort zone</p></div>
        </div>
    <div className='buttonsBasket'>
        <Link href='/account' className='no-underline'><VscAccount size={27}/></Link>
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
    </div>
            <Link href='/'><div className='backButtonBasket'>
            <div className='backButton'><p>BACK</p>
                <AiOutlineArrowRight /></div>
            </div>
            </Link>
            <div className='shoppingCarttext'>
                <p>shopping cart</p>
            </div>
            <div className='basketItems'>
            <div className='firstItemBasket'> <img src={"/4 свеча.png"} style={{width: "20%"}} alt=""/> </div>
            <div className='secondItemBasket'> <img src={"/6 свеча.png"} style={{width: "20%"}} alt=""/></div>
        </div>
            <div className='textItemsBasket'>
            <div className='textFirstBasket'>
                <p>Pink Set 22$</p>
            </div>
            <div className='textSecondBasket'>
                <p>Seashell 15$</p>
            </div>
            </div>
            <div className='addToFavourites'>
                <div className='addToFavouritesFirst'> <p>add to favourites</p> <AiOutlineHeart size={25}/></div>
                <div className='addToFavouritesSecond'><p>add to favourites</p> <AiOutlineHeart size={25}/></div>
            </div>
            <div className='deleteItems'>
                <div className='deleteItemsFirst'> <p>delete</p> <RiDeleteBin6Line size={24}/></div>
                <div className='deleteItemsSecond'><p>delete</p> <RiDeleteBin6Line size={24}/></div>
            </div>
            <div className='quantityItems'>
                <div className='quantityItemsFirst'>
                    <div style={{ display: "block", padding: 30 }}>
                        <div>
                            <Badge color="secondary" badgeContent={itemCountFirst}>
                                <ShoppingCartIcon />{" "}
                            </Badge>
                            <ButtonGroup>
                                <Button
                                    onClick={() => {
                                        setItemCountFirst(Math.max(itemCountFirst - 1, 0));
                                    }}
                                >
                                    {" "}
                                    <RemoveIcon fontSize="small" />
                                </Button>
                                <Button
                                    onClick={() => {
                                        setItemCountFirst(itemCountFirst + 1);
                                    }}
                                >
                                    {" "}
                                    <AddIcon fontSize="small" />
                                </Button>
                            </ButtonGroup>
                        </div>
                    </div>
                </div>
                <div className='quantityItemsSecond'>
                    <div style={{ display: "block", padding: 30 }}>
                        <div>
                            <Badge color="secondary" badgeContent={itemCountSecond}>
                                <ShoppingCartIcon />{" "}
                            </Badge>
                            <ButtonGroup>
                                <Button
                                    onClick={() => {
                                        setItemCountSecond(Math.max(itemCountSecond - 1, 0));
                                    }}
                                >
                                    {" "}
                                    <RemoveIcon fontSize="small" />
                                </Button>
                                <Button
                                    onClick={() => {
                                        setItemCountSecond(itemCountSecond + 1);
                                    }}
                                >
                                    {" "}
                                    <AddIcon fontSize="small" />
                                </Button>
                            </ButtonGroup>
                        </div>
                    </div>
                </div>
            </div>
            <div className='placeOrder'>
                <div className='containerBasket'>
                <div className="square1">
                <div className='shoppingcart'> <p>In shopping cart</p></div>
                <div className='CostItemsinBasket'> <p>Items: 2</p>
                <p>50$</p>
                </div>
                    <div className="square2" onClick={handleButtonClick}><p>Place an order</p></div>
                </div>
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