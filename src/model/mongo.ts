import privateJSON from '@/../dev/private.json'

declare const axios: any

export default {
	user: () => axios
		.get(`/api/users/${privateJSON.userID}`)
		.then((res: any) => res.data)
		.catch(console.log),
	userSP: () => axios
		.get(`/api/users-sp/${privateJSON.userID}`)
		.then((res: any) => res.data)
		.catch(console.log)
}