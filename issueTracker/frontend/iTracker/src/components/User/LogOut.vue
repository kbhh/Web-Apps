<template>
  
</template>

<script>
import {mapActions} from 'vuex'
export default {
  data () {},
  computed: {
  },
  methods: {
    ...mapActions('auth', ['logout'])
  },
  mounted () {
    this.logout().then(() => this.$router.go({ name: 'login' }))
    this.$router.push('/login')
  }
}
</script>

<style>

</style>
