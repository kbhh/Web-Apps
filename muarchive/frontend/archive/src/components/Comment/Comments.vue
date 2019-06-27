<template>
<v-container>
 <v-card flat>
     <v-toolbar class="primary white--text"><v-toolbar-title>Comments</v-toolbar-title></v-toolbar>
     <v-card-text>
         <v-data-table
    :headers="headers"
    :items="comments"
    hide-actions
    >
     <template slot="items" slot-scope="props">
         <td class="text-xs-right"> <v-btn flat @click="deletComment(props.item._id)">Remove</v-btn></td>
         <td class="text-xs-right">{{ props.item.userName}}</td>
         <td class="text-xs-right">{{ props.item.email}}</td>
         <td class="text-xs-right">{{ props.item.comment}}</td>
     </template>
  </v-data-table>
     </v-card-text>
 </v-card>
 
</v-container>
  
</template>

<script>
import {mapState} from 'vuex'
export default {
  data () {
    return {
      comments: [],
      headers: [{text: 'Action', value: 'action'}, {text: 'User Name', value: 'username'}, {text: 'User Email', value: 'email'}, {text: 'Comment', value: 'comment'}]}
  },
  computed: {
    ...mapState('auth', ['user'])
  },
  methods: {
    deletComment (id) {
      this.$store.dispatch('comment/remove', id)
    }
  },
  mounted () {
    if (!this.user) {
      this.$router.push('/login')
    } else if (this.user.role === 'user') {
      this.$router.push('/uhome')
    }
    this.$store.dispatch('comment/find', {})
               .then(res => {
                 console.log(res)
                 this.comments = res.data
               })
  }
}
</script>

<style>

</style>
