'use client'
import React from 'react';
import '@/app/items/items.css'
import {AiOutlineClose} from "react-icons/ai";
import Square from '@/components/Square'
import Circle from '@/components/Circle'

export default function Catalog() {
    const handleClick = () => {
        console.log("Кнопка нажата!");
    };
    return (
        <div className='MainPage'>
            <div className='buttonClose'>
                <AiOutlineClose size={35}/></div>
            <div className='costText'>
            <div className='textFifth'>SOFTNESS</div>
            <div className='cost'><p>25$</p></div>
            </div>
            <div className='fifthItem'><img src={"/5 свеча.png"} style={{width: "37%"}} alt=""/></div>
            <div className='buttonHeart'>
            <div><Square textSquare='BUY NOW'/></div>
            <div>
                <Circle onClick={handleClick}>
                    <svg className='heart' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path
                            d="M256 448l-30.164-27.211C118.718 322.442 48 258.61 48 179.095 48 114.221 97.918 64 162.4 64c36.399 0 70.717 16.742 93.6 43.947C278.882 80.742 313.199 64 349.6 64 414.082 64 464 114.221 464 179.095c0 79.516-70.719 143.348-177.836 241.694L256 448z"/>
                    </svg>
                </Circle>
            </div>
            </div>
            <div className='itemsText'>
                <p>This candle fills the air with cozy notes of vanilla, soft amber, and woody undertones, creating an atmosphere where every moment becomes even more pleasant and snug. Let this fragrance wrap you up and relax your body and soul, like the warmest blanket on a winter evening.</p>
                <p style={{textAlign:"justify"}}>•Top notes: Vanilla. These notes provide the initial, light, and sweet tone to the fragrance, creating the first impression and drawing attention.</p>
                <p>•Middle notes: Soft amber. These notes offer a deeper and richer aroma, adding warmth and intrigue to the composition. </p>
                <p>•Base notes: Woody undertones. These notes provide longevity and a foundation to the fragrance, creating a lasting background and accentuating its sweet and soft essence. </p>
                <p> Height: 9 cm; Width: 8 cm</p>
                <p>Fragrance: Vanilla & Soft amber </p>
                <p>Burn Time: Up to 50 hours </p>
                <p>Candle Holder: Plaster  </p>
                <p>Composition: Natural Coconut Wax </p>
                <p>Wick: Wooden</p>
                <p>Volume: 220 ml</p>
            </div>
        </div>
    );
}