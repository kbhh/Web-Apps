<template>
<div>
    dfsfafsdfsfaf
    dfsffdsfdsf
<el-card class="box-card" >
       <img :src="'http://localhost:3030/' + product.image" class="image">
                <div style="padding: 14px;">
                    fdsfa
                    <h3>{{product.name}}</h3>
                    <h5>Type: {{product.ptype}}</h5>
                    <h5>Price: {{product.price}}</h5>
                    <h5>Quality: {{product.quality}}</h5>
                    <div>{{product.desc }}</div>
                    
                 </div>
    </el-card>
</div>
   
</template>

<script>
export default {
  data () {
    return { product: undefined }
  },
  computed: {},
  methdos: {},
  mounted () {
    // console.log('go')
    // console.log(this.$route.params.id)
    // this.$store.dispatch('product/get', this.$route.params.id).then((res) => {
    //   console.log(res)
    //   this.product = res
    // })
  }
}
</script>

<style>

</style>
