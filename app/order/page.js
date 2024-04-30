import React from 'react';
import '@/app/order/order.css'
import { IoArrowBack } from "react-icons/io5";
import {AiOutlineClose} from "react-icons/ai";

export default function Order() {
    return (
        <div>
            <div className='headerOrder'>
            <div className='headerTexrOrder'>
                <IoArrowBack size={35}/>
            <div className='orderText'><p>YOUR ORDER</p></div>
            </div>
            </div>
        </div>
    );
}