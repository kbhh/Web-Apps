<template>
<v-container>
<v-card>
      <v-toolbar flat class='black--text' height="200px">
          <v-toolbar-title>
              Search 
          </v-toolbar-title>
             <v-flex class="white--text">
            
            </div>
            <v-layout row class="white--text">
                <v-select :items="managers" label="Issue Catagorys"  required v-model="issue.issueManager"></v-select>
                <v-text-field v-model="issue.issueTitle" label="Issue Title"></v-text-field>
                <v-btn @click="searchIssues"  class="primary"> Search</v-btn> 
            </v-layout>
        </v-flex>
      </v-toolbar>
  <v-card-text>
   <v-layout >
    <v-flex
        class="ml-3"
        xs12
        sm6
        md4
        lg3
        v-show="openBy"
v-for="(issue, i) in issues"
            :key="i"
      >
        <v-card >
          <v-card-title><h4>{{ issue.issueTitle}}</h4></v-card-title>
          <v-card-text>
              
              <div> <h4>Describition: </h4>  {{ issue.issueDesc}}</div>
              <div> <h4>Status:</h4> {{ issue.status | status}}</div>
          </v-card-text>
          
        </v-card>
      </v-flex>
   </v-layout>
     
  </v-card-text>
  </v-card>
</v-container>
  
</template>

<script>
import {mapState} from 'vuex'
export default {
  data () {
    return {
      managers: ['Administrative', 'Academic', 'Library-Related ', 'Student-Related', 'Registrar', 'ICT', 'Financial', 'Protectors'],
      openBy: false,
      issue: {
        issueTitle: undefined,
        issueManager: undefined
      },
      issues: undefined
    }
  },
  computed: {
    ...mapState('auth', ['user', 'authenticate'])
  },
  methods: {
    searchIssues () {
      this.$store.dispatch('issue/find', {query: this.issue})
                 .then(res => {
                   console.log(res)
                   this.issues = res.data
                   this.openBy = !this.openBy
                 })
    }
  },
  mounted () {
    if (!this.user) {
      this.$router.push('/login')
    }
  }
}
</script>

<style>

</style>
