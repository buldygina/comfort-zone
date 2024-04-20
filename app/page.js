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
                <img src={"/кнопка подушки.png"} style={{width:"100%"}} alt="" />
            </div>
            <div className='buttonContainer'><div className='popularItems' > POPULAR ITEMS</div>
            <button className='buttonSeeAll'>SEE ALL</button></div>
            <div className='items'>
                <div style={{width: "70%"}}><img src={"/1 товар.png"}  style={{width: "100%"}}  alt="" /></div>
                <div style={{width: "70%"}}><img src={"/2 товар.png"}  style={{width: "100%"}}  alt="" /></div>
                <div style={{width: "70%"}}><img src={"/3 товар.png"}  style={{width: "100%"}}  alt="" /></div>
            </div>
            <div className='aboutUs'>
                ABOUT US
            </div>
            <div className='photoAboutUs'>
            <div className='textAboutUs'>Welcome to our cozy world! In our store, we've created the perfect space for those who value homey comfort and coziness. Here you'll find everything you need to make your home even cozier and the atmosphere around you even more pleasant. We believe that comfort doesn't have to be expensive. That's why we offer affordable prices on all our products, so everyone can create their own corner of comfort without breaking the bank. Step into our warm haven where comfort reigns supreme! At our store, we've curated a delightful collection to cater to those who cherish the snug embrace of home. Whether it's soft throws, inviting cushions, or ambient lighting, we've assembled all the essentials to elevate your living space into a sanctuary of serenity. We firmly believe that luxury shouldn't come with a hefty price tag. Hence, we strive to provide pocket-friendly prices on our entire range, ensuring that crafting your personal oasis remains within reach for all. Come, immerse yourself in the aura of coziness with us, and let's embark on a journey to transform your abode into a haven of tranquility and warmth!
            </div>
                <img src={"/карта метро.png"}  style={{width: "30%"}}  alt="" />
            </div>
        </div>

    );
}
