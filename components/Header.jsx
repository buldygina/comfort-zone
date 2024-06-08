"use client"
import { AiOutlineClose, AiOutlineHeart, AiOutlineUnorderedList } from "react-icons/ai";
import { VscAccount } from "react-icons/vsc";
import { CgCloseO } from "react-icons/cg";
import { SlBasket } from "react-icons/sl";
import Link from "next/link";
import React from "react"
import { usePathname, useRouter } from "next/navigation";
import { IoArrowBackOutline } from "react-icons/io5";
import LikesMenu from "@/components/LikesMenu";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [isMenuOpen2, setIsMenuOpen2] = React.useState(false);
    const [menuOrButton, setMenuOrButton] = React.useState(false)
    const pathname = usePathname()
    const router = useRouter()
    const hamburgerMenu2 = () => {
        setIsMenuOpen2(!isMenuOpen2);
    };
    const hamburgerMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const goBack = () => {
        router.back()
    }
    React.useEffect(() => {
        console.log(pathname)
        setIsMenuOpen(false)
        setIsMenuOpen2(false)
        setMenuOrButton(false)
        if (pathname.includes("catalog") || pathname === "/") {
            setMenuOrButton(true)
        }

    }, [pathname])
    return (
        <div className="slideshow">
            {menuOrButton ?
                <div className='hamburgerMenu'>
                    {isMenuOpen2 &&
                        <div className="hamburgerMenu2">
                            <Link href={"/shoppinginformation#Stores"}
                                style={{ textDecoration: "none", color: "inherit" }}><p>Stores</p></Link>
                            <Link href={"/shoppinginformation#Guarantee"}
                                style={{ textDecoration: "none", color: "inherit" }}><p>Guarantee</p></Link>
                            <Link href={"/shoppinginformation#Delivery"}
                                style={{ textDecoration: "none", color: "inherit" }}><p>Delivery</p></Link>
                            <Link href={"/shoppinginformation#Work time"}
                                style={{ textDecoration: "none", color: "inherit" }}><p>Work time</p></Link>
                            <Link href={"/shoppinginformation#Sales"}
                                style={{ textDecoration: "none", color: "inherit" }}><p>Sales%</p></Link>
                        </div>
                    }
                    <div className='hamburgerMenu' onClick={hamburgerMenu2}>
                        {isMenuOpen2 ? <AiOutlineClose size={30} /> : <AiOutlineUnorderedList size={30} />}
                    </div>
                </div>
                 : <a style={{ textDecoration: "none", color: "inherit", cursor: "pointer" }} onClick={goBack}><IoArrowBackOutline
                    size={30} /></a>
            }
            <div className="text">comfort zone</div>
            <div className='button'>
                <Link href='/account' className='no-underline'><VscAccount size={27} /></Link>
                <div className='hamburgerMenuContainer'>
                    {isMenuOpen &&
                        <LikesMenu/>
                    }
                    <div className='hamburgerMenuHeart' onClick={hamburgerMenu}>
                        {isMenuOpen ? <AiOutlineClose size={30} /> : <AiOutlineHeart size={30} />}
                    </div>
                </div>
                <Link href='/basket' className='basketUnderline'><SlBasket size={28} /></Link>
            </div>
        </div>
    )
}

export default Header