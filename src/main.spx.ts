import './assets/styles/reset.css'
import './assets/styles/fonts.styl'
import './assets/styles/icons.styl'
import './assets/styles/global.styl'

import Vue from 'vue'
import App from './App.vue'
import store from './store'
import spxPlugin from './plugins/spx'

Vue.config.productionTip = false

Vue.use(spxPlugin)

new Vue({
	store,
	render: (h) => h(App)
}).$mount('#master-app')
