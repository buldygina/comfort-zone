'use client'
import React from 'react';
import '@/app/basket/basket.css'
import {TbSearch} from "react-icons/tb";
import {AiOutlineArrowRight, AiOutlineHeart} from "react-icons/ai";
import {SlBasket} from "react-icons/sl";
import { RiDeleteBin6Line } from "react-icons/ri";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
export default function Basket() {
    const [itemCountFirst, setItemCountFirst] = React.useState(1);
    const [itemCountSecond, setItemCountSecond] = React.useState(1);
    return (
        <div>
        <div className='logoComfortZone'>
           <div className='textLogoComfortZone'> <p>comfort zone</p></div>
        </div>
    <div className='buttonsBasket'>
        <TbSearch size={27}/>
        <AiOutlineHeart size={30}/>
        <SlBasket size={28}/>
    </div>
            <div className='backButtonBasket'>
            <div className='backButton'><p>BACK</p>
                <AiOutlineArrowRight /></div>
            </div>
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
                    <div className="square2"><p>Place an order</p></div>
                </div>
                </div>
            </div>
            <div className='footer'>
                <div className='footerText'><p>stores</p>
                    <p>guarantee</p>
                    <p>delivery</p>
                    <p>work time</p>
                </div>
                <p className="email">comfortzone@mail.ru</p>
            </div>
        </div>
    );
}