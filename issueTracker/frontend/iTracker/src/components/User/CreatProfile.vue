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
                    <form @submit.prevent="onUpdate">
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
                            <v-flex>
                                <v-select name="role" v-model="subRole" :items="managers" label="Your Role as Stuff" required> </v-select>
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
                        <v-layout v-if="isStuff">
                            <v-flex>
                                <image-upload dataType="image/*" @uploaded="imgAdded"></image-upload>
                            </v-flex>
                        </v-layout>
                        
                        <v-layout>
                            <v-flex>
                                <p class="error--text">{{ error }}</p>
                            </v-flex>
                        </v-layout>
                        <v-layout>
                            <v-flex>
                                <v-btn type="submit" class="red accent-3 white--text" :disabled="!formIsValid" >Update</v-btn>
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
import {mapState} from 'vuex'
import ImageUpload from '../Ex/FileUpload'
export default {
  data () {
    return {
      firstName: undefined,
      lastName: undefined,
      subRole: undefined,
      gender: undefined,
      img: undefined,
      error: undefined,
      managers: ['Administrative', 'Academic', 'Library-Related ', 'Student-Related', 'Registrar', 'ICT', 'Financial', 'Protectors']
    }
  },
  components: {ImageUpload},
  computed: {
    comparePassword () {
      return this.confPassword !== this.password ? 'Password Did not Match' : ''
    },
    formIsValid () {
      return (this.firstName !== '' &&
             this.lastName !== '' &&
             this.email !== '')
    },
    isStuff () {
      if (this.user.role !== 'Admin') {
        return true
      }
      return false
    },
    ...mapState('auth', ['user'])
  },
  methods: {
    imgAdded (imge) {
      this.img = imge
      console.log(imge)
    },
    onUpdate () {
      let data = {
        firstName: this.firstName,
        lastName: this.lastName,
        gender: this.gender,
        profileImg: this.img,
        step: 1
      }
      this.$store.dispatch('users/patch', [this.user._id, data, {}])
                 .then(res => {
                   console.log(res)
                   this.$router.push('/')
                 })
    }
  }
}
</script>

<style>

</style>