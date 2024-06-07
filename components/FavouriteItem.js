'use client'
import React from 'react';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import {useUserLikesPutQuery} from "@/api/api";
import {useCookies} from "react-cookie";
const FavouriteItem = ({ defaultLiked, style, size }) => {
    const [isLiked, setIsLiked] = React.useState(defaultLiked);
    const [value, setValue] = React.useState();
    const [addToFavorites] = useUserLikesPutQuery();
    const [userLikeId, setUserLikeId] = React.useState(null);
    const [likeItem, setLikeItem] = React.useState('');
    const [cookies, setCookie, removeCookie] = useCookies()
    const createReview = async () => {
        if (!userLikeId) {
            if (!likeItem || !value) return
            const response = await createReviewReq({
                access: cookies.access, body: {
                  itemId:params.id
                }
            })
            if (!response.error) location.reload()
        else {
                if (!likeItem || !value) return
                const response = await updateReview({
                    access: cookies.access, body: {
                        reviewId: userReviewId,
                        text: commentText,
                        estimation: value2
                    }
                })
                if (!response.error) location.reload()
            }
        }
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