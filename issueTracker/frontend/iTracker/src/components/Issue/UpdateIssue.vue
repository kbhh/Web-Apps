<template>
  <v-container>
      <v-layout>
          <v-flex>
          <v-card>
          <v-toolbar class="primary white--text" flat>
              <v-toolbar-title>Creat An Issue</v-toolbar-title>
          </v-toolbar>
         <v-card-text>
             <form @submit.prevent="updateIssue">
 
             <v-flex>
                 <v-layout>
                     <v-text-field label="Issue Title" required v-model="issue.issueTitle"></v-text-field>
                 </v-layout>
             </v-flex>
              <v-flex>
                 <v-layout>
                     <v-select :items="issueTypes" required label="Issue Type" v-model="issue.issueType"></v-select>
                 </v-layout>
             </v-flex>
             <v-flex>
                 <v-layout>
                     <v-select :items="managers" required label="Issue Manager" v-model="issue.issueManager"></v-select>
                 </v-layout>
             </v-flex>
            
            <v-flex>
               <v-layout row>
                  <v-text-field label="Issue Describition"  multi-line v-model="issue.issueDesc">
                  </v-text-field>
              </v-layout>    
            </v-flex> 
            
            <v-spacer></v-spacer>
            <v-flex>
                <v-layout>
                    <v-spacer></v-spacer>
                    <v-btn class="primary" type="Submit">Update</v-btn>
                </v-layout>
            </v-flex>

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
      landscape: true,
      managers: ['Administrative', 'Academic', 'Library-Related ', 'Student-Related', 'Registrar', 'ICT', 'Financial', 'Protectors'],
      issue: {
        issueTitle: undefined,
        issueOwner: undefined,
        issueManager: undefined,
        issueDesc: undefined,
        issueType: undefined,
        issuePriority: undefined
      },
      issueId: undefined
    }
  },
  components: {},
  computed: {
    ...mapState('auth', ['user']),
    issueTypes () {
      if (this.user.role === 'Student') {
        return ['Transfer', 'Facilites', 'Repariment']
      } else if (this.user.role === 'Stuff') {
        return ['Purchesment', 'Maintainance', 'Ranking']
      }
    }
  },
  methods: {
    updateIssue () {
      this.$store.dispatch('issue/update', [this.issueId, this.issue, {}])
                 .then((res) => {
                   this.$router.push('/myissues')
                 })
    }
  },
  mounted () {
    if (!this.user) {
      this.$router.push('/login')
    }
    this.issueId = this.$route.params.id
    console.log(this.issueId)
    this.$store.dispatch('issue/get', this.issueId)
               .then((res) => {
                 console.log(res)
                 this.issue = res
               })
               .catch()
  }
}
</script>

<style>

</style>
