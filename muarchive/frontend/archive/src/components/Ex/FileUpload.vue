<template>
   <v-container>
       <v-flex>
       <v-layout>
  
             <v-avatar
              size="256"
             class="grey lighten-4"
             :tile="tile"
           >         
          <div id="upload_logo">
          <v-icon >cloud_upload</v-icon>
          <p>Select File To Upload</p>
          <input type="file" v-on:change="onFileChange" :accept="dataType"  id="file-uploder" >
          </div>           
        </v-avatar>        

       </v-layout>
       </v-flex>
   </v-container>
</template>

<script>

import services from '../../api/feathers_api'
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
      services.service('upload').create({uri: e.target.result})
                                .then((res) => {
                                  this.$emit('uploaded', res.id)
                                })
                                .catch(err => {
                                  console.log(err)
                                })
    }
  },
  components: {},
  computed: {
  },
  mounted () {
  }
}
</script>

<style scoped> 
  .img{
    height: 150px;
  }
  #file-uploder{
    opacity: 0;
    width: 100%;
    height: 100%; 
    
  }
  #file-uploader:hover{
    cursor: pointer;
  }
  #upload_logo{
    
    text-align: center;
  }
</style>
