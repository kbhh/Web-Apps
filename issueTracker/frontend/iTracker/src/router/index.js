import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/User/Login'
import CreatProfile from '@/components/User/CreatProfile'
import UHome from '@/components/User/UHome'
import AHome from '@/components/User/AHome'
import CreatIssue from '@/components/Issue/CreatIssue'
import UpdateIssue from '@/components/Issue/UpdateIssue'
import Issues from '@/components/Issue/Issues'
import PassRes from '@/components/User/PassRes'
import SearchIssue from '@/components/Issue/SearchIssue'
import LogOut from '@/components/User/LogOut'
import CreateUser from '@/components/User/CreatUser'
import MIssues from '@/components/Issue/MIssues'
import Profile from '@/components/User/Profile'
import Users from '@/components/User/Users'
import AssignIssue from '@/components/Issue/AssignIssue'
import ReviewIssue from '@/components/Issue/ReviewIssue'
import About from '@/components/About'
import Contact from '@/components/Contact'
// import Issue from '@/components/Issue/Issue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/aboutus',
      name: 'About',
      component: About
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/users',
      name: 'Users',
      component: Users
    },
    {
      path: '/revissue/:id',
      name: 'ReviewIssue',
      component: ReviewIssue
    },
    {
      path: '/createuser',
      name: 'Create User',
      component: CreateUser
    },
    {
      path: '/profile/:id',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/logout',
      name: 'Logout',
      component: LogOut
    },
    {
      path: '/sissue',
      name: 'Search',
      component: SearchIssue
    },
    {
      path: '/updateIssue/:id',
      name: 'Update Issue',
      component: UpdateIssue
    },
    {
      path: '/cpass',
      name: 'Change Password',
      component: PassRes
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/createprofile',
      name: 'Creat Profile',
      component: CreatProfile
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
      path: '/createissue',
      name: 'Creat Issue',
      component: CreatIssue
    },
    {
      path: '/myissues',
      name: 'My Issues',
      component: MIssues
    },
    {
      path: '/issues',
      name: 'Issues',
      component: Issues
    },
    {
      path: '/assignIssue/:id',
      name: 'AssignIssue',
      component: AssignIssue
    }
  ]
})
