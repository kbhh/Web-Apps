<template>
    <v-container>
        <v-layout>
            <v-flex>
                <v-card>
                    <v-toolbar flat class="secondary">
                        <v-toolbar-title class="white--text">Sign Up</v-toolbar-title>
                    </v-toolbar>
               <v-card-text>
                   <v-container>     
                    <form @submit.prevent="onSignUp">
                        <v-layout>
                            <v-flex>
                                <v-text-field name="firstName" v-model="firstName" label="First Name" required></v-text-field>
                            </v-flex>
                        </v-layout>
                        <v-layout>
                            <v-flex>
                                <v-text-field name="lastName" v-model="lastName" label="Last Name" required></v-text-field>
                            </v-flex>
                        </v-layout>
                        <v-layout>
                            <h4>Gender</h4>
                        </v-layout>
                        <v-layout>
                            <v-flex>
                                <v-radio-group v-model="gender" :mandatory="true" row>
                                    <v-radio label="Male" value="M"></v-radio>
                                    <v-radio label="Female" value="F"></v-radio>
                                </v-radio-group>
                            </v-flex>
                        </v-layout>
                        <v-layout>
                            <v-flex>
                                <v-text-field name="email" v-model="email" label="Email Address" type="email" required></v-text-field>
                            </v-flex>
                        </v-layout>
                        
                        <v-layout >
                            <v-flex>
                                <v-text-field name="password" v-model="password" label="Password" type="password" required></v-text-field>
                            </v-flex>
                        </v-layout>
                        
                        <v-layout>
                            <v-flex>
                                <v-text-field name="confPassword" v-model="confPassword" label="Confirm Password"  :rules="[comparePassword]" type="password" required></v-text-field>
                            </v-flex>
                        </v-layout>
                        <v-layout>
                            <v-flex>
                                <p class="error--text">{{ error }}</p>
                            </v-flex>
                        </v-layout>
                        <v-layout>
                            <v-flex>
                                <v-btn type="submit" class="red accent-3 white--text" :disabled="!formIsValid" >Sign Up</v-btn>
                            </v-flex>
                        </v-layout>
                    </form>
                    </v-container>

               </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import {mapActions, mapMutations, mapState} from 'vuex'
export default {
  data () {
    return {
      firstName: undefined,
      lastName: undefined,
      email: undefined,
      gender: undefined,
      role: 'user',
      password: undefined,
      confPassword: undefined,
      error: undefined
    }
  },
  computed: {
    comparePassword () {
      return this.confPassword !== this.password ? 'Password Did not Match' : ''
    },
    formIsValid () {
      return (this.firstName !== '' &&
             this.lastName !== '' &&
             this.email !== '' &&
             this.password !== '' &&
             this.confPassword !== '')
    },
    ...mapState('auth', ['user'])
  },
  methods: {
    onSignUp () {
      let user = {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        password: this.password,
        gender: this.gender,
        role: this.role
      }
      console.log('Sign up')
      this.creatUser(user)
          .then(response => {
            // authenticate after sign up
            this.authenticate({strategy: 'local', email: user.email, password: user.password})
                .then(response => {
                  if (this.user.role === 'user') {
                    if (this.user.approved === false) {
                      this.logout().then(() => { this.$router.push('/') })
                    } else {
                      this.$router.push('/uhome')
                    }
                  } else {
                    this.$router.push('/ahome')
                  }
                })
          })
          .catch(error => {
            console.log(error)
            let type = error.className
            error = Object.assign({}, error)
            error.message = (type === 'conflict')
                         ? 'The email address is already used or unavilable' : ''
            this.error = error.message
          })
    },
    ...mapActions('account', {
      creatUser: 'create'
    }),
    ...mapMutations('account', {
      clearCreatError: 'clearCreatError'
    }),
    ...mapActions('auth', ['authenticate', 'logout'])
  }
}
</script>

<style>

</style>