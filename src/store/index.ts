import Vue from 'vue'
import Vuex from 'vuex'
import masterModule from '@/store/modules/master/index'

Vue.use(Vuex)

export default new Vuex.Store({
	state: () => ({}),
	mutations: {
	},
	actions: {
	},
	modules: {
		master: masterModule
	}
})
