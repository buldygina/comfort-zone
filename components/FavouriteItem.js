'use client'
import React from 'react';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
const FavouriteItem = ({ defaultLiked, style, size }) => {
    const [isLiked, setIsLiked] = React.useState(defaultLiked);

    const handleLikeClick = () => {
        setIsLiked(!isLiked);
    };

    return (
        <div className="favourite-item" onClick={handleLikeClick} style={style}>
            {isLiked ? <AiFillHeart style={{ color: 'red' }} size={size} /> : <AiOutlineHeart size={size}/>}
        </div>
    );
}

export default FavouriteItem;