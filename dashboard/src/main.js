// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import routes from './router'
import VueRouter from 'vue-router'
import axios from 'axios'
//Vue.config.productionTip = false
import Chartist from 'chartist'

Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  linkActiveClass: 'active'
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // const url = 'https://backend.botlive.io/api/auth/member'
    // axios.post(url)
    // .then(function (response) {
    //   const status = response.data.success
    //   if (!status) {
    //     next({
    //       path: '/',
    //       redirect: '/'
    //     })
    //   } else {
    //     next()
    //   }
    // })
    // .catch(function (error) {
    //   console.log(error)
    // })
    if(getCookie('token')) {
      next()
    }
    else {
      alert("Unauthorized, Pls login to continue")
      next({
        path:'/',
        redirect: '/'
      })
    }
  } else if (to.matched.some(record => record.meta.clearCookies)) {
    document.cookie = `token=logged_out`
    next() // make sure to always call next()!
  } else {
    next() // make sure to always call next()!
  }
})

Object.defineProperty(Vue.prototype, '$Chartist', {
  get () {
    return this.$root.Chartist
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  data: {
    Chartist: Chartist
  }
})

function getCookie (name) {
  var value = '; ' + document.cookie
  var parts = value.split('; ' + name + '=')
  if (parts.length === 2) return parts.pop().split(';').shift()
}
