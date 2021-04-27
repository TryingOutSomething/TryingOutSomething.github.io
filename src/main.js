import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'

import './configs/loader'
import './plugins/vue-observe-visiblity'

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
