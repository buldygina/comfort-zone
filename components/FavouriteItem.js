'use client'
import {useAddLikeMutation, useRemoveLikeMutation} from '@/api/api';
import React from 'react';
import { useCookies } from 'react-cookie';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { message } from 'antd';

const FavouriteItem = ({ defaultLiked, style, size, itemId, isLikedBefore = false }) => {
    const [messageApi] = message.useMessage()
    const [isLiked, setIsLiked] = React.useState(defaultLiked);
    const [cookies] = useCookies()
    const [addLike] = useAddLikeMutation()
    const [removeLike] = useRemoveLikeMutation()

    const handleLikeClick = async () => {
        messageApi.open([{
            key: "likeStatus",
            type: "loading",
            content: "loading...."
        }])
        if (!isLikedBefore) {
            const response = await addLike({ body: { itemId }, access: cookies.access })
            if (response.error) messageApi.open([{
                key: "likeStatus",
                type: "error",
                content: "You must be signed in",
                duration: 2
            }])
            else {
                messageApi.open([{
                    key: "likeStatus",
                    type: "success",
                    content: "Added to favorites!",
                    duration: 2

                }])
                setIsLiked(true);
            }
        }
        else {
            const response = await removeLike({itemId, access: cookies.access});
            if (response.error) {
                messageApi.open({
                    key: 'likeStatus',
                    type: 'error',
                    content :'Failed to remove from favourites',
                    duration: 2
                });
            } else{
                messageApi.open({
                    key: 'likeStatus',
                    type: 'success',
                    content: 'Removed from favourites!',
                    duration: 2
                });
                setIsLiked(false);
            }
        }

    };

    return (
        <div className="favourite-item" onClick={handleLikeClick} style={style}>
            {isLiked ? <AiFillHeart style={{ color: 'red' }} size={size} /> : <AiOutlineHeart size={size} />}
        </div>
    );
}

export default FavouriteItem