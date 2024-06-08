"use client"
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const Footer = () => {
	const [hide, setHide] = React.useState(false)
	const pathname = usePathname()
	React.useEffect(() => {
		if (["/login", "/registration", "/account", "/codeconfirmation"].includes(pathname)) setHide(true)
		else if (pathname.includes("items")) setHide(true)
		else setHide(false)
	}, [pathname])
	if (hide) return null
	return (
		<div className='footer'>
			<div className='footerText'>
				<Link href={"/shoppinginformation#Stores"} style={{textDecoration: "none", color: "inherit"}}>
					<p>stores</p></Link>
				<Link href={"/shoppinginformation#Guarantee"} style={{textDecoration: "none", color: "inherit"}}>
					<p>guarantee</p></Link>
				<Link href={"/shoppinginformation#Delivery"} style={{textDecoration: "none", color: "inherit"}}>
					<p>delivery</p></Link>
				<Link href={"/shoppinginformation#Work time"} style={{textDecoration: "none", color: "inherit"}}>
					<p>work time</p></Link>
			</div>
			<p className="email">comfortzone@mail.ru</p>
		</div>
	)
}

export default Footer