/* eslint-disable no-underscore-dangle */
import Vue from 'vue'
import App from './App.vue'
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

window._spPageContextInfo = {
	userId: 10842
}

Vue.use(storePlugin, store)

new Vue({
	render: h => h(App)
}).$mount('#app')
