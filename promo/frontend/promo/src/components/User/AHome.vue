<template>
<el-row :gutter="2">
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
</template>

<script>
import {mapState} from 'vuex'

export default {
  data () {
    return {
      tasks: undefined
    }
  },
  computed: {
    ...mapState('auth', ['user'])
  },
  methods: {},
  mounted () {
    if (!this.user) {
      this.$router.push('/login')
    }
    if (this.user.role === 'user') {
      this.$router.push('/uhome')
    }
    this.$store.dispatch('task/find', {query: {$limit: 5, $sort: { createdOn: 1 }}}).then((res) => {
      this.tasks = res.data
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