import './assets/styles/reset.css'
import './assets/styles/fonts.styl'
import './assets/styles/icons.styl'
import './assets/styles/global.styl'

import master from '@/store/index'
import App from './App.vue'
import polyfillsPlugin from './plugins/polyfills'
import spxPlugin from './plugins/spx'
import initDataSPPlugin from './plugins/initialDataSP'

declare const Vue: any
declare const Vuex: any

Vue.config.productionTip = false

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
Vue.use(polyfillsPlugin)
Vue.use(spxPlugin)
Vue.use(initDataSPPlugin)

Vue.component(App.name, App)