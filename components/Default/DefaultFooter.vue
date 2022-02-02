<template>
  <v-footer>
    <v-spacer/>
    <v-icon v-for="data in iconFab" :key="data" large class="ml-5">
      {{data}}
    </v-icon>
<!--     <v-icon right>fab fa-twitter</v-icon> -->
  </v-footer>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data(){
    return{
      title: "",
      iconFab:["fab fa-instagram-square","fab fa-twitter","fab fa-github"]
    }
  }
})
</script>