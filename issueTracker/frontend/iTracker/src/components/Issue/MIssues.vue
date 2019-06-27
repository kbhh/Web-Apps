<template>
<v-container fluid>
<v-data-table
        :headers="headers"
        :items="issues"
        hide-actions
    class="elevation-1"
      >
      <template slot="items" slot-scope="props">
        <td><v-btn class="elevation-0" :to="'updateIssue/' + props.item._id">Edit</v-btn></td>  
        <td class="text-xs-right">{{ props.item.issueTitle}}</td>
        <td class="text-xs-right">{{ props.item.issueOwnerName}}</td>
        <td class="text-xs-right">{{ props.item.role}}</td>
        <td class="text-xs-right">{{ props.item.issueType}}</td>
        <td class="text-xs-right">{{ props.item.status | status}}</td>
        <td class="text-xs-right">{{ props.item.issueDesc | minify}}</td>
        <td class="text-xs-right">{{ props.item.regDate | date}}</td>
      </template>
      </v-data-table>
</v-container>
      
</template>

<script>
import {mapState} from 'vuex'
export default {
  data () {
    return {
      headers: [ {text: '', value: ''}, {text: 'Title', value: 'title'}, {text: 'Requsted By', value: 'requestedby'}, {text: 'Role', value: 'role'},
      {text: 'Issue Catagory', value: 'type'}, {text: 'Status', value: 'status'}, {text: 'Describition', value: 'desc'}, {text: 'Issued On', value: 'date'}
      ],
      issues: undefined,
      updateUrl: undefined
    }
  },
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
  mounted () {
    if (this.user && (this.user.role === 'Admin')) {
      this.$store.dispatch('issue/find', {})
                 .then(res => {
                   this.issues = res.data
                 })
    } else if (this.user) {
      this.$store.dispatch('issue/find', {query: {issueOwner: this.user.issueOwner}})
                 .then(res => {
                   console.log(res)
                   this.issues = res.data
                 })
    } else {
      this.$router.push('/')
    }
  }
}
</script>

<style>

</style>
