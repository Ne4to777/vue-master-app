import App from './App.vue'
import NotFound from './components/global/NotFound.vue'
import storePlugin from './plugins/store'
import store from './storage/store'

spx().user().setDefaults({
	customWebTitle: 'common',
	customListTitle: 'Users',
	customIdColumn: 'userID',
	customLoginColumn: 'login',
	customNameColumn: 'Title',
	customEmailColumn: 'email',
	customQuery: 'Boolean active eq true'
})

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.component('not-found', NotFound)
Vue.component('master-app', App)
Vue.use(storePlugin, store)
