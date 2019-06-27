<template>
<v-container xs12>
      <v-layout sm12 xs12>
          <v-flex sm12 xs12>
              <v-card >
                  <v-toolbar flat class="secondary">
                      <v-toolbar-title class="white--text">
                       Change Password
                      </v-toolbar-title>
                  </v-toolbar>
                  <v-card-text>
                      <form @submit.prevent="changePass">
                          
                          <v-layout>
                              <v-flex>
                                  <v-text-field
                                   type="password"
                                   label="Current Password"
                                   name="cpassword"
                                   v-model="cPassword"
                                   required></v-text-field>
                              </v-flex>
                          </v-layout>
                          <v-layout>
                              <v-flex>
                                  <v-text-field
                                   type="password"
                                   label="New Password"
                                   name="nPassword"
                                   v-model="nPassword"
                                   required></v-text-field>
                              </v-flex>
                          </v-layout>
                          <v-layout>
                              <v-flex>
                                  <v-text-field
                                   type="password"
                                   label="Confirm Password"
                                   name="confPassword"
                                   v-model="confPassword"
                                   :rules="[comparePassword]"
                                   required></v-text-field>
                              </v-flex>
                          </v-layout>
                          <v-layout>
                            <v-flex>
                                <p class="error--text">{{ error }}</p>
                            </v-flex>
                        </v-layout>
                          <v-layout>
                              <v-flex>
                                  <v-btn :disabled="!formIsValid" type="submit" class="red accent-3 white--text">Change Password</v-btn>
                              </v-flex>
                          </v-layout>
                      </form>
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
      cPassword: undefined,
      nPassword: undefined,
      confPassword: undefined,
      error: undefined
    }
  },
  computed: {
    comparePassword () {
      return this.confPassword !== this.nPassword ? 'Password Did not Match' : ''
    },
    formIsValid () {
      return (
             this.cPassword !== '' &&
             this.nPassword !== '' &&
             this.confPassword !== '')
    },
    ...mapState('auth', ['user'])
  },
  methods: {
    changePass () {
      this.$store.dispatch('users/patch', [this.user._id, {password: this.nPassword}])
                 .then(res => {
                   this.$router.push('/login')
                 })
                 .catch(err => {
                   console.log(err)
                 })
    }
  },
  mounted () {
    if (!this.user) {
      this.$router.push('/')
    }
  }
}
</script>

<style>

</style>
