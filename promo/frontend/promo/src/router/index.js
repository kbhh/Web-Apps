import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import SignUp from '@/components/User/SignUp'
import Login from '@/components/User/Login'
import UHome from '@/components/User/UHome'
import AHome from '@/components/User/AHome'
import CreateEvent from '@/components/Event/CreateEvent'
import Event from '@/components/Event/Event'
import Events from '@/components/Event/Events'
import Diarys from '@/components/Diary/Diarys'
import Tasks from '@/components/Task/Tasks'
import Logout from '@/components/User/logout'
import CEvents from '@/components/Event/CEvents'
import CPass from '@/components/User/CPass'
import About from '@/components/About'
// import Product from '@/components/Promo/Product'
import ProductView from '@/components/Event/Product'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: 'prodetail/:id',
      name: 'prodetail',
      component: ProductView
    },
    {
      path: '/chpassword',
      name: 'Change Password',
      component: CPass
    },
    {
      path: '/cevents',
      name: 'CEvents',
      component: CEvents
    },
    {
      path: '/logout',
      name: 'Logout',
      component: Logout
    },
    {
      path: '/tasks',
      name: 'Tasks',
      component: Tasks
    },
    {
      path: '/diary',
      name: 'Diary',
      component: Diarys
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/createevent',
      name: 'Create Event',
      component: CreateEvent
    },
    {
      path: '/Event/:id',
      name: 'Event',
      component: Event
    },
    {
      path: '/events',
      name: 'Events',
      component: Events
    },
    {
      path: '/uhome',
      name: 'UserHome',
      component: UHome
    },
    {
      path: '/ahome',
      name: 'AdminHome',
      component: AHome
    },
    {
      path: '/signup',
      name: 'Sign Up',
      component: SignUp
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
