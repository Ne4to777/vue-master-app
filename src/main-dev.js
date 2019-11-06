import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import storePlugin from './plugins/store'
import store from './store'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(storePlugin, store)

new Vue({
	render: h => h(App)
}).$mount('#app')
