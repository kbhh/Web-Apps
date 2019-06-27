<template>
<v-container >

<v-card>
      <v-toolbar class=" primary white--text" flat>
          <v-toolbar-title flat>Create User</v-toolbar-title>
      </v-toolbar>
      <v-card-text>
          <v-layout>
              <v-flex>
                  <form @submit.prevent="cUser">
                    <v-layout>
                      <v-flex>
                          <v-text-field label="Email" v-model="email"  required> </v-text-field>
                      </v-flex>
                  </v-layout>
                   <v-layout>
                      <v-flex>
                          <v-select :items="roles" label="Role" v-model="role" required> </v-select>
                      </v-flex>
                  </v-layout>
                   <v-layout>
                      <v-flex>
                          <v-text-field label="Password" type="password" v-model="password" required > </v-text-field>
                      </v-flex>
                  </v-layout>
                  <v-layout>
                      <v-flex>
                          <v-text-field label="Confirm Password" type="password" required :rules="[comparePassword]" v-model="confPassword" > </v-text-field>
                      </v-flex>
                  </v-layout>

                  <v-layout>
                      <v-flex>
                         <v-spacer></v-spacer>

                          <v-btn type="submit" class="primary white--text">Create</v-btn>
                      </v-flex>
                  </v-layout>
                  </form>
                  
              </v-flex>
          </v-layout>
      </v-card-text>
  </v-card>
</v-container>
  
</template>

<script>
import {mapActions, mapState} from 'vuex'
export default {
  data () {
    return {
      email: undefined,
      password: undefined,
      role: undefined,
      supRole: undefined,
      confPassword: undefined,
      roles: ['Student', 'Stuff', 'Manager', 'Admin']
    }
  },
  computed: {
    comparePassword () {
      return this.confPassword !== this.password ? 'Password Did not Match' : ''
    },
    ...mapState('auth', ['user'])
  },
  methods: {
    cUser () {
      let data = {
        email: this.email,
        password: this.password,
        role: this.role,
        step: 0
      }
      this.createUser(data)
          .then(res => {
            this.$router.push('/users')
          })
    },
    ...mapActions('users', {
      createUser: 'create'
    })
  },
  mounted () {
    if (!this.user) {
      this.$router.push('/login')
    }
    if (this.user.role !== 'Admin') {
      this.$router.push('/login')
    }
  }
}
</script>

<style>

</style>
