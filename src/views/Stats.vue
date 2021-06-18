<template>
    <Graph/>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Graph from '../components/Graph.vue'

  export default Vue.extend({
    name: 'Stats',

    components: {
      Graph,
    },
  })
</script>