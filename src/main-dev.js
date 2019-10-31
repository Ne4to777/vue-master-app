import VueInternal from 'vue'
import App from './App.vue'
import store from './store'

VueInternal.config.productionTip = false

Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(store)

new Vue({
	render: h => h(App)
}).$mount('#app')
