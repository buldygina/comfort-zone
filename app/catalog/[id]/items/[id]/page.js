'use client'
import React from 'react';
import '@/app/items/items.css'
import {AiOutlineClose} from "react-icons/ai";
import Square from '@/components/Square'
import Circle from '@/components/Circle'
import {useRouter} from "next/navigation";
import { Button} from 'antd';
import FavouriteItem from "@/components/FavouriteItem";
import {useGetSpecificCategoryQuery, useUserItemsQuery} from "@/api/api";
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
    const {data, error} = useUserItemsQuery({itemId: params.id})
    return (
        <div className='MainPage'>
            <div className='buttonClose' onClick={handleButtonClick}>
                <AiOutlineClose size={35}/></div>
            <div className='costText'>
            <div className='textFifth'>{data.name}</div>
            <div className='cost'><p>{data.cost}</p></div>
            </div>
            <div className='fifthItem'><img src={data.image} style={{width: "35%"}} alt=""/></div>
            <div className='buttonHeart'>
                <Button type="primary" onClick={handleClickButton} style={{width:'140px', height:'55px', fontFamily:'Raleway', fontSize:'18px', backgroundColor:'#CABAAE', borderRadius:'25px'}}>BUY NOW</Button>
            <div>
                <Circle>
                    <FavouriteItem defaultLiked={false} size={35}/>
                </Circle>
            </div>
            </div>
            <div className='itemsText'>
                <p>{data.description}</p>
                <p>{data.material}</p>
            </div>
        </div>
    );
}