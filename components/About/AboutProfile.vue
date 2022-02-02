<template>
  <div>
    &lt;{{title}}&gt;
    <div v-for="(data, name) in detail" :key="name">
      {{`${name}:${data}`}}
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      title: "profile",
      detail: {
        name: "Tahakashi Minato",
        background: "University of Aizu",
        pref: "Yamagata",
        skill: ["Vue.js", "Nuxt.js", "TypeScript"]
      }
    }
  }
})
</script>