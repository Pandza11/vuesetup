import Vue from 'vue'
import Router from 'vue-router'
import Resource from 'vue-resource'

Vue.use(Resource)
Vue.use(Router)

import home from './components/Home.vue'
import dashboard from './components/Dashboard.vue'
import projects from './components/Projects.vue'

// application routes
const routes = [
  { path: '/', component: home },
  { path: '/dashboard', component: dashboard },
  { path: '/projects', component: projects }
]

// export router instance
export default new Router({
  mode: 'history',
  routes,
  linkActiveClass: 'is-active'
})
