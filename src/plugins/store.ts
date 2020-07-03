/* eslint-disable no-param-reassign */
import Vuex from 'vuex'

export default {
	install(Vue: any, params: any) {
		Vue.use(Vuex)
		Vue.prototype.$store = new Vuex.Store({
			modules: {
				master: params
			}
		})
	}
}
