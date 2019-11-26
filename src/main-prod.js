import VueScrollTo from 'vue-scrollto'
import App from './App.vue'
import NotFound from './components/global/NotFound.vue'
import storePlugin from './plugins/store'
import store from './storage/store'
import errorsHandlerPlugin from './plugins/errorsHandler'
import polyfillsPlugin from './plugins/polyfills'
import spxPlugin from './plugins/spx'

Vue.config.productionTip = false

Vue.use(errorsHandlerPlugin)
Vue.use(polyfillsPlugin)
Vue.use(spxPlugin)
Vue.use(VueRouter)
Vue.use(storePlugin, store)
Vue.use(VueScrollTo)
Vue.component('not-found', NotFound)
Vue.component('master-app', App)
