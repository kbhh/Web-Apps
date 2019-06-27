<template>
<v-container fluid>
<v-data-table
        :headers="headers"
        :items="issues"
    class="elevation-1"
      >
      <template slot="items" slot-scope="props">
        <td v-if="isManager"><v-btn class="elevation-0" flat :to="'assignIssue/' + props.item._id">Assign Issue</v-btn></td>
        <td v-if="!isManager"><v-btn class="blue" flat :to="'revissue/' + props.item._id">Review</v-btn></td>
        <td class="text-xs-right">{{ props.item.issueTitle}}</td>
        <td class="text-xs-right">{{ props.item.issueOwnerName}}</td>
        <td class="text-xs-right">{{ props.item.role}}</td>
        <td class="text-xs-right">{{ props.item.issueType}}</td>
        <td class="text-xs-right">{{ props.item.status | status}}</td>
        <td class="text-xs-right">{{ props.item.issueDesc | minify}}</td>
        <td class="text-xs-right">{{ props.item.regDate | date }}</td>
        <td class="text-xs-right">{{ props.item.issuePriority}}</td>
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
      {text: 'Issue Catagory', value: 'type'}, {text: 'Status', value: 'status'}, {text: 'Describition', value: 'desc'}, {text: 'Issued On', value: 'date'},
      {text: 'Priority', value: 'priority'}
      ],
      issues: undefined,
      updateUrl: undefined
    }
  },
  computed: {
    ...mapState('auth', ['user']),
    isManager () {
      if (this.user && (this.user.role === 'Manager')) {
        return true
      }
      return false
    },
    checkStatus (stat) {
      if (stat === 2) {
        return true
      } else {
        return false
      }
    }
  },
  mounted () {
    if ((this.user && (this.user.role === 'Admin')) || (this.user && this.user.role === 'Manager')) {
      this.$store.dispatch('issue/find', {})
                 .then(res => {
                   this.issues = res.data
                 })
    } else if (this.user && (this.user.role === 'Stuff')) {
      this.$store.dispatch('issue/find', {query: {assignedTo: this.user._id, status: 1}})
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
