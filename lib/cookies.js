export const getCookie = (name) => {
	let matches = document.cookie.match(new RegExp(
		"(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
	));
	return matches ? decodeURIComponent(matches[1]) : undefined;
}
export const setCookie = (key, value, minutesToExpire) => {
	let expires = "";
	if (minutesToExpire) {
		let date = new Date();
		date.setTime(date.getTime() + (minutesToExpire * 60 * 1000));
		expires = "; expires=" + date.toUTCString();
	}
	document.cookie = key + "=" + value + expires + "; path=/";
}
export const deleteCookie = (key) => {
	document.cookie = key + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}



