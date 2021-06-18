<template>
    <div>
        <v-data-table
            :headers="headers"
            :items="data"
            :items-per-page="5"
            class="elevation-1"
            :search="search">
            <template v-slot:top>
                <v-text-field
                v-model="search"
                label="Recherche"
                class="mx-4"
                ></v-text-field>
            </template>
        </v-data-table>
  </div>
</template>

<script>
  export default {
    name : 'Table',
    props : {
        headers : Array,
        data : Array,
    },
    data() {
      return {
          search: '',
      }
    }
  }
</script>