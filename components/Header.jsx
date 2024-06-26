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
import { useCookies } from "react-cookie";

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = React.useState(false);
	const [isMenuOpen2, setIsMenuOpen2] = React.useState(false);
	const [menuOrButton, setMenuOrButton] = React.useState(false)
	const [hide, setHide] = React.useState(false)
	const pathname = usePathname()
	const router = useRouter()
	const [cookies] = useCookies()
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
		const body = document.body;
		if (isMenuOpen2) {
			body.classList.add('scroll-lock2');
		} else {
			body.classList.remove('scroll-lock2');
		}

		return () => {
			body.classList.remove('scroll-lock2');
		};
	}, [isMenuOpen2]);
	React.useEffect(() => {
		const body = document.body;
		if (isMenuOpen) {
			body.classList.add('scroll-lock');
		} else {
			body.classList.remove('scroll-lock');
		}

		// Очистка при размонтировании компонента
		return () => {
			body.classList.remove('scroll-lock');
		};
	}, [isMenuOpen]);
	React.useEffect(() => {
		console.log(pathname)
		setIsMenuOpen(false)
		setIsMenuOpen2(false)
		setMenuOrButton(false)
		if (pathname.includes("catalog") || pathname === "/") {
			setMenuOrButton(true)
		}
		if (["/login", "/registration", "/account", "/codeconfirmation"].includes(pathname)) setHide(true)
		else if (pathname.includes("items")) setHide(true)
		else setHide(false)

	}, [pathname])
	if (!hide) {
		return (
			<div className="slideshow">
				{menuOrButton ?
					<div className='hamburgerMenu'>
						{isMenuOpen2 &&
							<div className="hamburgerMenu2">
								<Link href={"/shoppinginformation#Stores"}
									  style={{textDecoration: "none", color: "inherit"}}><p>Stores</p></Link>
								<Link href={"/shoppinginformation#Guarantee"}
									  style={{textDecoration: "none", color: "inherit"}}><p>Guarantee</p></Link>
								<Link href={"/shoppinginformation#Delivery"}
									  style={{textDecoration: "none", color: "inherit"}}><p>Delivery</p></Link>
								<Link href={"/shoppinginformation#Work time"}
									  style={{textDecoration: "none", color: "inherit"}}><p>Work time</p></Link>
								<Link href={"/shoppinginformation#Sales"}
									  style={{textDecoration: "none", color: "inherit"}}><p>Sales%</p></Link>
							</div>
						}
						<div className='hamburgerMenu' onClick={hamburgerMenu2}>
							{isMenuOpen2 ? <AiOutlineClose size={30}/> : <AiOutlineUnorderedList size={30}/>}
						</div>
					</div>
					: <a style={{textDecoration: "none", color: "inherit", cursor: "pointer"}}
						 onClick={goBack}><IoArrowBackOutline
						size={30}/></a>
				}
				<div className="text">comfort zone</div>
				<div className='button'>
					<Link href={cookies.access? "/account" : "/login"} className='no-underline'><VscAccount size={27}/></Link>
					<div className='hamburgerMenuContainer'>
						{isMenuOpen &&
							<LikesMenu/>
						}
						<div className='hamburgerMenuHeart' onClick={hamburgerMenu}>
							{isMenuOpen ? <AiOutlineClose size={30}/> : <AiOutlineHeart size={30}/>}
						</div>
					</div>
					<Link href='/basket' className='basketUnderline'><SlBasket size={28}/></Link>
				</div>
			</div>
		)
	}
	else return null
}

export default Header