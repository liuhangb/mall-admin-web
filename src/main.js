import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en' // lang i18n
import store from './store'
import router from './router'
import '@/styles/index.scss' // global css
import '@/icons' // icon
import '@/permission' // permission control
import 'normalize.css/normalize.css' // A modern alternative to CSS resets
// 如果不引用这个, 侧边栏的文字显示不出来
import 'element-ui/lib/theme-chalk/index.css'

import { mockXHR } from '../mock'
if (process.env.NODE_ENV === 'production') {
  mockXHR()
}

Vue.config.productionTip = false
// set ElementUI lang to EN
Vue.use(ElementUI, { locale })

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
})
