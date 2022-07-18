<template>
  <div class="text-xs mt-0 mb-2 text-slate-400 font-bold uppercase">
    <i class="fas fa-map-marker-alt mr-2 text-slate-400 opacity-75"></i
    >{{ data?.location }}
  </div>
</template>

<script setup lang="ts">
import user from "@/utils/user";

const { data } = user.useQuery();
</script>
<style scoped>
@import "../assets/main.css";
</style>
