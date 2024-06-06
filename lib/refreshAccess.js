import {deleteCookie, getCookie, setCookie} from "./cookies";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";

export default async (force, callback) => {
	console.log('refreshing');
	let access = getCookie('access');
	let refresh = getCookie('renew');
	console.log(refresh);
	if (force || (!access && refresh)) {
		try {
			let response = await fetch(
				`${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}${
					process.env.NEXT_PUBLIC_API_PREFIX
				}/auth/refresh`,
				{
					method: "POST",
					body: JSON.stringify({refreshToken: refresh}),
					headers: {
						"Content-Type": "application/json",
					},
				}
			);
			const resJson = await response.json();
			console.log(resJson);
			setCookie('access', resJson.accessToken)
			setCookie('renew', resJson.refreshToken)
			if (callback) await callback();
		} catch (e) {
			console.log(e);
			deleteCookie('access');
			deleteCookie('renew')
		}
	}
}