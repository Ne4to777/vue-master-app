/* eslint-disable no-param-reassign */
export default {
	install(Vue, params) {
		Vue.prototype.$masterStore = new Vuex.Store(params)
	}
}
