<template>
<div>
<el-row :gutter="1">
     <el-col :span="6" v-for="(task, i) in tasks" :key="i">
 <el-card  style="width: 50%">
                  <div slot="header"> 
                      <span>{{ task.title}}</span>
                  </div>
                  <div class="text"> 
                      <span>{{ task.text}}</span>
                  </div>
                  <div>
                       <time class="time"> To Be Completed On:{{ task.upto | date}}</time>
                  </div>
              </el-card>
     </el-col>    
</el-row>
<br>
<br>
<el-row :gutter="1">
  <el-col :span="6" v-for="(diary, i) in diries" :key="i">
    <el-card  class="box-card" >
        <div slot="header" class="clearfix">
            <span>{{diary.title}}</span>
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
import {mapState} from 'vuex'
export default {
  data () {
    return {
      tasks: undefined,
      diries: undefined
    }
  },
  computed: {
    ...mapState('auth', ['user'])
  },
  methods: {},
  mounted () {
    if (!this.user) {
      this.$router.push('/')
    }
    if (this.user.role === 'admin') {
      this.$router.push('/ahome')
    }
    this.$store.dispatch('task/find', {query: {$limit: 5, owner: this.user._id, $sort: { createdOn: 1 }}}).then((res) => {
      this.tasks = res.data
    })
    this.$store.dispatch('diary/find', {query: {$limit: 5, ownedBy: this.user._id, $sort: { createdOn: 1 }}}).then((res) => {
      this.diries = res.data
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