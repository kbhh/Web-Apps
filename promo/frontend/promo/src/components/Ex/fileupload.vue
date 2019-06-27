<template>
   <div>
       <el-row>
       <el-col :span="12">
        
          <div id="upload_logo" class="avatar-uploader">
            <input type="file"  class="el-upload" 
                    v-on:change="onFileChange" :accept="dataType"  id="file-uploder" >
            <img v-if="image" :src="image" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </div>           
   
       </el-col>
       </el-row>
   </div>
</template>

<script>

import services from '../../api/feathers-api'
export default {
  props: ['dataType', 'multi', 'update'],
  data () {
    return {image: '', tile: true}
  },
  methods: {
    onFileChange (e) {
      let files = e.target.files || e.dataTransfer.files
      if (!files.length) {
        return
      }
      this.createImage(files[0])
    },
    createImage (file) {
      let reader = new FileReader()
      let vm = this
      reader.onload = (e) => {
        vm.image = e.target.result
        this.upload(e)
      }
      reader.readAsDataURL(file)
    },
    upload (e) {
      services.service('upload').create({uri: e.target.result}).then((res) => {
        this.$emit('uploaded', res.id)
      }).catch(err => { console.log(err) })
    }
  },
  computed: {
  },
  mounted () {
  }
}
</script>

<style scoped> 
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
