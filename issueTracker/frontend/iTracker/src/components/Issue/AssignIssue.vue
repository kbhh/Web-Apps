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
                  <v-flex>
                      <v-select label="Assign To" v-model="assignTo" :items="issueSolvers"  
                      class="input-group--focused"
                      item-text="firstName" item-value="_id"></v-select>
                  </v-flex>
                  <v-flex>
                  <v-select label="Give Priority" v-model="priority" :items="prs">
                      </v-select>
                  </v-flex>
              </v-layout>

              <v-layout>
                <v-flex>
                  <v-btn @click="assign" class="primary">Assign</v-btn>
                </v-flex>
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
      assignTo: undefined,
      priority: undefined,
      prs: ['High', 'Low']
    }
  },
  computed: {
    ...mapState('auth', ['user'])
  },
  methods: {
    assign () {
      this.$store.dispatch('issue/patch', [this.issue._id, {assignedTo: this.assignTo, issuePriority: this.priority, status: 1}])
      this.$router.push('/issues')
    }
  },
  created () {
    if (!this.user) {
      this.$router.push('/login')
    }
    if (this.user.role !== 'Manager') {
      this.$router.push('/uhome')
    }
    let issueId = this.$route.params.id
    this.$store.dispatch('issue/get', issueId)
               .then(res => {
                 this.issue = res
                 this.$store.dispatch('users/find', {query: { subRole: this.issue.issueManager }})
                            .then(res => {
                              this.issueSolvers = res.data
                              console.log(this.issueSolvers)
                              console.log(this.issueSolvers[0])
                            })
               })
  }
}
</script>

<style>

</style>
