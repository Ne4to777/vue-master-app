import Vue from 'vue'
import Notifications from 'vue-notification'
import VueScrollTo from 'vue-scrollto'
import App from './App.vue'
import storePlugin from './plugins/store'
import store from './storage/store'
import errorsHandlerPlugin from './plugins/errorsHandler'
import polyfillsPlugin from './plugins/polyfills'
import spxPlugin from './plugins/spx'


Vue.config.productionTip = false

Vue.use(errorsHandlerPlugin)
Vue.use(polyfillsPlugin)
Vue.use(spxPlugin)
Vue.use(storePlugin, store)
Vue.use(Notifications)
Vue.use(VueScrollTo)


new Vue({
	render: h => h(App)
}).$mount('#app')
