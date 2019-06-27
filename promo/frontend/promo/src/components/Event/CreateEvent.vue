<template>
 <el-container>
   <el-card class="box-card">
     <div slot="header">Creat An Event</div>
<el-form ref="event" :model="event" :rules="rules" label-width="150px">
      <el-form-item label="Event Name" prop="name">
         <el-input v-model="event.name"></el-input>
      </el-form-item>
      <el-form-item label="Event Organizer" prop="organizer">
         <el-input v-model="event.organizer"></el-input>
      </el-form-item>
      <el-form-item label="Event Location" prop="place">
         <el-input v-model="event.place"></el-input>
      </el-form-item>
      <el-form-item label="Describition" required>
        <el-input v-model="event.desc" type="textarea"></el-input>
      </el-form-item>
      <el-form-item label="Date" prop="date" required>
        <el-date-picker
           v-model="event.date"
           type="daterange"
           range-separator="To"
           start-placeholder="Start date"
           end-placeholder="End date">
        </el-date-picker>
    </el-form-item>
    
    <el-form-item label="Event Image">
      <file-upload @uploaded="addImage"></file-upload>
   
    </el-form-item>
    <el-form-item >
      <el-button @click="createEvent('event')" type="primary"> Create</el-button>
    </el-form-item>
   </el-form>
   </el-card>
    
 </el-container>
</template>

<script>
import {mapState} from 'vuex'
import FileUpload from '../Ex/fileupload'
export default {
  data () {
    return {
      event: {
        name: undefined,
        image: undefined,
        place: undefined,
        desc: undefined,
        organizer: undefined,
        startsOn: undefined,
        endsOn: undefined,
        date: undefined
      },
      rules: {
        name: [
          {required: true, message: 'Required Please Fill In', toggle: 'blur'}
        ],
        organizer: [
          {required: true, message: 'Required Please Fill In', toggle: 'blur'}
        ],
        place: [
          {required: true, message: 'Required Please Fill In', toggle: 'blur'}
        ]
      }
    }
  },
  components: {'file-upload': FileUpload},
  computed: {
    ...mapState('auth', ['user'])
  },
  methods: {
    addImage (img) {
      this.event.image = img
    },
    createEvent (formName) {
      console.log(formName)
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.event.startsOn = new Date(this.event.date[0]).toLocaleString(['en-US'], {month: 'short', day: '2-digit', year: 'numeric'})
          this.event.endsOn = new Date(this.event.date[1]).toLocaleString(['en-US'], {month: 'short', day: '2-digit', year: 'numeric'})
          this.$store.dispatch('event/create', this.event).then((res) => { console.log(res) })
          this.$router.push('/events')
        } else {
        }
      })
    },
    fileUpload (file, list) {
      console.log(file)
    },
    handleAvatarSuccess (res, file) {
      console.log(this.event.image)
      this.event.image = URL.createObjectURL(file.raw)
    },
    beforeAvatarUpload (file) {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2

      if (!isJPG) {
        this.$message.error('Avatar picture must be JPG format!')
      }
      if (!isLt2M) {
        this.$message.error('Avatar picture size can not exceed 2MB!')
      }
      return isJPG && isLt2M
    }
  },
  mounted () {
    if (!this.user) {
      this.$router.push('/login')
    }
    if (this.user.role === 'user') {
      this.$router.push('/uhome')
    }
  }
}
</script>

<style>
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>