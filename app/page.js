// eslint-disable-next-line @next/next/no-document-import-in-page
'use client'
import { Placemark, YMaps, Map } from '@pbe/react-yandex-maps';
import { useState } from "react";
import React from 'react';
import {AiFillHeart, AiOutlineUnorderedList} from "react-icons/ai";
import { VscAccount } from "react-icons/vsc";
import { AiOutlineHeart } from "react-icons/ai";
import { SlBasket } from "react-icons/sl";
import { AiOutlineClose } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { CgCloseO } from "react-icons/cg";
import Link from "next/link";
import FavouriteItem from "@/components/FavouriteItem";
import {useCategoriesQuery, useGetSpecificCategoryQuery, useItemsPopularQuery} from "@/api/api";
const colors = ["grey", "grey", "grey"];
const delay = 5000;
export default function Home() {
    const [index, setIndex] = React.useState(0);
    const timeoutRef = React.useRef(null);

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
    const [isLiked, setIsLiked] = React.useState(false);

    const handleLikeClick = () => {
        setIsLiked(!isLiked);
    };
    const {data, error} = useCategoriesQuery()
    const PopularItems = useItemsPopularQuery()
    return (
        <div className='MainPage'>
            
            <div className="slideshowSlider" style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
                <img src={"/слайд шоу 1.png"} style={{ width: '100%', height: "100%" }} alt="" />
                <img src={"/слайд шоу 2.png"} style={{ width: "100%", height: '100%' }} alt="" />
                <img src={"/слайд шоу 3.png"} style={{ width: '100%', height: '100%' }} alt="" />
            </div>
            <div className="slideshowDots">
                {colors.map((color, idx) => (
                    <div key={idx}
                        className={`slideshowDot${index === idx ? " active" : ""}`}
                        onClick={() => setIndex(idx)}
                    />
                ))}
            </div>
            <div className="buttonsMenu">{data?.length > 0 && data.map(category => <Link href={`/catalog/${category.id}`} key={category.id}>
                <img src={category.image} style={{ width: "100%" }} alt="" /></Link>)}
            </div>
            {/*<div className='buttonContainer'>*/}
            {/*    <div className='popularItems'> POPULAR ITEMS</div>*/}
            {/*    <Link href='/catalog'> <button className='buttonSeeAll'>SEE ALL</button></Link>*/}
            {/*</div>*/}
            {/*<div className='items'>*/}
            {/*    {PopularItems.data && PopularItems.data.map(popular => (<Link href={`/catalog/${popular.id}`} key={popular.id}><div className='Items' style={{ width: "70%" }}><img src={popular.image} style={{ width: "100%" }} alt="" />*/}
            {/*        <div className='Good'>*/}
            {/*            <div className='buttonItems'><p>{popular.name}</p>*/}
            {/*                <div className='cost'><p>{popular.cost}</p></div>*/}
            {/*                <div className='buttonsFavourites'>*/}
            {/*                    <FavouriteItem defaultLiked={false}/><SlBasket /></div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div></Link>))*/}
            {/*    }*/}
            {/*</div>*/}
            <div className='aboutUs'>
                ABOUT US
            </div>
            <div className='photoAboutUs'>
                <div className='textAboutUs'>Welcome to our cozy world! In our store, we've created the perfect space
                    for those who value homey comfort and coziness. Here you'll find everything you need to make your
                    home even cozier and the atmosphere around you even more pleasant. We believe that comfort doesn't
                    have to be expensive. That's why we offer affordable prices on all our products, so everyone can
                    create their own corner of comfort without breaking the bank. Step into our warm haven where comfort
                    reigns supreme! At our store, we've curated a delightful collection to cater to those who cherish
                    the snug embrace of home. Whether it's soft throws, inviting cushions, or ambient lighting, we've
                    assembled all the essentials to elevate your living space into a sanctuary of serenity. We firmly
                    believe that luxury shouldn't come with a hefty price tag. Hence, we strive to provide
                    pocket-friendly prices on our entire range, ensuring that crafting your personal oasis remains
                    within reach for all. Come, immerse yourself in the aura of coziness with us, and let's embark on a
                    journey to transform your abode into a haven of tranquility and warmth!
                </div>
                <div className='map'>
                    <YMaps>
                        <Map
                            height={'600px'}
                            width={'600px'}
                            defaultState={{
                                center: [55.75, 37.57],
                                zoom: 14,
                                controls: ["zoomControl", "fullscreenControl"],
                            }}
                            modules={["control.ZoomControl", "control.FullscreenControl"]}
                        >
                            <Placemark
                                modules={["geoObject.addon.balloon"]}
                                defaultGeometry={[55.75, 37.57]}
                                properties={{
                                    balloonContentBody:
                                        "This is balloon loaded by the Yandex.Maps API module system",
                                }}
                            />
                        </Map>
                    </YMaps>
                </div>
            </div>
        </div>

    );
}
