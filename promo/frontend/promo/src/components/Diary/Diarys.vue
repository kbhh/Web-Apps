<template>
  <div>
    <el-row :gutter="20">
     <el-col :span="12" class="grid-content bg-purple-dark">
 
      <el-card>
        <div slot="header"> Add Diary</div>
       <el-form ref="diary" :model="diary" :rules="rules" label-width="150px">
      <el-form-item label="Title" prop="title">
         <el-input v-model="diary.title"></el-input>
      </el-form-item>
      <el-form-item label="Diary" prop="text">
         <el-input v-model="diary.text" type="textarea"></el-input>
      </el-form-item>
   
    <el-form-item >
      <el-button @click="createDiary('diary')" type="primary"> Post </el-button>
    </el-form-item>
   </el-form> 
      </el-card>
        </el-col>
  
    
  
    <el-col :span="12">
    <el-card v-for="(diary, i) in diries" :key="i" class="box-card" :gutter="10">
        <div slot="header" class="clearfix">
            <span>{{diary.title}}</span>
            <el-button @click="remove(diary._id)" style="float: right; padding: 3px 0" type="text">Remove</el-button>
        </div>
      <div class="text">
         {{diary.text}}
      </div>
      <div class="bottom cleafix">
        <time class="time">Posted On {{ diary.createdOn | date }}</time>
      </div>
    </el-card>
    </el-col>
     </el-row>
    
  </div>
</template>

<script>
import {mapState, mapGetters} from 'vuex'
export default {
  data () {
    return {
      diary: {
        ownedBy: undefined,
        title: undefined,
        text: undefined
      },
      rules: {
        title: [
          {required: true, message: 'Required Please Fill In', toggle: 'blur'}
        ],
        text: [
          {required: true, message: 'Required Please Fill In', toggle: 'blur'}
        ]
      }
    }
  },
  methods: {
    remove (id) {
      this.$store.dispatch('diary/remove', id)
    },
    createDiary (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.diary.ownedBy = this.user._id
          this.$store.dispatch('diary/create', this.diary).then((res) => { console.log(res) })
        } else {
          console.log('Not Valid')
        }
      })
    }
  },
  computed: {
    ...mapState('auth', ['user']),
    ...mapGetters('diary', {
      diries: 'list'
    })
  },
  mounted () {
    if (!this.user) {
      this.$router.push('/login')
    }
    this.$store.dispatch('diary/find', {query: {ownedBy: this.user._id}}).then((res) => {
    })
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