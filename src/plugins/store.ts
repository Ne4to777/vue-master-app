/* eslint-disable no-param-reassign */
import Vuex from 'vuex'
import master from '@/store/modules/master/index'

export default {
	install(Vue: any) {
		Vue.use(Vuex)
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