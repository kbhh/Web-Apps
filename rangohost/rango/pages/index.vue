<template>
   <div>
    <v-layout class="pt-1" fluid >
      <v-jumbotron src="img/fast-web-hosting-servers.jpg" dark  style="height:600px;" >
      <v-container fill-height fluid>
        <v-layout align-center fluid>
          <v-flex class="black--text text-md-center">
            <h3 class="display-3">Welcome to Rangohost</h3>
            <h4 class="subheading"> Your Ultimate Solution To Host Your Website </h4>
            <div class="title mb-3">Check out our other Services</div>
            <v-btn large color="primary" to='/services' class="mx-0">See more</v-btn>
          </v-flex>
        </v-layout>
      </v-container>
    </v-jumbotron>
  </v-layout>

  <v-card class="mt-3 mb-3"> 
     <v-container fluid > 
          <div style="color:amber"> 
              <h2 class="text-xs-center">Our Hosting Service Plan</h2>
          </div> 
       </v-container>

    <v-layout row wrap child-flex-sm class="mb-3 pa-4" >
      
      <v-flex v-for="(service, i) in hostingData" :key='i'>
      <v-card  flat  class="ml-4 pb-2" style="">
        <v-card-text style="font-size:25px" class="text-xs-center">{{ service.plan}}</v-card-text>
        <v-list class="text-xs-center">
          <v-list-tile>
            <v-list-tile-content class="amber text-xs-right ">
              <v-list-tile-title class="text-xs-center">{{service.price}}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
  
          <v-list-tile>
            <v-list-tile-content>
              <v-list-tile-title class="text-xs-center"> {{ service.storage}}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
  
          <v-list-tile>
            <v-list-tile-content>
              <v-list-tile-title class="text-xs-center">{{ service.bandwidth }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
  
          <v-list-tile>
            <v-list-tile-content>
              <v-list-tile-title class="text-xs-center">{{ service.email }} </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
  
          <v-list-tile>
            <v-list-tile-content>
              <v-list-tile-title class="text-xs-center">{{ service.database}}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
  
          <v-list-tile>
            <v-list-tile-content>
              <v-list-tile-title class="text-xs-center">{{ service.domain}}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
  
        </v-list>
      </v-card>
      </v-flex>
    </v-layout>
</v-card>
    <v-layout class="pt-1 mb-3 mt-3" >
      <v-jumbotron  dark  style="height:500px" fluid>
      <v-container fill-height fluid>
        <v-layout align-center >
            <div class="title mb-3 black--text">
              One Click Installation for Most Known Content Managment Systems
              <v-divider> </v-divider>
              <v-list light>
                 <template
                  v-for="cms in cmss"
                  prepend-icon="right"
                 >
                  <v-list-tile :key='cms' > 
                      <v-list-tile-content>
                        <v-list-tile-title> {{cms}} </v-list-tile-title>
                      </v-list-tile-content>
                  </v-list-tile> 
                 </template>
              </v-list>
            </div>
          <img src="img/cms.png" width="100%">

        </v-layout>
      </v-container>
    </v-jumbotron>
  </v-layout>

    <v-layout row-sm column child-flex-sm class="mb-3">
        <v-jumbotron src="img/Support-Maintenance-2.jpeg" dark  style="height:400px;" >
      <v-container fill-height fluid>
        <v-layout align-center fluid>
          <v-flex class="white--text ">
            <h3 class="display-2">24 Hours Customer Support Services</h3>
            <h3 class="subheading"> Helping Our Customers To Deliver a somooth user expirence </h3>
            <div class="title mb-3">Check out our Services</div>
          </v-flex>
        </v-layout>
      </v-container>
    </v-jumbotron>
    </v-layout>

</div>

</template>

<script>
import data from '../content.json'
export default {
  head: {
    title: 'Home'
  },
  data () {
    return {
      hostingData: data.hostingPrice,
      slideItems: data.slide.slideContents,
      cmss: ['Joomla', 'WordPress', 'Drupal']
    }
  }
}
</script>

<style>
.slide-content {
  background-color: aliceblue;
  opacity: 0.9;
  color: black;
  position: relative;
  margin-left: 74%;
  width: 30%;
  margin-top: 0px;
  padding-left: 0px;
  float: right;
}
.slide-content > h4,
p {
  margin: 10px;
}
.img {
}
</style>
