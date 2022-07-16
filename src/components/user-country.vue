<template>
  <div class="text-xs mt-0 mb-2 text-slate-400 font-bold uppercase">
    <i class="fas fa-map-marker-alt mr-2 text-slate-400 opacity-75"></i>{{user?.location}}
  </div>
</template>

<script setup lang="ts">
import { inject } from "vue";
const user = inject('user')
</script>

<style scoped>

</style>