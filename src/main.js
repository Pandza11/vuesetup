import Vue from 'vue'
import navbar from './components/navbar'
import router from './router'

import Resource from 'vue-resource'

Vue.use(Resource)

import store from './store'

/* eslint-disable no-new */
new Vue({
  template: `
  <div>
    <navbar />
    <section class="section">
      <div class="container is-fluid">
        <router-view></router-view>
      </div>
    </section>
  </div>
  `,
  router,
  store,
  components: {
    navbar
  }
}).$mount('#app')
