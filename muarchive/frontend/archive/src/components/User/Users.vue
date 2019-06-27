<template>
  <v-container>
      <v-data-table
      :headers="headers"
      :items="users">
      <template slot="items" slot-scope="props">
        <td class="text-xs-right">{{ props.item.firstName}} {{props.item.lastName}}</td>
        <td class="text-xs-right">{{ props.item.email}}</td>
        <td class="text-xs-right">{{ props.item.gender}}</td>
        <td class="text-xs-right">{{ props.item.approved}}</td>
        <td class="text-xs-right" v-show="!props.item.approved">
          <v-btn class="red" @click="approve(props.item._id)" flat>Approve</v-btn>
        </td>
        <td class="text-xs-right" v-show="props.item.approved">
          <v-btn class="red" @click="disApprove(props.item._id)" flat>Disapprove</v-btn>
        </td>
      </template>
      </v-data-table>
  </v-container>
</template>

<script>
import {mapState, mapGetters} from 'vuex'
export default {
  data () {
    return {
      headers: [{text: 'Name', value: 'name'}, {text: 'Email', value: 'email'}, {text: 'Gender', value: 'gender'}, {text: 'Approved', value: 'approved'}]
    }
  },
  computed: {
    ...mapState('auth', ['user']),
    ...mapGetters('account', {
      users: 'list'
    })
  },
  methods: {
    approve (id) {
      this.$store.dispatch('account/patch', [id, {approved: true}, {}])
    },
    disApprove (id) {
      this.$store.dispatch('account/patch', [id, {approved: false}, {}])
    }
  },
  mounted () {
    if (!this.user) {
      this.$router.push('/login')
    }
    if (this.user.role === 'user') {
      this.$router.push('/uhome')
    }
    this.$store.dispatch('account/find', {query: {role: 'user'}})
               .then((res) => {
                 console.log(res)
                 this.users = res.data
               })
  }
}
</script>

<style>

</style>
