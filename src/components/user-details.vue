<template>
  <div
    v-if="query?.isFetching"
    class="mt-2 flex flex-col gap-1 items-center justify-center"
  >
    <div
      class="animate-pulse flex h-10 w-44 bg-slate-200 rounded"
    ></div>
    <div
      class="animate-pulse flex h-4 w-44 bg-slate-200 rounded"
    ></div>
  </div>
  <div v-else class="text-center mt-2">
    <slot></slot>
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
