
<template>
<v-card class="amber mt-5 mb-5 elevation-0">
    <v-card-text>
      <v-container fluid md8>
        <v-layout row> 
          <h3>Contact Us</h3>
        </v-layout>
        <v-layout row>
          
          <v-flex xs12>
            <v-text-field
              name="visitor_email"
              label="Your Email Address"
              value="example@gmail.com"
              max="15"
              :rules="[rules.required, rules.email]"
              light
            ></v-text-field>
          </v-flex>
        </v-layout>
        <v-layout row>
          
          <v-flex >
            <v-text-field
              name="message"
              label="Your Message"
              value="your message"
              class="input-group"
              :rules="[rules.required]"
              light
              multi-line
            ></v-text-field>
          </v-flex>
        </v-layout>
        <v-layout row> 
          <v-spacer> </v-spacer> <v-btn class="amber lighten-4 ">Submit</v-btn>
        </v-layout>
        </v-container>
    </v-card-text>
</v-card>     
</template>

<script>
export default {
  head: {
    title: 'Contact'
  },
  data () {
    return {
      email: '',
      rules: {
        required: (value) => !!value || 'Required.',
        email: (value) => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'Invalid e-mail.'
        }
      }
    }
  }
}
</script>

