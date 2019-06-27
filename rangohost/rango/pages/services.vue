
<template>
    <v-container class="mb-5 mt-5 pt-2 pb-0" fluid> 
      <div class="text-xs-center"> <h2>We Provide The Following Hosting Plans With Support Services</h2></div>
    <v-data-table
      v-bind:headers="headers"
      :items="items"
      hide-actions
      class="elevation-1"
    >
    <template slot="items" slot-scope="props">
      <td>{{ props.item.plan }}</td>
      <td class="text-xs-right">{{ props.item.price }}</td>
      <td class="text-xs-right">{{ props.item.storage }}</td>
      <td class="text-xs-right">{{ props.item.bandwidth }}</td>
      <td class="text-xs-right">{{ props.item.email }}</td>
      <td class="text-xs-right">{{ props.item.database }}</td>
      <td class="text-xs-right">{{ props.item.domain }}</td>
    </template>
  </v-data-table>
    

    </v-container>       
</template>

<script>
import data from '../content.json'
export default {
  head: {
    title: 'Products'
  },
  data () {
    return {
      headers: [
        {
          text: 'Hosting Plan',
          align: 'left',
          sortable: false,
          value: 'name'
        },
        { text: 'Price', value: 'Storage' },
        { text: 'Storage', value: 'fat' },
        { text: 'BandWidth', value: 'carbs' },
        { text: 'Email Address', value: 'protein' },
        { text: 'Database ', value: 'sodium' },
        { text: 'Domain', value: 'calcium' }
      ],
      items: data.hostingPrice
    }
  }
}
</script>

