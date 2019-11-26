/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
export default {
	install(Vue, params) {
		spx()
			.user()
			.setDefaults({
				customWebTitle: 'common',
				customListTitle: 'Users',
				customIdColumn: 'userID',
				customLoginColumn: 'login',
				customNameColumn: 'Title',
				customEmailColumn: 'email',
				customQuery: 'Boolean active eq true'
			})
		Vue.prototype.$spx = spx
	}
}
