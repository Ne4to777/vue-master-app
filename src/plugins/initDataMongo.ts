/* eslint-disable no-param-reassign */

import model from '@/model/mongo'

export default {
	install(Vue: any) {
		Vue.prototype.$initData = () => Promise.all([
			model.user(),
			model.userSP()
		])
			.then(([user, userSP]) => ({ user, userSP }))
	}
}