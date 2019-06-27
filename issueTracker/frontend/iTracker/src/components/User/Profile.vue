<template>
  <v-container fill-height fluid>
      <v-layout fill-height>
          <v-flex>
        <v-card flat>
          <v-card-media height="200px" class="text-sm-center">
            <v-flex class="justify">
              <v-avatar size="150px">
                  <img  :src="'http://localhost:3030/' + r_user.profileImg">
              </v-avatar>
               <h3 >{{ r_user.firstName}} {{ r_user.lastName}} </h3> 
              </v-flex>
          </v-card-media>
          <v-card-text>
             <v-list dense>
               <v-list-tile>
                 <v-list-tile-content>Email </v-list-tile-content>
                 <v-list-tile-content>{{ r_user.email }}</v-list-tile-content>
               </v-list-tile>

               <v-list-tile>
                 <v-list-tile-content>Role </v-list-tile-content>
                 <v-list-tile-content>{{ r_user.role }}</v-list-tile-content>
               </v-list-tile>

               <v-list-tile>
                 <v-list-tile-content>Gender </v-list-tile-content>
                 <v-list-tile-content>{{ r_user.gender }}</v-list-tile-content>
               </v-list-tile>
             </v-list>

          </v-card-text>
      </v-card>
          </v-flex>
        
      </v-layout>
      
  </v-container>
</template>

<script>
import {mapState} from 'vuex'
export default {
  data () {
    return {
      r_user: undefined
    }
  },
  computed: {
    ...mapState('auth', ['user'])
  },
  mounted () {
    if (!this.user) {
      this.$router.push('/login')
    }
    let uid = this.$route.params.id
    this.$store.dispatch('users/get', uid)
               .then(res => {
                 console.log(res)
                 this.r_user = res
               })
    console.log()
  }
}
</script>

<style>

</style>
