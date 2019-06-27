<template>
  <el-card>
     <div slot="header"> Change Your Password</div>
     <el-form :model="info" ref="info">
         <el-form-item label="Current Password" prop="cPassword" required>
             <el-input type="password" v-model="info.cPassword"></el-input>
         </el-form-item>
         <el-form-item label="New  Password" prop="cPassword" required>
             <el-input type="password" v-model="info.nPassword"></el-input>
         </el-form-item>
         <el-form-item label="Confirm Password" prop="cPassword" required>
             <el-input type="password" v-model="info.confPassword"></el-input>
         </el-form-item>
        <el-form-item >
             <el-button type="primary" @click="changePass"> Change</el-button>
         </el-form-item>
     </el-form> 
  </el-card>
</template>
<script>
import {mapState, mapActions} from 'vuex'
export default {
  data () {
    var matchPass = (rule, value, callback) => {
      if (value !== this.user.password) {
        callback(new Error('Passwords Did Not Match'))
      }
      callback()
    }
    return {
      info: {
        cPassword: undefined,
        nPassword: undefined,
        confPassword: undefined
      },
      rules: {
        cPassword: [
          {required: true, toglle: 'blur'}
        ],
        nPassword: [
          {required: true, toglle: 'blur'}
        ],
        confPassword: [
          {required: true, message: 'Please input Confirmition Password', trigger: 'blur'},
          {validator: matchPass, trigger: 'blur'}
        ]
      },
      error: undefined
    }
  },
  computed: {
    comparePassword () {
      return this.confPassword !== this.nPassword ? 'Password Did not Match' : ''
    },
    formIsValid () {
      return (this.info.cPassword !== '' && this.info.nPassword !== '' && this.info.confPassword !== '')
    },
    ...mapState('auth', ['user'])
  },
  methods: {
    changePass () {
      this.$store.dispatch('users/patch', [this.user._id, {password: this.nPassword}]).then((res) => {
        this.logout()
        this.$router.push('/login')
      })
    },
    ...mapActions('auth', ['logout'])
  },
  mounted () {
    if (!this.user) {
      this.$router.push('/')
    }
  }
}
</script>

<style>

</style>
