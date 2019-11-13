/* eslint-disable no-underscore-dangle */
import Vue from 'vue'
import App from './App.vue'
import storePlugin from './plugins/store'
import getStore from './storage/store'

Vue.config.productionTip = false

window._spPageContextInfo = {
	userId: 10842
}
getStore().then(store => {
	Vue.use(storePlugin, store)

	new Vue({
		render: h => h(App)
	}).$mount('#app')
})
