import App from './App.vue'
import storePlugin from './plugins/store'
import store from './store'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(storePlugin, store)

Vue.component('master-app', App)
