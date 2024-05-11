'use client'
import React from 'react';
import Navbar from "/components/Navbar";
import { VscAccount } from "react-icons/vsc";
import {AiOutlineHeart} from "react-icons/ai";
import {SlBasket} from "react-icons/sl";
import '@/app/catalog/catalog.css'
import { AiOutlineArrowRight } from "react-icons/ai";
export default function Catalog() {
    return (
        <div className='MainPage'>
            <div className="slideshow">
                <Navbar/>
                <div className="text">comfort zone</div>
                <div className='button'>
                    <VscAccount size={27}/>
                    <AiOutlineHeart size={30}/>
                    <SlBasket size={28}/>
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
                <div className='Items' style={{width: "70%"}}><img src={"/5 свеча.png"} style={{width: "100%"}} alt=""/>
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
            <div className='buttonBack'><p>BACK</p></div>
           <AiOutlineArrowRight /></div>
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