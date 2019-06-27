<template>
 <el-row  justify="center">
  <el-card class="box-card">
    <div slot="header"> SignUp</div>
    <el-form style="width:50%" ref="user" :rules="rules" status-icon :model="user" label-width="150px" label-position="right" size="medium" width="150px">
       <el-form-item label="First Name" prop="firstName">
         <el-input v-model="user.firstName" ></el-input>
       </el-form-item>
        <el-form-item label="Last Name" prop="lastName">
         <el-input v-model="user.lastName"></el-input>
       </el-form-item>
        <el-form-item label="Email Address" prop="email">
          <el-input v-model="user.email" type="email"></el-input>
       </el-form-item>
       <el-form-item label="Company Name" prop="orgName">
          <el-input v-model="user.orgName" ></el-input>
       </el-form-item>
       <el-form-item label="Tin Number" prop="tinNumber">
         <el-input v-model="user.tinNumber" type="Number"></el-input>
       </el-form-item>
       <el-form-item label="Password" prop="password">
         <el-input v-model="user.password" type="password">
         </el-input>
       </el-form-item>
       <el-form-item label="Confirm Password" prop="confPassword">
          <el-input v-model="user.confPassword" type="password"  ></el-input>
       </el-form-item>
       <el-form-item>
         <el-button type="primary" @click="onSubmit('user')">
            SignUp
         </el-button>
       </el-form-item>
     </el-form>
 
  </el-card>  
 
 </el-row>

</template>

<script>
import {mapActions} from 'vuex'
export default {
  data () {
    var matchPass = (rule, value, callback) => {
      if (value !== this.user.password) {
        callback(new Error('Passwords Did Not Match'))
      }
      callback()
    }
    return {
      user: {
        firstName: undefined,
        lastName: undefined,
        orgName: undefined,
        tinNumber: undefined,
        email: undefined,
        password: undefined,
        confPassword: undefined
      },
      rules: {
        firstName: [
          {required: true, message: 'Please input First Name', trigger: 'blur'}
        ],
        lastName: [
          {required: true, message: 'Please input Last Name', trigger: 'blur'}
        ],
        email: [
          {required: true, message: 'Please input Email', trigger: 'blur'},
          {type: 'email', message: 'Pleaser Input Email', trigger: 'blur'}
        ],
        tinNumber: [
          {required: true, message: 'Please input Your Tin Number', trigger: 'blur'}
        ],
        password: [
          {required: true, message: 'Please input Your Password', trigger: 'blur'}
        ],
        confPassword: [
          {required: true, message: 'Please input Confirmition Password', trigger: 'blur'},
          {validator: matchPass, trigger: 'blur'}
        ]
      }
    }
  },
  computed: {},
  methods: {
    onSubmit (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$store.dispatch('users/create', this.user).then((res) => {
            console.log(res)
          })
        } else {
          console.log('error')
          return false
        }
      })
    },
    ...mapActions('auth', ['authenticate'])
  },
  mounted () {}
}
</script>