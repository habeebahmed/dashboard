import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Sign from '@/components/Sign'
import Dashboard from '@/components/DashboardLayout/dashboard'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/signup',
      name: 'Sign',
      component: Sign
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '*',
      redirect: '/'

    }
  ]
})
