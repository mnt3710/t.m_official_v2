<template>
  <v-app dark>
    <default-header/>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <default-footer />
  </v-app>
</template>

<script lang="ts">

import Vue from 'vue'
import DefaultFooter from '../components/Default/DefaultFooter.vue'
import DefaultHeader from '../components/Default/DefaultHeader.vue'

export default Vue.extend({
  components: { DefaultHeader, DefaultFooter },
})
</script>

<style>
  .v-main__wrap {
    background-color:white;
    color: black;
  }
</style>
