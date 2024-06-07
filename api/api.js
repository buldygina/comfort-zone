import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import refreshAccess from "@/lib/refreshAccess"

const apiPrefix = process.env.NEXT_PUBLIC_API_PREFIX

const requestData = async (args, api, extraOptions) => {
	let req = fetchBaseQuery(args)
	let res = await req(args, api, extraOptions)
	if (res.error && res.error.status === 403 && !res.error.data) {
		await refreshAccess(true, async () => await req(args, api, extraOptions))
	}
	return res
}

const baseQueryWithAuth = async (args, api, extraOptions) => {
	args.baseUrl = process.env.NEXT_PUBLIC_BACKEND_DOMAIN
	return await requestData(args, api, extraOptions)
}
export const api = createApi({
	reducerPath: "api",
	baseQuery: baseQueryWithAuth,
	endpoints: (builder) => ({
		getCurrentUserVerify: builder.mutation({
			query: ({access, code, body}) => ({
				url: `${apiPrefix}/user/current/verify`,
				method: "POST",
				body,
				code,
				headers: {
					'Authorization': `Bearer ${access}`

				}
			})
		}),
		getCurrentUser: builder.query({
			query: ({access, id, username, email, verified}) => ({
				url: `${apiPrefix}/user/current`,
				method: "GET",
				id,
				username,
				email,
				verified,
				headers: {
					'Authorization': `Bearer ${access}`

				}
			})
		}),
		getSendVerifyUser: builder.query({
			query: ({access}) => ({
				url: `${apiPrefix}/user/current/sendVerify`,
				method: "GET",
				headers: {
					'Authorization': `Bearer ${access}`

				}
			})
		}),
		registration: builder.mutation({
			query: ({body, username, email, password}) => ({
				url: `${apiPrefix}/auth/sign-up`,
				method: "POST",
				body: body,
				username,
				email,
				password,
				headers: {
					'Content-Type': 'application/json'
				}
			})
		}),
		login: builder.mutation({
			query: ({email, password, body}) => ({
				url: `${apiPrefix}/auth/sign-in`,
				method: "POST",
				body: body,
				email,
				password,
				headers: {
					'Content-Type': 'application/json'
				}
			})
		}),
		sendRestore: builder.mutation({
			query: ({email, password, body}) => ({
				url: `${apiPrefix}/auth/sendRestore`,
				method: "POST",
				body,
				email,
				password,
				headers: {
					'Content-Type': 'application/json'
				}
			})
		}),
		restore: builder.mutation({
			query: ({email, code, body}) => ({
				url: `${apiPrefix}/auth/restore`,
				method: "POST",
				body,
				code,
				email,
				headers: {
					'Content-Type': 'application/json'
				}
			})
		}),
		refreshToken: builder.mutation({
			query: ({refreshToken, body}) => ({
				url: `${apiPrefix}/auth/refresh`,
				method: "POST",
				body,
				refreshToken,
				headers: {
					'Content-Type': 'application/json'
				}
			})
		}),
		userLikes: builder.query({
			query: ({body, access}) => ({
				url: `${apiPrefix}/user/likes`,
				method: "GET",
				body: body,
				headers: {
					'Content-Type': 'application/json',
					'Authorization': `Bearer ${access}`
				}
			})
		}),
		userLikesPut: builder.mutation({
			query: ({access}) => ({
				url: `${apiPrefix}/user/current/sendVerify`,
				method: "PUT",
				headers: {
					'Authorization': `Bearer ${access}`
				}
			})
		}),
		userLikesPutItemId: builder.mutation({
			query: () => ({
				url: `${apiPrefix}/user/likes/{itemId}`,
				method: "DELETE",
				headers: {
					'Content-Type': 'application/json'
				}
			})
		}),
		userItems: builder.query({
			query: ({itemId}) => ({
				url: `${apiPrefix}/items/${itemId}`,
				method: "GET",
				headers: {
					'Content-Type': 'application/json'
				}
			})
		}),
		itemsPopular: builder.query({
			query: () => ({
				url: `${apiPrefix}/items/popular`,
				method: "GET",
				headers: {
					'Content-Type': 'application/json'
				}
			})
		}),
		categories: builder.query({
			query: () => ({
				url: `${apiPrefix}/categories`,
				method: "GET",
				headers: {
					'Content-Type': 'application/json'
				}
			})
		}),
		getSpecificCategory: builder.query({
			query: ({categoryId}) => ({
				url: `${apiPrefix}/categories/${categoryId}`,
				method: "GET",
				headers: {
					'Content-Type': 'application/json'
				}
			})
		})
	})
})
export const {
	useGetCurrentUserVerifyMutation,
	useGetCurrentUserQuery,
	useGetSendVerifyUser,
	useRegistrationMutation,
	useLoginMutation,
	useSendRestoreMutation,
	useRestoreMutation,
	useRefreshTokenMutation,
	useUserLikesQuery,
	useUserLikesPutQuery,
	useUserLikesPutItemIdQuery,
	useUserItemsQuery,
	useItemsPopularQuery,
	useCategoriesQuery,
	useGetSpecificCategoryQuery
} = api

