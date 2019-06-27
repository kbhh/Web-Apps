<template>
  <v-container xs6>
      <v-layout sm12 xs12>
          <v-flex sm12 xs12>
              <v-card flat >
                  <v-toolbar flat class="secondary">
                      <v-toolbar-title class="white--text">
                        Log IN
                      </v-toolbar-title>
                  </v-toolbar>
                  <v-card-text>
                      <form @submit.prevent="onSignIn">
                          <v-layout>
                              <v-flex> 
                                  <v-text-field
                                  type="email"
                                  label="Email Address"
                                  name="email"
                                  v-model="email"
                                  required></v-text-field>
                              </v-flex>
                          </v-layout>
                          <v-layout>
                              <v-flex>
                                  <v-text-field
                                   type="password"
                                   label="Password"
                                   name="password"
                                   v-model="password"
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
                                  <v-btn :disabled="!formIsvalid" type="submit" class="red accent-3 white--text">Log In</v-btn>
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
import {mapActions, mapState} from 'vuex'
export default {
  data () {
    return {
      email: undefined,
      password: undefined,
      error: undefined
    }
  },
  computed: {
    formIsvalid () {
      return this.email !== '' && this.password !== ''
    },
    ...mapState('auth', ['user'])
  },
  methods: {
    onSignIn () {
      this.authenticate({strategy: 'local', email: this.email, password: this.password})
          .then(response => {
            if (this.user.step) {
              if (this.user.step === 0) {
                this.$router.push('/createprofile')
              } else {
                if (this.user.role === 'Admin') {
                  this.$router.push('/ahome')
                } else {
                  this.$router.push('/uhome')
                }
              }
            } else {
              this.$store.dispatch('users/patch', [this.user._id, {step: 0}, {}])
              this.$router.push('/createprofile')
            }
          })
          .catch(error => {
            console.log(error)
            let type = error.className
            error = Object.assign({}, error)
            error.message = (type === 'not-authenticated')
                             ? 'Invalid Email Address or Password ' : 'Unable to sign in'
            this.error = error.message
          })
    },
    ...mapActions('auth', ['authenticate'])
  }
}
</script>

<style>

</style>
