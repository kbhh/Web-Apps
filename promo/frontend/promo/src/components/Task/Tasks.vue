<template>
  <div >
      <el-row :gutter="50">
          <el-col :span="8">
            <el-card class="box-card">
                <div slot="header"> Add Task</div>
              <el-form ref="task"  :model="task" :rules="rules" label-width="150px">
                  <el-form-item label="Title" prop="title">
                      <el-input v-model="task.title"></el-input>
                  </el-form-item>
                   <el-form-item label="Task Describiton" prop="text">
                      <el-input v-model="task.text" type="textarea"></el-input>
                  </el-form-item>
                    <el-form-item label="Date" prop="upto" >
                      <el-date-picker v-model="task.upto"  type="date"
                        placeholder="Pick a day"></el-date-picker>
                  </el-form-item>
                  <el-form-item>
                      <el-button @click="addTask('task')" type="primary">Add</el-button>
                  </el-form-item>
               </el-form>
                  
              </el-card>
          </el-col>
          <el-col :span="16">
              <el-card v-for="(task, i) in tasks" :key="i" style="width: 50%">
                  <div slot="header"> 
                      <span>{{ task.title}}</span>
                      <el-button class="button" @click="removeTask(task._id)" icon="el-icon-close" type="primary"></el-button>
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
  </div>
</template>

<script>
import {mapState, mapGetters} from 'vuex'
export default {
  data () {
    return {
      task: {
        title: undefined,
        upto: undefined,
        owner: undefined,
        text: undefined
      },
      rules: {
        title: [
          {required: true, message: 'Title Required', toggle: 'blur'}
        ],
        text: [
          {required: true, message: 'Describition Required', toggle: 'blur'}
        ]
      }
    }
  },
  computed: {
    ...mapState('auth', ['user']),
    ...mapGetters('task', {
      tasks: 'list'
    })
  },
  methods: {
    removeTask (id) {
      this.$store.dispatch('task/remove', id)
    },
    addTask (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.task.owner = this.user._id
          console.log(this.task)
          this.$store.dispatch('task/create', this.task).then((res) => { console.log(res) })
        } else {

        }
      })
    }
  },
  created () {
    if (!this.user) {
      this.$router.push('/')
    }
    this.$store.dispatch('task/find', {query: {owner: this.user._id}})
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