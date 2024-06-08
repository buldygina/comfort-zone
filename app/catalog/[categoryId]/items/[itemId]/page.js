'use client'
import React from 'react';
import '@/app/catalog/[categoryId]/items/[itemId]/items.css'
import Circle from '@/components/Circle'
import { useRouter } from "next/navigation";
import { Button, Spin } from 'antd';
import FavouriteItem from "@/components/FavouriteItem";
import { useUserItemsQuery } from "@/api/api";
import { AiOutlineClose } from "react-icons/ai";

export default function Catalog({params}) {
	const router = useRouter()
	const handleButtonClick = (e) => {
		e.preventDefault()
		router.back()
	}
	const {data, error, isLoading} = useUserItemsQuery({itemId: params.itemId})

	const handleClickButton = (e) => {
		e.preventDefault()
		localStorage.setItem("basket", JSON.stringify([data]))
		router.push('/basket')
	}
	if (isLoading) return <div style={{display: "flex", justifyContent: "center", width: "100%", minHeight: "65svh"}}>
		<Spin/></div>
	return (
		<div>
			<div style={{width: "100%", display: "flex", paddingLeft: 20, paddingTop: 20}}>
				<div className='buttonClose' onClick={handleButtonClick}>
					<AiOutlineClose size={35}/>
				</div>
			</div>
			<div className="contentContainer">
				<div className='fifthItem'><img src={data.image} style={{objectFit: "cover", width: "80%"}} alt=""/>
				</div>
				<div style={{display: "flex", flexDirection: "column", alignItems: "start"}}>
					<div className='costText'>
						<div className='textFifth'>{data.name}</div>
						<div className='cost'><p>{data.cost} $</p></div>
					</div>
					<div className='buttonHeart'>
						<Button type="primary" onClick={handleClickButton} style={{
							width: '140px',
							height: '55px',
							fontFamily: 'Raleway',
							fontSize: '18px',
							backgroundColor: '#CABAAE',
							borderRadius: '25px'
						}}>BUY NOW</Button>
						<div>
							<Circle>
								<FavouriteItem defaultLiked={false} size={35} itemId={params.itemId} isLikedBefore={false}/>
							</Circle>
						</div>
					</div>
					<div className='itemsText'>
						<p>{data.description}</p>
						<p>{data.material}</p>
					</div>
				</div>
			</div>
		</div>
	);
}