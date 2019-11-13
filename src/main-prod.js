import App from './App.vue'
import NotFound from './components/global/NotFound.vue'
import storePlugin from './plugins/store'
import getStore from './storage/store'

Vue.config.productionTip = false

Vue.use(VueRouter)
getStore().then(store => {
	Vue.use(storePlugin, store)

	Vue.component('not-found', NotFound)
	Vue.component('master-app', App)
})
