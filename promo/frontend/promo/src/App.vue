<template>
  <el-container>
   <el-header
            style="background-color:#545c64;color: white; width: 100%"
            mode="horizontal"
>  <el-row>
         <h1 style="text-align: center; color: #fff">Festival Calandar With Business Promotion</h1>
</el-row>
      </el-header>
     <el-header> 
         
        <el-row>
           <el-menu 
        background-color="#545c64"
        text-color="#fff"
        class="el-menu-demo"
        active-text-color="#ffd04b"
        mode="horizontal">
         <router-link v-for="menu in menuItems"  :key="menu.index" :to="menu.url">
<el-menu-item  :index="menu.index + ''"         style="font-size: 20px"
>
           {{ menu.title}}
          </el-menu-item>
         </router-link>
          
       </el-menu>
          </el-row> 
      
     </el-header>
     <el-main>
       <router-view></router-view>
     </el-main>
     <el-footer style="background-color:#545c64; margin-top: 300px; text-align: center;color: #fff">
       <h5         
>Copyright @ 2018G.C</h5>
     </el-footer>
  </el-container>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'app',
  data () { return {} },
  computed: {
    ...mapState('auth', ['user']),
    menuItems () {
      let menus = [
        {index: 1, title: 'Home', url: '/'},
        {index: 2, title: 'Events', url: '/cevents'},
        {index: 3, title: 'About', url: '/about'},
        {index: 4, title: 'Login', url: '/login'},
        {index: 5, title: 'SignUp', url: '/signup'}
      ]

      if (this.user && (this.user.role === 'user')) {
        menus = [
          {index: 1, title: 'Home', url: '/uhome'},
          {index: 2, title: 'Events', url: '/events'},
          {index: 3, title: 'Tasks', url: '/tasks'},
          {index: 4, title: 'Diary', url: '/diary'},
          {index: 5, title: 'Change Password', url: '/chpassword'},
          {index: 6, title: 'Logout', url: '/logout'}
        ]
      }
      if (this.user && (this.user.role === 'admin')) {
        menus = [
          {index: 1, title: 'Home', url: '/ahome'},
          {index: 2, title: 'Events', url: '/events'},
          {index: 3, title: 'Create Events', url: '/createevent'},
          {index: 4, title: 'Tasks', url: '/tasks'},
          {index: 5, title: 'Change Password', url: '/chpassword'},
          {index: 6, title: 'Logout', url: '/logout'}
        ]
      }
      return menus
    }
  },
  methods: {
    navMenu (key, keyPath) {
      this.$router.push(this.menuItems[key].url)
    }
  },
  mounted () {
  }
}
</script>
<style>
</style>