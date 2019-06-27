<template>
  <v-container>
      <v-layout>

          <v-flex>
              <v-card>
                  <v-toolbar flat class="primary white--text">
                      <v-toolbar-title>Want To Say SomeThing About Us</v-toolbar-title>
                  </v-toolbar>
                  <v-card-text>
            <v-layout>
                  <v-flex>
                      <v-text-field multi-line label="Comment About Us" v-model="comment" placeholder="Please Write Something...."></v-text-field>
                  </v-flex>
              </v-layout>
              <v-layout>
                  <v-flex>
                      <v-btn @click="addComment" class="primary">Post Comment</v-btn>
                  </v-flex>
              </v-layout>
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
      comment: undefined
    }
  },
  computed: {
    ...mapState('auth', ['user'])
  },
  methods: {
    addComment () {
      let data = {
        userID: this.user._id,
        userName: this.user.firstName + ' ' + this.user.lastName,
        email: this.user.email,
        comment: this.comment
      }
      this.$store.dispatch('comment/create', data)
                 .then(res => {
                   this.$router.push('/uhome')
                 })
                 .catch(err => {
                   console.log(err)
                 })
    }
  },
  mounted () {
    if (!this.user) {
      this.$router.push('/login')
    } else if (this.user.role === 'admin') {
      this.$router.push('/ahome')
    }
  }
}
</script>

<style>

</style>
