'use client'
import React from 'react';
import '@/app/basket/basket.css'
import {TbSearch} from "react-icons/tb";
import {AiOutlineArrowRight, AiOutlineHeart} from "react-icons/ai";
import {SlBasket} from "react-icons/sl";
export default function Basket() {
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
        </div>
    );
}