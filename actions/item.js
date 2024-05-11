 'use server'
 import prisma from "@/lib/prismaDb";

 export const addToFavourites = async(itemId, email)  => {
     try {
         const user = await prisma.user.findUnique({
             where: {
                 email: email
             }
         })
         if (!user)
             return console.error('user not found')
         await prisma.likedUsers.create({
             data: {
                 user: {
                     connect: {
                         id: user.id
                     }
                 },
                 item: {
                     connect:{
                         id: itemId
                     }
                 }
             }
         })
     } catch (error) {
         console.error(error);
     }
 }