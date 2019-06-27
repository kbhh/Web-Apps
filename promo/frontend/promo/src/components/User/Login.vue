<template>
  <el-card>
    <div slot="header">Login</div>
    <el-form style="width:50%" :model="userForm" ref="user" :rules="rules" label-width="150px">
     <el-form-item label="Email Address" prop="email">
       <el-input v-model="userForm.email"> </el-input>
     </el-form-item>
     <el-form-item label="Password" prop="password">
       <el-input v-model="userForm.password" type="password"> </el-input>
     </el-form-item>
     <el-form-item>
       <el-button type="primary" @click="onLogin('user')" >Login</el-button>
     </el-form-item>
  </el-form>
  </el-card>
  
</template>

<script>
import {mapActions, mapState} from 'vuex'
export default {
  data () {
    return {
      userForm: {
        email: undefined,
        password: undefined
      },
      rules: {
        email: [
          {required: true, message: 'Pleaser Input Your Email', toggle: 'blur'},
          {type: 'email', message: 'Enter An Email', toggle: 'blur'}
        ],
        password: [
          {required: true, message: 'Password Required', toggle: 'blur'}
        ]
      }
    }
  },
  computed: {
    ...mapState('auth', ['user'])
  },
  methods: {
    ...mapActions('auth', ['authenticate']),
    onLogin (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.authenticate({strategy: 'local', email: this.userForm.email, password: this.userForm.password}).then((res) => {
            console.log(res)
            if (this.user.role === 'user') {
              this.$router.push('/uhome')
            } else {
              this.$router.push('/ahome')
            }
          })
        } else {
          console.log('Error')
        }
      })
    }
  },
  mounted () {}
}
</script>