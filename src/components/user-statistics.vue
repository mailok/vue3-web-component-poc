<template>
  <div class="w-full text-center">
    <div class="flex justify-center lg:pt-4 pt-8 pb-0">
      <div class="p-3 text-center flex flex-col justify-center items-center">
        <div v-if="isFetching" class="animate-pulse flex h-7 w-12 bg-slate-200 rounded"></div>
        <span v-else class="text-xl font-bold block uppercase tracking-wide text-slate-700">{{ user?.photos }}</span>
        <span class="text-sm text-slate-400">Photos</span>
      </div>
      <div class="p-3 text-center flex flex-col justify-center items-center">
        <div v-if="isFetching" class="animate-pulse flex h-7 w-12 bg-slate-200 rounded"></div>
        <span v-else class="text-xl font-bold block uppercase tracking-wide text-slate-700">{{ user?.followers }}</span>
        <span class="text-sm text-slate-400">Followers</span>
      </div>

      <div class="p-3 text-center flex flex-col justify-center items-center">
        <div v-if="isFetching" class="animate-pulse flex h-7 w-12 bg-slate-200 rounded"></div>
        <span v-else class="text-xl font-bold block uppercase tracking-wide text-slate-700">{{ user?.following }}</span>
        <span class="text-sm text-slate-400">Following</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { inject } from "vue";

const user = inject("user");
const isFetching = inject("isFetching");
</script>

<style scoped>

</style>