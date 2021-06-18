<template>
    <Table :headers="headers" :data="data"/>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Table from '../components/Table.vue'

  export default Vue.extend({
    name: 'Tableau',

    components: {
      Table,
    },

     data: () => ({
    headers: [
          {
            text: 'Ref',
            value: 'Ref',
            sortable : true
          },
          { 
            text: 'Sensors', 
            value: 'Sensors',
            sortable : true
            }
        ],
        data: [
          {
            Ref: 'alfa',
            Sensors: "New sensors",
          },
          {
            Ref: 'beta',
            Sensors: "Better",
          },
          {
            Ref: 'omega',
            Sensors: "Pollution",
          },
          {
            Ref: 'upsilon',
            Sensors: "Nano Part",
          },
          {
            Ref: 'upsilon',
            Sensors: "Nano Part",
          },
          {
            Ref: 'upsilon',
            Sensors: "Nano Part",
          },
          {
            Ref: 'upsilon',
            Sensors: "Nano Part",
          },
          {
            Ref: 'upsilon',
            Sensors: "Nano Part",
          },
          {
            Ref: 'upsilon',
            Sensors: "Nano Part",
          },
        ],
  }),
  })
</script>