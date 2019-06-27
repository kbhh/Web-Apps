<template>
<v-container>
 <v-carousel
   >
   <v-carousel-item v-for="item in data" :key="item.name" :src="item.src" >
   </v-carousel-item>
  </v-carousel>

  <v-card fluid height="400px" class="mt-4">
     <v-card-media class="text-xs-center" src="">
        <v-flex class="justify">
         <h2 class="display-1 "> 
             Yohannes IV
         </h2>    
         <p class="mt-2 ml-2 mr-2 mb-2" style="font-size: 15px">
             Yohannes IV was born at Mai-biha, a village then within the jurisdiction of Enderta province. He was the son of Mercha, Shum (or "governor") of Tembien, and his wife Woizero (or "Dame") Silass Dimtsu (Amata Selassie), who was the daughter of Dejazmach (roughly equivalent to "Duke") Dimtsu Debbab of Enderta the nephew of the powerful Ras Wolde Selassie of Enderta. Yohannes could claim Solomonic blood through the line of his paternal grandmother Woizero Workewoha KaleKristoss of Adwa, who was the granddaughter of Ras Mikael Sehul, and his wife Aster Iyasu, daughter of Empress Mentewab and her lover Melmal Iyasu.[2] Yohannes could also claim Solomonic descent more distantly through his father's Tembien family, also through a female link to the dynasty. Amata Selassie's father Dimtsu of Endarta belonged to the family which in late 18th and early 19th centuries had held overlordship of Tigray, and her mother descended from the aristocratic line of the Shums of Agame
         </p>
        </v-flex>   
     </v-card-media>
     
  </v-card>
</v-container>
  
</template>

<script>
export default {
  data () {
    return {
      data: [{src: '../../static/img/NewAtseYohannesPalace.jpg', name: '1'},
      {src: '../../static/img/emperor-yohannes-4-palace.jpg', name: '2'},
      {src: '../../static/img/Emperor-Yohannes-IV.jpg', name: '3'}]
    }
  },
  computed: {

  },
  methods: {}
}
</script>

<style>

</style>
