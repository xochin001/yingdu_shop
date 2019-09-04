import Vue from 'vue'
import App from './App'


import MyPlugin from './minxins'
Vue.use(MyPlugin)
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
