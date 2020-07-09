import './assets/styles/reset.css'
import './assets/styles/fonts.styl'
import './assets/styles/icons.styl'
import './assets/styles/global.styl'

import Vue from 'vue'
import Vuex from 'vuex'
import master from '@/store/index'
import App from './App.vue'
import initDataMongoPlugin from './plugins/initialDataMongo'

Vue.config.productionTip = false

Vue.use(initDataMongoPlugin)
Vue.use(Vuex)

new Vue({
	store: new Vuex.Store({
		state: () => ({}),
		mutations: {
		},
		actions: {
		},
		modules: {
			master
		}
	}),
	render: (h) => h(App)
}).$mount('#app')
