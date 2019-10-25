import App from './App.vue'
import store from './store'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(store)

new Vue({
	render: h => h(App),
}).$mount('#app')
