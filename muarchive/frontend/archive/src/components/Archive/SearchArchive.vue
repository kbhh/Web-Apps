<template>
<v-container>
<v-card>
      <v-toolbar flat class='black--text' height="300px">
          <v-toolbar-title>
              Search 
          </v-toolbar-title>
             <v-flex class="white--text">
            <v-select :items="accessTypes"  v-model="access" label="Access Type"></v-select>
            <div v-show="closed">
            <v-text-field type="password" v-model="adminPass"  label="Access Code"></v-text-field>
            <v-btn @click="checkPass" :disabled="valid" class="primary"> Search</v-btn>
            </div>
            <v-layout row class="white--text" v-show="passFound">
                <v-select :items="catagorys" label="Catagorys"  required v-model="archive.dataType"></v-select>
                <v-select :items="archiveType" label="Archive Type" v-model="archive.archiveType"></v-select>
                <v-select  :items="form" v-model="openBy" required label="Form By"></v-select>
                <v-text-field v-model="archive.author" label="Author"></v-text-field>
                <v-text-field v-model="archive.title" label="Title"></v-text-field>
                <v-btn @click="searchArchives" :disabled="valid" class="primary"> Search</v-btn>
            </v-layout>
        </v-flex>
      </v-toolbar>
      <v-card-text>
      <v-flex v-show="!catalog">
         <v-card v-for="item in archives" :key="item.fileName" class="mb-3">
            <v-avatar align-center size="250px">
                <img src="http://localhost:3030/download.png" >
            </v-avatar>
            <v-card-text>
                <v-list dense>
                    <v-list-tile>
                        <v-list-tile-content> Title: </v-list-tile-content>
                        <v-list-tile-content> {{item.title}} </v-list-tile-content>
                    </v-list-tile>
                    <v-list-tile>
                        <v-list-tile-content> Author: </v-list-tile-content>
                        <v-list-tile-content> {{item.author}}</v-list-tile-content>
                    </v-list-tile>
                    <v-list-tile>
                        <v-list-tile-content> Url: </v-list-tile-content>
                        <v-list-tile-content> <a :href="'http://localhost:3030/' + item.fileName" target="blank"> {{'http://localhost:3030/' + item.fileName }}</a> </v-list-tile-content>
                    </v-list-tile>
                </v-list>
            </v-card-text>
         </v-card>
      </v-flex>    
    <v-data-iterator
      content-tag="v-layout"
      row
      wrap
      :items="archives"
      hide-actions
      v-show="catalog"
    >
      <v-flex
        slot="item"
        slot-scope="props"
        class="ml-3"
        xs12
        sm6
        md4
        lg3
      >
        <v-card>
          <v-card-title><h4>Catalog</h4></v-card-title>
          <v-divider></v-divider>
          <v-list dense>
            <v-list-tile>
              <v-list-tile-content>Author:</v-list-tile-content>
              <v-list-tile-content class="align-end">{{ props.item.author }}</v-list-tile-content>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-content>Title:</v-list-tile-content>
              <v-list-tile-content class="align-end">{{ props.item.title }}</v-list-tile-content>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-content>Block Number:</v-list-tile-content>
              <v-list-tile-content class="align-end">{{ props.item.blockNumber }}</v-list-tile-content>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-content>Shelf Number :</v-list-tile-content>
              <v-list-tile-content class="align-end">{{ props.item.shelfNumber }}</v-list-tile-content>
            </v-list-tile>
            
          </v-list>
        </v-card>
      </v-flex>
    </v-data-iterator>
      </v-card-text>
  </v-card>
</v-container>
  
</template>

<script>
import {mapState} from 'vuex'
export default {
  data () {
    return {
      accessTypes: ['Open', 'Closed'],
      access: undefined,
      admin: false,
      accessCode: '9034',
      form: ['Content', 'Catalog'],
      catagorys: ['Text', 'Image', 'Audio', 'Video'],
      viewType: undefined,
      adminPass: undefined,
      openBy: undefined,
      archive: {
        dataType: undefined,
        archiveType: undefined,
        author: undefined,
        title: undefined
      },
      archives: undefined
    }
  },
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
    doc () {
      if (this.archive.dataType === 'Image') {
        return false
      }
      return true
    },
    passFound () {
      if (this.closed && this.admin) {
        return true
      }
      if (!this.closed) {
        return true
      }
      return false
    },
    valid () {
      if (this.archive.archiveType && this.openBy) {
        return true
      }
      return false
    },
    catalog () {
      if (this.openBy === 'Catalog') {
        return true
      } else {
        return false
      }
    },
    closed () {
      if (this.access === 'Closed') {
        return true
      }
      return false
    },
    ...mapState('auth', ['user', 'authenticate'])
  },
  methods: {
    checkPass () {
      if (this.adminPass === this.accessCode) {
        this.admin = true
      }
    },
    searchArchives () {
      this.archive.accessibility = this.access
      this.$store.dispatch('archive/find', {query: this.archive})
                 .then(res => {
                   this.archives = res.data
                 })
    }
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
