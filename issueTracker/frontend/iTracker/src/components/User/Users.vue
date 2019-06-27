<template>
  <v-container>
      <v-container>
          <v-data-table
          :headers="headers"
          :items="users"
          no-action>

          <template slot="items" slot-scope="prop">
              <td class="text-xs-right">{{ prop.item.firstName}} {{ prop.item.lastName}}</td>
              <td class="text-xs-right">{{ prop.item.role }}</td>
              <td class="text-xs-right">{{ prop.item.step}}</td>
              <td class="ttext-xs-right">{{ prop.item.email}}</td>
          </template>

          </v-data-table>
      </v-container>
  </v-container>
</template>

<script>
import {mapState, mapGetters} from 'vuex'
export default {
  data () {
    return {
      headers: [{text: 'Name', value: 'name'}, {text: 'Role', value: 'role'}, {text: 'Regsitration Step', value: 'step'},
        {text: 'Email', value: 'email'}]
    }
  },
  computed: {
    ...mapState('auth', ['user']),
    ...mapGetters('users', {
      users: 'list'
    })
  },
  mounted () {
    if (!this.user && !(this.user.role === 'Admin')) {
      this.$router.push('/')
    }
    this.$store.dispatch('users/find', {})
               .then(res => {
                 console.log(res)
                 this.users = res.data
               })
  }
}
</script>

<style>

</style>
