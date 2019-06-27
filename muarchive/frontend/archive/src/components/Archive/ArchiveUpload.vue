<template>
  <v-container>
      <v-layout>
          <v-flex>
          <v-card>
          <v-toolbar class="primary white--text" flat>
              <v-toolbar-title>Creat An Archive</v-toolbar-title>
          </v-toolbar>
         <v-card-text>
             <form @submit.prevent="addArchive">
 <v-flex>
                <v-layout row>
                    <h2>File</h2>
                    <image-upload @uploaded="imageAdded"   multi="false"></image-upload>
                </v-layout>
            </v-flex>
             <v-flex>
                 <v-layout>
                     <v-text-field label="Archive Title" required v-model="archive.title"></v-text-field>
                 </v-layout>
             </v-flex>
             <v-flex>
                 <v-layout>
                     <v-select :items="accessibility" required label="Accessibility" v-model="archive.accessibility"></v-select>
                 </v-layout>
             </v-flex>
             <v-flex>
                 <v-layout>
                     <v-select :items="catagorys" required label="Catagory" v-model="archive.dataType"></v-select>
                     <v-select :items="archiveType" required label="Archive Type" v-model="archive.archiveType"></v-select>
                 </v-layout>
             </v-flex>
             <v-flex>      
                    <v-layout row>
                        <v-select :items="regions" required v-model="archive.region" label="Region"></v-select>
                        <v-text-field required v-model="archive.wereda" label="Wereda"></v-text-field>
                        <v-text-field required v-model="archive.specificPlace" label="Specific Place"></v-text-field>
                    </v-layout>
             </v-flex>
             <v-flex>
                 <v-layout row>
                     <v-text-field label="Author" required v-model="archive.author">
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
                    <v-btn class="primary" type="Submit">Upload</v-btn>
                </v-layout>
            </v-flex>

             </form>
            
         </v-card-text>
      </v-card>
          </v-flex>
      </v-layout>
      
  </v-container>
</template>

<script>
import {mapState, mapActions} from 'vuex'
import ImageUpload from '../Ex/FileUpload'
export default {
  data () {
    return {
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
      }
    }
  },
  components: {ImageUpload},
  computed: {
    archiveType () {
      if (this.archive.dataType === 'Text') {
        return ['Letter', 'Notes', 'Purchment', 'Bible']
      } else if (this.archive.dataType === 'Image') {
        return ['Graph', 'Chart', 'Map', 'Symbol']
      } else if (this.archive.dataType === 'Audio') {
        return ['Song', 'Audio', 'Religious']
      } else if (this.archive.dataType === 'Video') {
        return ['Video', 'Song', 'Religuious']
      }
    },
    ...mapState('auth', ['user'])
  },
  methods: {
    imageAdded (imgId) {
      this.archive.fileName = imgId
    },
    addArchive () {
      this.creatArchive(this.archive)
          .then((res) => {
            this.$router.push('/archives')
          })
          .catch((err) => {
            console.log('Inside Add')
            console.log(err)
          })
    },
    ...mapActions('archive', {
      creatArchive: 'create'
    })
  },
  mounted () {
    if (!this.user) {
      this.$router.push('/login')
    }
  }
}
</script>

<style>

</style>
