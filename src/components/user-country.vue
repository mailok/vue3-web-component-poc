<template>
  <div class="text-xs mt-0 mb-2 text-slate-400 font-bold uppercase">
    <i class="fas fa-map-marker-alt mr-2 text-slate-400 opacity-75"></i
    >{{ query?.data?.location }}
  </div>
</template>

<script setup lang="ts">
import User from "@/utils/user";
import { useObservable } from "@vueuse/rxjs";

const query = useObservable(User.query$);
</script>
<style scoped>
@import "../assets/main.css";
</style>
