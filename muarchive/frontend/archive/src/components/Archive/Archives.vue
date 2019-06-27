<template>
<v-container fluid>
<v-data-table
        :headers="headers"
        :items="archives"
    class="elevation-1"
      >
      <template slot="items" slot-scope="props">
        <td>
       <v-btn class="elevation-0 red" flat :to="'archiveupdate/' + props.item._id">Update</v-btn>         
          <v-btn class="elevation-0" flat @click="removeArchive(props.item._id)">Delete</v-btn>
        </td>  
        <td class="text-xs-right">{{ props.item.title}}</td>
        <td class="text-xs-right">{{ props.item.author}}</td>
        <td class="text-xs-right">{{ props.item.dataType}}</td>
        <td class="text-xs-right">{{ props.item.archiveType}}</td>
        <td class="text-xs-right">{{ props.item.region}} <br>{{props.item.wereda}} <br> {{props.item.specificPlace}}</td>
        <td class="text-xs-right">{{ props.item.blockNumber}}</td>
        <td class="text-xs-right">{{ props.item.shelfNumber}}</td>
        <td class="text-xs-right">{{ props.item.age}}</td>
        <td class="text-xs-right">{{ props.item.desc | minify}}</td>
        <td class="text-xs-right">{{ props.item.accessibility}}</td>
      </template>
    </v-data-table>
   
   <v-layout class="mt-5">
     <v-flex>
       <v-data-table
       :headers="summeryHeader"
       :items="summery"
       hide-actions>
       <template slot="items" slot-scope="props">
         <td class="text-xs-right">Count</td>
         <td class="text-xs-right">{{props.item.image}}</td>
        <td class="text-xs-right">{{props.item.text}}</td>
         <td class="text-xs-right">{{props.item.video}}</td>
         <td class="text-xs-right">{{props.item.audio}}</td>
         
       </template>
          
       </v-data-table>
     </v-flex>
   </v-layout>
   
</v-container>
      
</template>

<script>
import {mapState, mapGetters} from 'vuex'
export default {
  data () {
    return {
      headers: [ {text: '', value: ''}, {text: 'Title', value: 'title'}, {text: 'Author', value: 'author'}, {text: 'Catagory', value: 'catagory'}, {text: 'Archive Type', value: 'archiveType'}, {text: 'Address', value: 'address'},
      {text: 'Block Number', value: 'blockNumber'}, {text: 'Shelf Number', value: 'shelfNumber'}, {text: 'Age', value: 'age'}, {text: 'Descrbition', value: 'desc'}, {text: 'Accessibility', value: 'accessibility'}
      ],
      summeryHeader: [{text: 'Type', value: 'type'}, {text: 'Image', value: 'image'}, {text: 'Text', value: 'text'}, {text: 'Video', value: 'video'}, {text: 'Audio', value: 'audio'}],
      updateUrl: undefined,
      summery: [{image: undefined, video: undefined, text: undefined, audio: undefined}]
    }
  },
  computed: {
    ...mapState('auth', ['user']),
    ...mapGetters('archive', {
      archives: 'list'
    })
  },
  methods: {
    removeArchive (id) {
      this.$store.dispatch('archive/remove', id)
    }
  },
  mounted () {
    if (this.user && (this.user.role === 'admin')) {
      this.$store.dispatch('archive/find', {query: {dataType: 'Image'}})
                 .then(res => {
                   this.summery[0].image = res.data.length
                   this.$store.dispatch('archive/find', {query: {dataType: 'Video'}}).then(res => { this.summery[0].video = res.data.length })
                   this.$store.dispatch('archive/find', {query: {dataType: 'Text'}}).then(res => { this.summery[0].text = res.data.length })
                   this.$store.dispatch('archive/find', {query: {dataType: 'Audio'}}).then(res => { this.summery[0].audio = res.data.length })
                 })
    } else {
      this.$router.push('/')
    }

    this.$store.dispatch('archive/find', {})
  }
}
</script>

<style>

</style>
