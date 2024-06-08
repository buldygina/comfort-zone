'use client'
import { CgCloseO } from "react-icons/cg";
import { useUserLikesQuery} from "@/api/api";

const LikesMenu = () => {
    const {data, error} = useUserLikesQuery()
    return (
        <div className="menuHeart">
            <p>Favourites</p>
            <div className='hamburgerMenuFavourites'>
                {data?.length > 0 && data.map(likes => <div key={likes.id}>
                    <img src={likes.image} style={{ width: '15%', height: "15%", borderRadius: '25px' }}
                         alt="" />
                    <div className='favouritesText'>
                        <p>{likes.name}</p>
                    </div>
                    <div className='descriptionOfItems'>
                        <p>{likes.cost}$</p>
                        <div className='deleteItemFavourites'>
                            <CgCloseO size={27} />
                        </div>
                    </div>
                </div>)}
            </div>
        </div>
    )
}

export default LikesMenu