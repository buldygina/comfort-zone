'use client'
import React from 'react';
import '@/app/items/items.css'
import {AiOutlineClose} from "react-icons/ai";
import Square from '@/components/Square'
import Circle from '@/components/Circle'
import {useRouter} from "next/navigation";
import { Button} from 'antd';
import FavouriteItem from "@/components/FavouriteItem";
export default function Catalog() {
    const handleClick = async () => {
       
    };
    const router = useRouter()
    const handleButtonClick = (e) => {
        e.preventDefault()
        router.push('/catalog')
    }
    const handleClickButton = (e) => {
        e.preventDefault()
        router.push('/basket')
    }
    return (
        <div className='MainPage'>
            <div className='buttonClose' onClick={handleButtonClick}>
                <AiOutlineClose size={35}/></div>
            <div className='costText'>
            <div className='textFifth'>SOFTNESS</div>
            <div className='cost'><p>25$</p></div>
            </div>
            <div className='fifthItem'><img src={"/5 свеча.png"} style={{width: "35%"}} alt=""/></div>
            <div className='buttonHeart'>
                <Button type="primary" onClick={handleClickButton} style={{width:'140px', height:'55px', fontFamily:'Raleway', fontSize:'18px', backgroundColor:'#CABAAE', borderRadius:'25px'}}>BUY NOW</Button>
            <div>
                <Circle>
                    <FavouriteItem defaultLiked={false} size={35}/>
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