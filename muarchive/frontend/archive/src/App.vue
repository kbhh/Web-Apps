<template>
  <v-app light>
    <v-toolbar class="primary white--text" flat>
      <v-toolbar-title class="">
         Mekelle Archival System
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="white--text" >
           <v-btn v-for="item in menuItems" :key="item.name" :to="item.url" flat class="white--text"> {{ item.name}}</v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import {mapState} from 'vuex'
export default {
  data () {
    return {
    }
  },
  computed: {
    menuItems () {
      let menus = [
        {name: 'Home', url: '/'},
        {name: 'About us', url: '/aboutus'},
        {name: 'Contact Us', url: '/contactus'},
        {name: 'Login', url: '/login'},
        {name: 'SignUp', url: '/signup'}
      ]
      if (this.user && (this.user.role === 'user')) {
        menus = [
        {name: 'Home', url: '/uhome'},
        {name: 'Search Archive', url: '/sarchive'},
        {name: 'Comment', url: '/comment'},
        {name: 'Change Password', url: '/cpass'},
        {name: 'Logout', url: '/logout'}
        ]
      }
      if (this.user && (this.user.role === 'admin')) {
        menus = [
        {name: 'Home', url: '/ahome'},
        {name: 'Upload', url: '/aupload'},
        {name: 'Report', url: '/archives'},
        {name: 'View Comment', url: '/comments'},
        {name: 'Change Password', url: '/cpass'},
        {name: 'Users', url: '/users'},
        {name: 'Logout', url: '/logout'}
        ]
      }
      return menus
    },
    ...mapState('auth', ['user'])
  }
}
</script>
