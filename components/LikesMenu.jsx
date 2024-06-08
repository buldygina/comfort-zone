'use client'
import { CgCloseO } from "react-icons/cg";
import { useUserLikesQuery } from "@/api/api";
import { useCookies } from "react-cookie";

const LikesMenu = () => {
	const [cookies] = useCookies()
	const {data, error} = useUserLikesQuery({access: cookies.access})
	return (
		<div className="menuHeart">
			<p>Favourites</p>
			<div className='hamburgerMenuFavourites'>
				{data?.length > 0 && data.map(likes => <div key={likes.id}
															style={{display: "flex", alignItems: "center"}}>
					<img src={likes.image} style={{width: '15%', height: "15%", borderRadius: '25px'}}
						 alt=""/>
					<p style={{flexGrow: "1"}}>{likes.name}</p>
					<p style={{paddingRight: "1em"}}>{likes.cost}$</p>
					<CgCloseO style={{paddingRight: "1em"}} size={27}/>
				</div>)}
			</div>
		</div>
	)
}

export default LikesMenu