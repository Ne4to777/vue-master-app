import Vue from 'vue'
import Notifications from 'vue-notification'
import App from './App.vue'
import storePlugin from './plugins/store'
import store from './storage/store'
import errorHandler from './errorHandler'

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

Vue.use(storePlugin, store)
Vue.use(Notifications)

window.onerror = function (message, source, lineno, colno, error) { }


// Vue.config.errorHandler = errorHandler

new Vue({
	render: h => h(App)
}).$mount('#app')
