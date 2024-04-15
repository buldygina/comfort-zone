// eslint-disable-next-line @next/next/no-document-import-in-page
'use client'
import {useState} from "react";
import React from 'react';
import Navbar from "/components/Navbar";
import { TbSearch } from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";
import { SlBasket } from "react-icons/sl";
const colors = ["grey", "grey", "grey"];
const delay = 5000;
export default function Home() {
    const [index, setIndex] = React.useState(0);
    const timeoutRef = React.useRef(null);
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }
    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }
    React.useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () =>
                setIndex((prevIndex) =>
                    prevIndex === colors.length - 1 ? 0 : prevIndex + 1
                ),
            delay
        );
        return () => {
            resetTimeout();
        };
    }, [index]);
    return (
        <div className='MainPage'>
            <div className="slideshow">
                <Navbar/>
                <div className="text">comfort zone</div>
                <div className='button'>
                <TbSearch size={27} />
                <AiOutlineHeart size={30}/>
                <SlBasket size={28}/>
            </div>
            </div>
                <div className="slideshowSlider" style={{transform: `translate3d(${-index * 100}%, 0, 0)`}}>
                    <img src={"/слайд шоу 1.png"} style={{ width: '100%', height:"100%" }} alt="" />
                    <img src={"/слайд шоу 2.png"} style={{ width: "100%", height:'100%' }} alt="" />
                    <img src={"/слайд шоу 3.png"} style={{ width: '100%', height:'100%' }} alt="" />
                </div>
            <div className="slideshowDots">
                {colors.map((color, idx) => (
                    <div key={idx}
                         className={`slideshowDot${index === idx ? " active" : ""}`}
                         onClick={() => setIndex(idx)}
                    />
                ))}
            </div>
            <div className="buttonsMenu">
                <img src={"/кнопка свечи.png"}  style={{width: "100%"}}  alt="" />
                <img src={"/кнопка пледы.png"}  style={{width: "100%"}} alt="" />
                <img src={"/кнопка кружки.png"} style={{width: "100%"}} alt="" />
                <img src={"/кнопка подушки.png"} style={{width: "100%"}} alt="" />
            </div>
        </div>

    );
}
