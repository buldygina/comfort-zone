'use client'
import React from "react";
import '@/app/payment/payment.css'
import Link from "next/link";
import {IoArrowBack} from "react-icons/io5";

export default function Payment() {
    const [cardNumber, setCardNumber] = React.useState("");
    const [cardHolder, setCardHolder] = React.useState("");
    const [expMonth, setExpMonth] = React.useState("");
    const [expYear, setExpYear] = React.useState("");
    const [cvv, setCvv] = React.useState("");
    const [isFlipped, setIsFlipped] = React.useState(false);

    const handleCardNumberChange = (e) => {
        setCardNumber(e.target.value);
    };

    const handleCardHolderChange = (e) => {
        setCardHolder(e.target.value);
    };

    const handleExpMonthChange = (e) => {
        setExpMonth(e.target.value);
    };

    const handleExpYearChange = (e) => {
        setExpYear(e.target.value);
    };

    const handleCvvChange = (e) => {
        setCvv(e.target.value);
    };

    const handleCvvMouseEnter = () => {
        setIsFlipped(true);
    };

    const handleCvvMouseLeave = () => {
        setIsFlipped(false);
    };
    return (
        <div>
            <div className='buttonBack'>
            <Link href='/order' style={{textDecoration: "none", color: "inherit"}}><IoArrowBack size={35} /></Link>
            </div>
            <div className='payment'>
                <div className={`card-container ${isFlipped ? "flipped" : ""}`}>
                    <div className='front'>
                        <div className='image'>
                            <img src={'/visa.png'} alt='' />
                            <img src={'/chip.png'} alt='' />
                        </div>
                    <div className='card-number-box'>{cardNumber || "################"}</div>
                    <div className='flexbox'>
                        <div className='box'>
                            <span>card holder</span>
                            <div className='card-holder-name'>{cardHolder || "full name"}</div>
                        </div>
                        <div className='box'>
                            <span>expires</span>
                            <div className='expiration'>
                                <span className='exp-month'>{expMonth || "mm"}</span>
                                <span className='exp-year'> {expYear || "yy"}</span>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className='backPayment'>
                        <div className='stripe'></div>
                        <div className='box'>
                          <span>cvv</span>
                            <div className='cvv-box'>{cvv}</div>
                            <img src={'/visa.png'} alt=''/>
                        </div>
                    </div>
                </div>
                <form action=''>
                    <div className='inputBox'>
                        <span>card number</span>
                        <input type='text' maxLength='16' className='card-number-input' value={cardNumber} onChange={handleCardNumberChange} />
                    </div>
                    <div className='inputBox'>
                        <span>card holder</span>
                        <input type='text' maxLength='30' className='card-holder-input' onChange={handleCardHolderChange}/>
                    </div>
                    <div className='flexbox'>
                        <div className='inputBox'>
                            <span>expiration mm</span>
                            <select name='' id='' className='month-input' onChange={handleExpMonthChange}>
                                <option value='month' selected disabled>month</option>
                                <option value='01'>01</option>
                                <option value='02'>02</option>
                                <option value='03'>03</option>
                                <option value='04'>04</option>
                                <option value='05'>05</option>
                                <option value='06'>06</option>
                                <option value='07'>07</option>
                                <option value='08'>08</option>
                                <option value='09'>09</option>
                                <option value='10'>10</option>
                                <option value='11'>11</option>
                                <option value='12'>12</option>
                            </select>
                        </div>
                        <div className='inputBox'>
                            <span>expiration yy</span>
                            <select name='' id='' className='year-input' onChange={handleExpYearChange}>
                                <option value='year' selected disabled>year</option>
                                <option value='2021'>2021</option>
                                <option value='2022'>2022</option>
                                <option value='2023'>2023</option>
                                <option value='2024'>2024</option>
                                <option value='2024'>2024</option>
                                <option value='2025'>2025</option>
                                <option value='2026'>2026</option>
                                <option value='2027'>2027</option>
                                <option value='2028'>2028</option>
                                <option value='2029'>2029</option>
                                <option value='2030'>2030</option>
                            </select>
                        </div>
                        <div className='inputBox'>
                            <span>cvv</span>
                            <input type='text' maxLength='4' className='cvv-input' onMouseEnter={handleCvvMouseEnter} onMouseLeave={handleCvvMouseLeave} onChange={handleCvvChange} />
                        </div>
                   </div>
                    <Link href='/orderprocessing'> <input type='submit' value='submit' className='submit-btn'/></Link>
                </form>
            </div>
        </div>
    );
}