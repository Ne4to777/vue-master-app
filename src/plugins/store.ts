/* eslint-disable no-param-reassign */
import master from '@/store/index'

// declare const Vuex: any

export default {
	install(Vue: any, Vuex: any) {
		Vue.prototype.$store = new Vuex.Store({
			state: () => ({}),
			mutations: {
			},
			actions: {
			},
			modules: {
				master
			}
		})
	}
}