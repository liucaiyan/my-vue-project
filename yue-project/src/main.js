// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import resource from './resource'

//热门活动组件
import hotActivity from './components/HomeComponents/hotActivity'
Vue.component("home-hot",hotActivity)
//蒙层组件
import logInMask from './components/HomeComponents/logInMask'
Vue.component("run-mask",logInMask)
//景点组件
import HomeScenery from './components/HomeComponents/scenery'
Vue.component("home-sceney",HomeScenery)

Vue.config.productionTip = false

import BaseCss from '../static/base.css'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // resource,
  template: '<App/>',
  components: { App }
})
