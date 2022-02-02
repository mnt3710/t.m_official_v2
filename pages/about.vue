<template>
  <div>
    {{$store.state.tab}}
    <about-profile/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import AboutProfile from '../components/About/AboutProfile.vue'

export default Vue.extend({
  components: { AboutProfile },
})
</script>