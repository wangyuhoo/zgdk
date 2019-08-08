import Vue from 'vue'
import MintUI from 'mint-ui'
import { Lazyload } from 'mint-ui';
import 'mint-ui/lib/style.css'
import App from './App.vue'
import router from './router'
import VueClipboard from 'vue-clipboard2'

import '@/permission' // permission control

VueClipboard.config.autoSetContainer = true // add this line
Vue.use(VueClipboard)

// Vue.use(Table)
// Vue.use(TableColumn)

Vue.use(MintUI)
Vue.use(Lazyload)

Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
