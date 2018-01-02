// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'
import iView from 'iview'
import 'iview/dist/styles/iview.css' //使用CSS
import particles from 'particles.js'


Vue.config.productionTip = false
Vue.use(particles)
Vue.use(iView)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
