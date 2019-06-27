<template>
  <el-container>
        <el-card class="box-card">
              <img :src="'http://localhost:3030/' + event.image" class="image">
                <div style="padding: 14px;">
                    <h3>{{event.name}}</h3>
                    <div>{{event.desc }}</div>
                    <div class="bottom clearfix">
                        <time class="time">{{ event.startsOn | date }} To {{ event.endsOn | date}}</time>
                    </div>
                 </div>
            </el-card>
  </el-container>
</template>

<script>
export default {
  data () {
    return {
      event: undefined,
      eventId: undefined
    }
  },
  computed: {
  },
  methods: {},
  created () {
    this.eventId = this.$route.params.id
    this.$store.dispatch('event/get', this.eventId).then((res) => { this.event = res })
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
    width: 25%;
    height: 25%;
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
