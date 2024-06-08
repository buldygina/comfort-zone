import { CgCloseO } from "react-icons/cg";

const LikesMenu = () => {
    return (
        <div className="menuHeart">
            <p>Favourites</p>
            <div className='hamburgerMenuFavourites'>
                <img src={"/3 свеча.png"} style={{ width: '15%', height: "15%", borderRadius: '25px' }}
                    alt="" />
                <img src={"/4 свеча.png"} style={{ width: '15%', height: "15%", borderRadius: '25px' }}
                    alt="" />
                <div className='favouritesText'>
                    <p>CANDLE "WARM"</p>
                    <p>CANDLE "PINK SET"</p>
                </div>
                <div className='descriptionOfItems'>
                    <p>22$</p>
                    <p>19$</p>
                    <div className='deleteItemFavourites'>
                        <CgCloseO size={27} />
                        <CgCloseO size={27} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LikesMenu