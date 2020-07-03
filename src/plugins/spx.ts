/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-param-reassign */

declare const spx: Function

export default {
	install(Vue: any, params: any) {
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
		Vue.prototype.$q = spx
	}
}