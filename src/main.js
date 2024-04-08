import Vue from 'vue'
import App from '@/App.vue'
import AppLayout from '@/layouts/AppLayout'
import router from '@/router'
import store from '@/store/index.js'
import Layer from '@/assets/js/Layer'
import axios from 'axios'

Vue.prototype.$S3 = 'https://mustit-ux.s3.ap-northeast-2.amazonaws.com/img/m/'
Vue.config.productionTip = process.env.NODE_ENV !== 'production'
Vue.prototype.$axios = axios
Vue.component('AppLayout', AppLayout)
Vue.use(Layer)

new Vue({
    router,
    store,
    render: (h) => h(App)
}).$mount('#app')
