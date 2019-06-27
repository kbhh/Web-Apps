<template>
  <div>
      <el-row :gutter="20">
          <el-card>
              <div slot="header"> Pick Calendar</div>
            <div class="">
                 <span class="demonstration">Date</span>
                <el-date-picker
                    v-model="date"
                    type="date"
                    range-separator="To"
                    start-placeholder="Start date"
                    @change="picked"
                    end-placeholder="End date">
                 </el-date-picker>
             </div>
          </el-card>
      </el-row>
      <br>
      <el-row :gutter="20">
          <el-col v-for="(event, i) in events" :key="i" :span="5">
            <el-card class="box-card">
              <img :src="'http://localhost:3030/' + event.image" class="image">
                <div style="padding: 14px;">
                    <h3>{{event.name}}</h3>
                    <div>{{event.desc | min}}</div>
                    <div class="bottom clearfix">
                        <time class="time">{{ event.startsOn | date }} To {{ event.endsOn | date}}</time>
                      <div>
                          <br>
                          <router-link :to="'event/' + event._id"><el-button type="primary">View</el-button></router-link>
                      </div>
                    </div>
                 </div>
            </el-card>
          </el-col>
      </el-row>
  </div>
</template>

<script>
import {mapGetters, mapState} from 'vuex'
export default {
  data () {
    return {
      date: undefined,
      startsOn: undefined,
      endsOn: undefined,
      events: undefined
    }
  },
  methods: {
    picked (date) {
      console.log(date)
      this.$store.dispatch('event/find', {query: { startsOn: date }}).then((res) => {
        console.log(res)
        this.events = res.data
      })
    }
  },
  computed: {
    ...mapGetters('event', {
      eventsList: 'list'
    }),
    ...mapState('auth', ['user'])
  },
  created () {
    this.$store.dispatch('event/find', {}).then((res) => { this.events = res.data })
  },
  mounted () {
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
    max-height: 200px;
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
