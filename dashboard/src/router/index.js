import Login from '@/components/views/Login'
import Sign from '@/components/views/Sign'
import Dashboard from '@/components/DashboardLayout/dashboard'



const routes = [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
      meta: { requiresAuth: false }
    },
    {
      path: '*',
      redirect: '/'

    }
  ]

export default routes
