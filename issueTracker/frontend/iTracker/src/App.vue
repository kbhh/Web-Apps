<template>
  <v-app light>
    

    <v-toolbar class="primary white--text"  flat dense fixed clipped-left app>
       <v-toolbar-side-icon>
           <v-avatar :tile="tile" size="40px">
              <img src="http://www.mu.edu.et/images/mulogo.png">
           </v-avatar>
         </v-toolbar-side-icon>
      <v-toolbar-title class="">
        iTrack
      </v-toolbar-title>
      <v-toolbar-items v-show="!userOn" class="white--text ml-3" >
           <v-btn v-for="item in menuItems" :key="item.name" :to="item.url" flat class="white--text"> {{ item.name}}</v-btn>
      </v-toolbar-items>
    </v-toolbar>  

    <v-navigation-drawer
    clipped
    fixed
    app
    v-if="userOn"
    >
      <v-list dense>
        <v-list-tile v-for="item in menuItems" :key="item.name" :to="item.url">
          
           <v-list-tile-content>
              <v-list-tile-title>
                {{ item.name }}
              </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

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
      tile: true
    }
  },
  computed: {
    userOn () {
      if (this.user) {
        return true
      }
      return false
    },
    menuItems () {
      let menus = [
        {name: 'Home', url: '/'},
        {name: 'About us', url: '/aboutus'},
        {name: 'Contact Us', url: '/contact'},
        {name: 'Login', url: '/login'}
      ]
      if (this.user && (this.user.role === 'Student')) {
        menus = [
        {name: 'Home', url: '/uhome'},
        {name: 'Profile', url: '/profile/' + this.user._id},
        {name: 'View Issues', url: '/myissues'},
        {name: 'Change Password', url: '/cpass'},
        {name: 'Create Issue', url: '/createissue'},
        {name: 'Logout', url: '/logout'}
        ]
      }
      if (this.user && (this.user.role === 'Manager')) {
        menus = [
        {name: 'Home', url: '/uhome'},
        {name: 'Profile', url: '/profile/' + this.user._id},
        {name: 'Search Issue', url: '/sissue'},
        {name: 'Issues', url: '/issues'},
        {name: 'Change Password', url: '/cpass'},
        {name: 'Logout', url: '/logout'}
        ]
      }
      if (this.user && (this.user.role === 'Stuff')) {
        menus = [
        {name: 'Home', url: '/uhome'},
        {name: 'Profile', url: '/profile/' + this.user._id},
        {name: 'Search Issue', url: '/sissue'},
        {name: 'View Issues', url: '/issues'},
        {name: 'My Issues', url: '/myissues'},
        {name: 'Create Issue', url: '/createissue'},
        {name: 'Change Password', url: '/cpass'},
        {name: 'Logout', url: '/logout'}
        ]
      }
      if (this.user && (this.user.role === 'Admin')) {
        menus = [
        {name: 'Home', url: '/ahome'},
        {name: 'Profile', url: '/profile/' + this.user._id},
        {name: 'Creat User', url: '/createuser'},
        {name: 'Users', url: '/users'},
        {name: 'Change Password', url: '/cpass'},
        {name: 'Logout', url: '/logout'}
        ]
      }
      return menus
    },
    ...mapState('auth', ['user'])
  }
}
</script>
