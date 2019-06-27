import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/User/Login'
import SignUp from '@/components/User/SignUp'
import UHome from '@/components/User/UHome'
import AHome from '@/components/User/AHome'
import ArchiveUpload from '@/components/Archive/ArchiveUpload'
import ArchiveUpdate from '@/components/Archive/ArchiveUpdate'
import Archives from '@/components/Archive/Archives'
import PassRes from '@/components/User/PassRes'
import Comment from '@/components/Comment/Comment'
import Comments from '@/components/Comment/Comments'
import SearchArchive from '@/components/Archive/SearchArchive'
import LogOut from '@/components/User/LogOut'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Users from '@/components/User/Users'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/contactus',
      name: 'Contact Us',
      component: Contact
    },
    {
      path: '/aboutus',
      name: 'About Us',
      component: About
    },
    {
      path: '/users',
      name: 'Users',
      component: Users
    },
    {
      path: '/logout',
      name: 'Logout',
      component: LogOut
    },
    {
      path: '/sarchive',
      name: 'Search',
      component: SearchArchive
    },
    {
      path: '/comment',
      name: 'Comment',
      component: Comment
    },
    {
      path: '/archiveupdate/:id',
      name: 'Update Archive',
      component: ArchiveUpdate
    },
    {
      path: '/comments',
      name: 'Comments',
      component: Comments
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
      path: '/signup',
      name: 'SignUp',
      component: SignUp
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
      path: '/aupload',
      name: 'Archive Upload',
      component: ArchiveUpload
    },
    {
      path: '/archives',
      name: 'Report',
      component: Archives
    }
  ]
})
