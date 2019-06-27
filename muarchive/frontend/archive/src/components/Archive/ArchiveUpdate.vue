<template>
  <v-container>
      <v-layout>
          <v-flex>
          <v-card>
          <v-toolbar class="primary white--text" flat>
              <v-toolbar-title>Creat An Archive</v-toolbar-title>
          </v-toolbar>
         <v-card-text>
             <v-flex>
                <v-layout row>
                    <h2>File</h2>
                    <v-spacer></v-spacer>
                    <div v-if="archive.dataType = 'Image'">
                        <v-avatar :tile="tile"  size="160">
                        <img :src="archivefile">
                       </v-avatar>
                    </div>
                    <div v-if="archive.dataType != 'Image' ">
                        <a :href="archivefile">{{archive.title}}</a>
                    </div>
                   
                </v-layout>

            </v-flex>
             <v-flex>
                 <v-layout>
                     <v-text-field label="Archive Title" v-model="archive.title"></v-text-field>
                 </v-layout>
             </v-flex>
             <v-flex>
                 <v-layout>
                     <v-select :items="accessibility" label="Accessibility" v-model="archive.accessibility"></v-select>
                 </v-layout>
             </v-flex>
             <v-flex>
                 <v-layout>
                     <v-select :items="catagorys" label="Catagory" v-model="archive.dataType"></v-select>
                     <v-select :items="archiveType" label="Archive Type" v-model="archive.archiveType"></v-select>
                 </v-layout>
             </v-flex>
             <v-flex>      
                    <v-layout row>
                        <v-select :items="regions" v-model="archive.region" label="Region"></v-select>
                        <v-text-field v-model="archive.wereda" label="Wereda"></v-text-field>
                        <v-text-field  v-model="archive.specificPlace" label="Specific Place"></v-text-field>
                    </v-layout>
             </v-flex>
             <v-flex>
                 <v-layout row>
                     <v-text-field label="Author"  v-model="archive.author">
                     </v-text-field>
                 </v-layout>
             </v-flex>
             
             <v-flex>
              <v-layout>
               <v-text-field label="Age" v-model="archive.age" type="number" > </v-text-field>
                <v-text-field label="Block Number" v-model="archive.blockNumber" type="number" > </v-text-field>
                <v-text-field label="Shelf Number" v-model="archive.shelfNumber" type="number"> </v-text-field>
              </v-layout>
            </v-flex>
             
            
            <v-flex>
               <v-layout row>
                  <v-text-field label="Archive Describition"  multi-line v-model="archive.desc">
                  </v-text-field>
              </v-layout>    
            </v-flex> 
            
            <v-spacer></v-spacer>
            <v-flex>
                <v-layout>
                    <v-spacer></v-spacer>
                    <v-btn class="primary" @click="updateArchive">Update</v-btn>
                </v-layout>
            </v-flex>
         </v-card-text>
      </v-card>
          </v-flex>
      </v-layout>
      
  </v-container>
</template>

<script>
import {mapState} from 'vuex'
import ImageUpload from '../Ex/FileUpload'
export default {
  data () {
    return {
      tile: true,
      landscape: true,
      education: undefined,
      skill: undefined,
      accessibility: ['Open', 'Closed'],
      catagorys: ['Text', 'Image', 'Audio', 'Video'],
      regions: ['Tigray', 'Amahra', 'Benishangul', 'Gambela', 'Afar', 'Somalia', 'Harere', 'Addis Abeba', 'Oromia'],
      archive: {
        title: undefined,
        fileName: undefined,
        dataType: undefined,
        archiveType: undefined,
        region: undefined,
        wereda: undefined,
        specificPlace: undefined,
        author: undefined,
        accessibility: undefined,
        age: undefined,
        blockNumber: undefined,
        shelfNumber: undefined,
        desc: undefined
      },
      archiveId: undefined,
      archivefile: undefined
    }
  },
  components: {ImageUpload},
  computed: {
    archiveType () {
      if (this.archive.dataType === 'Text') {
        return ['Letter', 'Notes', 'Purchment', 'Bible']
      }
      if (this.archive.dataType === 'Image') {
        return ['Graph', 'Chart', 'Map', 'Symbol']
      }
      if (this.archive.dataType === 'Audio') {
        return ['Song', 'Audio', 'Religious']
      }
      if (this.archive.dataType === 'Video') {
        return ['Video', 'Song', 'Religuious']
      }
    },
    ...mapState('auth', ['user'])
  },
  methods: {
    imageAdded (imgId) {
      this.archive.fileName = imgId
    },
    updateArchive () {
      this.$store.dispatch('archive/update', [this.archiveId, this.archive])
                 .then(res => {
                   this.$router.push('/archives')
                 })
    }
  },
  mounted () {
    if (!this.user) {
      this.$router.push('/login')
    }
    this.archiveId = this.$route.params.id
    this.$store.dispatch('archive/get', this.archiveId)
               .then((res) => {
                 this.archive = res
                 this.archivefile = 'http://localhost:3030/' + res.fileName
                 console.log(this.archive)
               })
               .catch()
  }
}
</script>

<style>

</style>
