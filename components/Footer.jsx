import Link from "next/link";
import React from "react";

const Footer = () => {
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