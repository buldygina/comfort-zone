'use client'
import React from 'react';
import '@/app/basket/basket.css'
import { VscAccount } from "react-icons/vsc";
import { AiOutlineArrowRight, AiOutlineClose, AiOutlineHeart, AiOutlineUnorderedList } from "react-icons/ai";
import { SlBasket } from "react-icons/sl";
import { RiDeleteBin6Line } from "react-icons/ri";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import Link from "next/link";
import { CgCloseO } from "react-icons/cg";
import { useRouter } from "next/navigation";
import FavouriteItem from "@/components/FavouriteItem";

export default function Basket() {
	const router = useRouter()

	const handleButtonClick = (e) => {
		e.preventDefault()
		router.push('/order')
	};
	const items = JSON.parse(localStorage.getItem("basket"))
	return (
		<div>
			<div className='shoppingCarttext'>
				<p>shopping cart</p>
			</div>
			<div style={{display: "flex"}}>
				<div style={{display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "2em"}}>
					{items && items.map(item => <div key={item.id} style={{display: "flex", gap: "2em"}}>
						<img src={item.image}/>
						<div style={{display: "flex", flexDirection: "column"}}>
							<p>{item.name}</p>
						</div>
					</div>)}


					<div className='placeOrder'>
						<div className='containerBasket'>
							<div className="square1">
								<div className='shoppingcart'><p>In shopping cart</p></div>
								<div className='CostItemsinBasket'><p>Items: 2</p>
									<p>50$</p>
								</div>
								<div className="square2" onClick={handleButtonClick}><p>Place an order</p></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}