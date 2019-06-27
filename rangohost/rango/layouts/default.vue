<template>
  <v-app>
   
   <v-navigation-drawer temporary v-model="sideNav" 
    clipped
    fixed
    app>
      
      <v-list>
         <v-list-tile to='/' >
            <v-list-tile-action><v-icon>home</v-icon></v-list-tile-action>
            <v-list-tile-content>Home</v-list-tile-content>
                
         </v-list-tile>
      <v-list-tile to='/services'> 
            <v-list-tile-action><v-icon>home</v-icon></v-list-tile-action>
            <v-list-tile-content>Service</v-list-tile-content>    
         </v-list-tile>
    <v-list-tile to='/about'> 
            <v-list-tile-action><v-icon>home</v-icon></v-list-tile-action>
            <v-list-tile-content>About </v-list-tile-content>    
    </v-list-tile>
  
   </v-list>
   
   </v-navigation-drawer>

   <v-toolbar class="amber" fixed flat>
      
      <v-toolbar-side-icon 
        @click="sideNav=!sideNav"
        class="hidden-sm-and-up"></v-toolbar-side-icon>
        <v-toolbar-title>RangoHost</v-toolbar-title>

   <v-toolbar-items class="hidden-xs-only "> 
     <nuxt-link to='/'  class="btn btn--flat " exact> <span class="btn__content"> Home</span></nuxt-link> 
     <nuxt-link to='/services'  class="btn btn--flat " exact> <span class="btn__content"> Services </span></nuxt-link> 
     <nuxt-link to='/about'  class="btn btn--flat " exact> <span class="btn__content"> About</span></nuxt-link> 
   </v-toolbar-items>
     <v-spacer> </v-spacer> 
        <v-toolbar-items class="hidden-xs-only "> 
          <v-btn  flat> <v-icon>phone</v-icon>+251921926720 </v-btn>
          <v-spacer></v-spacer>
          <v-btn  flat> <v-icon>email</v-icon> samsonya@gmail.com</v-btn> 
        </v-toolbar-items>
   </v-toolbar>

    <main>
      <v-container fluid>
      <nuxt/>

      </v-container>
    </main>


     <v-layout row-sm  child-flex-sm class="amber pb-4">
       <v-card flat class="amber mt-3 ml-3" style="width:33%">
          <h5>About IGNITERS</h5>
            <ul class="foot-list"> 
              <li> <a href="/about" class="foot-link"> About Us</a></li>
              <li> <a href='/contact' class="foot-link"> Contact Us</a></li>
              <li> <a href="facebook.com" class="foot-link"> </a></li>
              <li> <a href="facebook.com" class="foot-link"> </a></li>
              <li> <a href="facebook.com" class="foot-link"></a></li>

            </ul>
       </v-card>
       <v-card flat class="amber mt-3 ml-3" style="width:33%">
          <h5>Services</h5>
            <ul class="foot-list"> 
              <li> <a href="/services" class="foot-link"> Hosting Service</a></li>
              <li> <a href="/services" class="foot-link"> Domain Name Service</a></li>
              <li> <a href="/services" class="foot-link"> Domain Name Service</a></li>
        


            </ul>
       </v-card>   
      <v-card flat class="amber mt-3 ml-3" style="width:33%">
          <h5>Contact</h5>
            <ul class="foot-list"> 
              <li> <a href="/services" class="foot-link"> <v-icon>phone</v-icon>+251921926720</a></li>
              <li> <a href='/contact' class="foot-link"> <v-icon>email</v-icon> samsonya@gmail.com</a></li>
              <li> <a href='/contact' class="foot-link"> <v-icon>fa-lock</v-icon> facebook</a></li>
            </ul>
       </v-card>   

     </v-layout>
      
      <div class="text-xs-center amber"> © {{ new Date().getFullYear()  }} IGNITERS PLC</div>

  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        sideNav: false
      }
    }
  }
</script>

<style>
  .foot-link{
     text-decoration: none;
     color:black;
     
  }
  .foot-list{
    list-style:none; 
  }
</style>

