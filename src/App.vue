<template>
  <v-app>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/tableau">Tableau</router-link> |
      <router-link to="/formes">Formes</router-link> |
      <router-link to="/stats">Stats</router-link>
    </div>
    <router-view/>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'App',
  components : {
  },
})
</script>
