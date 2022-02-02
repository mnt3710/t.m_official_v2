<template>
  <v-tabs right >
      <v-tab v-for=" tabName in $store.state.tab" :key="tabName" :to="tabName">
        {{tabName}}
      </v-tab>
  </v-tabs>
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  methods: {
  }
})
</script>