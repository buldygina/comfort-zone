import React from 'react';
import '@/app/order/order.css'
import { IoArrowBack } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";

export default function Order() {
    return (
        <div>
            <div className='headerOrder'>
                <div className='headerTexrOrder'>
                    <IoArrowBack size={35} />
                    <div className='orderText'><p>YOUR ORDER</p></div>
                </div>
            </div>
            <form className='inputName'>
                    <label htmlFor='name-input'>Your name</label>
                    <input id='name-input' />
                </form>
            <form className='inputEmail'>
                <label htmlFor='name-email'>Your e-mail</label>
                <input id='name-email'/>
            </form>
            <form className='inputPhone'>
                <label htmlFor='name-phone'>Your phone number</label>
                <input id='name-phone'/>
            </form>
            <div className='delivery'>
            Delivery
            </div>
            <form className='inputCity'>
                <label htmlFor='name-city'>City</label>
                <input id='name-city'/>
            </form>
        </div>
    );
}