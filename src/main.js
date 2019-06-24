import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/permission'
import '@/styles/index.scss' // global css
import '@/icons' // icon
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en' // lang i18n
// 不加这个sideBar 文字显示不出来
import 'element-ui/lib/theme-chalk/index.css'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

Vue.config.productionTip = true

// set ElementUI lang to EN
Vue.use(ElementUI, { locale })

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
