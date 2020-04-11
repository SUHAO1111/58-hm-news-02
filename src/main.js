import Vue from 'vue'
import App from './App.vue'
import './style/base.less'
import './style/iconfont.less'
import 'lib-flexible'
import 'postcss-px2rem'
import router from './router'
import axios from 'axios'
import { Toast } from 'vant'
Vue.use(Toast)
//--------------创建全局组件------------------
import HmHeader from './components/HmHeader.vue'
import HmLogo from './components/HmLogo.vue'
import HmButton from './components/HmButton.vue'
import HmInput from './components/HmInput.vue'
Vue.component('hm-button', HmButton)
Vue.component('hm-logo', HmLogo)
Vue.component('hm-header', HmHeader)
Vue.component('hm-input', HmInput)
Vue.config.productionTip = false

axios.defaults.baseURL = 'http://localhost:3000'
Vue.prototype.$axios = axios
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
