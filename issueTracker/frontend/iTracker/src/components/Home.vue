<template>
<v-container fluid>
    <v-jumbotron height="500px" class="mt-3"
      color="blue lighten-0"
      src="../../static/img/mekelle-university-kalamino-1.jpg">
       <v-container fill-height>
         <v-layout align-center>
           <v-flex class="justify white--text">
            <v-avatar size="250px">
            <img
              src="../../static/img/mekelle-university-kalamino-1.jpg" >
            </v-avatar>
             
             <h3 class="display-3" style="width: 100%; height:100%">Online Issue Tracking System</h3>
             <span>
               Report Your Issues Here Whether You are Stuff Member or Student
               You Can Use This System To Report Your Issues.
               To Anyone
             </span>
             <v-divider class="my-3"></v-divider>
             <div class="title mb-3">
               Register With Your  Id Here
             </div>
             <v-btn large color="primary " to="/login" >
               Register
             </v-btn>
           </v-flex>
         </v-layout>
       </v-container>
     </v-jumbotron>
     <v-layout class="mt-3">
         <v-flex>
           <v-card >
             <v-card-media
               height="300px" >
             </v-card-media>
           </v-card>
         </v-flex>
       </v-layout>
</v-container>
  
</template>

<script>
export default {

}
</script>

<style>

</style>
