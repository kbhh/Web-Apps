<template>
  <v-container>
      <v-card>
          <v-card-title>
              <router-link :to="'/profile/' + issue.issueOwner">
                 Issued By {{ issue.issueOwnerName }}
              </router-link>
          </v-card-title>
          <v-card-text>
            <div>
                 Title: <br>{{issue.issueTitle}}
              </div>
          </v-card-text>
          <v-card-text>
             <div>
              Describition: <br> {{ issue.issueDesc}}
             </div>
          </v-card-text>
          <v-card-title width="50px">
              <v-layout>
                 <v-btn flat @click="issueComplete(issue._id)" class="primary white--text" >Completed</v-btn>
              </v-layout>
          </v-card-title>
      </v-card>
  </v-container>
</template>

<script>
import {mapState} from 'vuex'
export default {
  data () {
    return {
      issue: undefined,
      issueSolvers: undefined,
      assignTo: undefined
    }
  },
  computed: {
    ...mapState('auth', ['user'])
  },
  methods: {
    assign () {
      this.$store.dispatch('issue/patch', [this.issue._id, {assignedTo: this.assignTo, status: 1}])
      this.$router.push('/issues')
    },
    issueComplete (id) {
      this.$store.dispatch('issue/patch', [id, {status: 2}, {}])
      this.$router.push('/issues')
    }
  },
  created () {
    if (!this.user) {
      this.$router.push('/login')
    }
    if (this.user.role !== 'Stuff') {
      this.$router.push('/uhome')
    }
    let issueId = this.$route.params.id
    this.$store.dispatch('issue/get', issueId)
               .then(res => {
                 this.issue = res
               })
  }
}
</script>

<style>

</style>
