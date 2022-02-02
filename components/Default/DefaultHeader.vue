<template>
  <v-app-bar flating fixed app color="black" >
    <v-img :src="imgSrc" alt="logo" class="mr-10" width="50px"/>
    <v-btn dark plain class="titleBtn" to="/">
      {{$store.state.name}}
    </v-btn>
    <v-spacer />
    <default-tab />
  </v-app-bar>
</template>

<script lang="ts">
import Vue from 'vue'
import DefaultTab from './DefaultTab.vue'

declare var require: any

export default Vue.extend({
  components: { DefaultTab },
  data(){
    return{
      imgSrc: require("@/assets/logo_b.png")
    }
  },
  methods: {
  }
})
</script>

<style scoped>
  .titleBtn {
    font-size: 170%;
    white-space: nowrap;
  }
</style>