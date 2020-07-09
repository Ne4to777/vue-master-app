/* eslint-disable no-param-reassign */
import privateJSON from '@/../dev/private.json'

declare const axios: any

const MODEL = {
	user: () => axios
		.get(`/api/users/${privateJSON.userID}`)
		.then((res: any) => res.data)
		.catch(console.log),
	userSP: () => axios
		.get(`/api/users-sp/${privateJSON.userID}`)
		.then((res: any) => res.data)
		.catch(console.log)
}

const initData = (model: any) => () => Promise.all([
	model.user(),
	model.userSP()
])
	.then(([user, userSP]) => ({ user, userSP }))

export default {
	install(Vue: any) {
		Vue.prototype.$initData = initData(MODEL)
	}
}