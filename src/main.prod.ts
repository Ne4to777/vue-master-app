import './assets/styles/reset.css'
import './assets/styles/fonts.styl'
import './assets/styles/icons.styl'
import './assets/styles/global.styl'

import App from './App.vue'
import store from './store'
import polyfillsPlugin from './plugins/polyfills'
import spxPlugin from './plugins/spx'
import initDataSPPlugin from './plugins/initDataSP'

declare const Vue: any

Vue.config.productionTip = false

Vue.use(polyfillsPlugin)
Vue.use(spxPlugin)
Vue.use(store)
Vue.use(initDataSPPlugin)

Vue.component(App.name, App)

// new Vue({
// 	store,
// 	render: (h: any) => h(App)
// }).$mount('#app')
