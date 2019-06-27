<template>
 <div>

 <el-row :gutter="20">
   <el-col :span="16">
 <el-card>
     <div slot="header">Events</div>
     <el-table
     :data="events"
     style="width:100%">
       <el-table-column
        prop="name"
        label="Event Name"
        width="200">
       </el-table-column>
       <el-table-column
        prop="place"
        label="Event Location"
        width="200">
       </el-table-column>
       <el-table-column
        prop="organizer"
        label="Event Organizer"
        width="200">
       </el-table-column>
       <el-table-column
        prop="startsOn"
        label="Start Date"
        width="200">
       </el-table-column>
       <el-table-column
        prop="endsOn"
        label="End Date"
        width="200">
       </el-table-column>
       <el-table-column
        label="Operations"
        width="200"
        >

        <template slot-scope="scope">
           <el-button v-if="admin" type="text" @click="removeEvent(scope.$index, events)" size="small">Remove</el-button>
           <el-button v-if="!admin" @click="detail(scope.$index, events)" type="text" size="small">View</el-button>    
           <el-button v-if="!admin" @click="promote(scope.$index, events)" type="text" size="small">Promote</el-button>
           <el-button  @click="promo(scope.$index, events)" type="text" size="small">Products</el-button>
        </template>

       </el-table-column>
       
     </el-table>
   </el-card>
   </el-col>

   <el-col :span="8" v-if="productForm">
  <el-card class="box-card"  width="200px">
     <div slot="header">Promote Product </div>
     <el-form :model="product" ref="product">
       <el-form-item prop="name" label="Name">
           <el-input v-model="product.name"></el-input>
        </el-form-item>
        <el-form-item prop="ptype" label="Product Type">
           <el-input v-model="product.ptype"></el-input>
        </el-form-item>
        <el-form-item prop="quality" required label="Product Quality">
           <el-input v-model="product.quality"></el-input>
        </el-form-item>
        <el-form-item prop="price" required label="Product Price">
           <el-input v-model="product.price" type="decimal"></el-input>
        </el-form-item>
        <el-form-item prop="desc" required label="Product Describiton">
           <el-input v-model="product.desc" type="textarea"></el-input>
        </el-form-item>
        <el-form-item label="Product Image">
      <file-upload @uploaded="addImage"></file-upload>
   
    </el-form-item>
      <el-form>
          <el-button @click="addProduct('product')" type="primary">Send</el-button>
      </el-form>
     </el-form>
   </el-card>
   </el-col>

 </el-row>

   <el-row v-if="promos" :gutter="20">
     <el-col v-for="(product, i) in products" :key="i" :span="5" >
 <el-card class="box-card" >
       <img :src="'http://localhost:3030/' + product.image" class="image">
                <div style="padding: 14px;">
                    <h3>{{product.name}}</h3>
                    <h5>Type: {{product.ptype}}</h5>
                    <h5>Price: {{product.price}}</h5>
                    <h5>Quality: {{product.quality}}</h5>
                    <h5>Status: {{product.status | stat}}</h5>
                    <div>{{product.desc | min }}</div>
                    <div class="bottom clearfix">
                      <el-row :gutter="20">
                        <el-col :span="12">
                           <el-button  v-if="!approval" type="primary" @click="approve(product._id)"> Approve</el-button>
                        </el-col>
                        <el-col :span="12">
                       <el-button  v-if="approval" type="primary" @click="disaprove(product._id)"> Disaprove</el-button>

                        </el-col>
                      </el-row>
                     
                    </div>
                 </div>
    </el-card>
     </el-col>
    
   </el-row> 
 </div>

   
</template>

<script>
import {mapState, mapGetters} from 'vuex'
import FileUpload from '../Ex/fileupload'
export default {
  data () {
    return {
      product: {
        name: undefined,
        ptype: undefined,
        quality: undefined,
        price: undefined,
        desc: undefined,
        image: undefined
      },
      currentEvent: undefined,
      productForm: false,
      promos: false,
      products: undefined
    }
  },
  components: {'file-upload': FileUpload},
  computed: {
    ...mapState('auth', ['user']),
    ...mapGetters('event', {
      events: 'list'
    }),
    approval () {
      if (this.user.role === 'admin') {
        return true
      }
      return false
    },
    admin () {
      if (this.user.role === 'admin') {
        return true
      }
      return false
    }
  },
  methods: {
    approve (id) {
      this.$store.dispatch('product/patch', [id, {status: 2}, {}])
    },
    disaprove (id) {
      this.$store.dispatch('product/patch', [id, {status: 1}, {}])
    },
    promote (index, events) {
      this.currentEvent = events[index]._id
      this.productForm = true
    },
    promo (index, events) {
      this.promos = true
      this.productForm = false
      if (this.user.role === 'user') {
        this.$store.dispatch('product/find', {query: {toEvent: events[index]._id, owner: this.user._id}}).then((res) => {
          this.products = res.data
        })
      } else {
        this.$store.dispatch('product/find', {query: {status: {$ne: 1}, toEvent: events[index]._id}}).then((res) => {
          this.products = res.data
        })
      }
    },
    removeEvent (index, events) {
      console.log(index)
      this.$store.dispatch('event/remove', events[index]._id)
    },
    detail (index, events) {
      this.$router.push('event/' + events[index]._id)
    },
    applyProduct (index, events) {
    },
    addImage (img) {
      this.product.image = img
    },
    addProduct (form) {
      this.$refs[form].validate((valid) => {
        if (valid) {
          this.product.owner = this.user._id
          this.product.status = 0
          this.product.toEvent = this.currentEvent
          this.$store.dispatch('product/create', this.product)
          this.productForm = false
        } else {}
      })
    }
  },
  mounted () {
    if (!this.user) {
      this.$router.push('/cevents')
    }
    if (this.user.role === 'user') {
      this.$store.dispatch('event/find', {}).then((res) => {
        this.events = res.data
      })
    } else {
      this.$store.dispatch('event/find', {}).then((res) => {
        this.events = res.data
      })
    }
  }
}
</script>

<style>
.time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    height: 50%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
</style>
