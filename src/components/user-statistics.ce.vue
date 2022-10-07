<template>
  <div class="w-full text-center">
    <div class="flex justify-center lg:pt-4 pt-8 pb-0">
      <div class="p-3 text-center flex flex-col justify-center items-center">
        <div v-if="query?.isFetching" class="animate-pulse flex h-7 w-12 bg-slate-200 rounded"></div>
        <span v-else class="text-xl font-bold block uppercase tracking-wide text-slate-700">{{ query?.data?.photos
          }}</span>
        <span class="text-sm text-slate-400">Photos</span>
      </div>
      <div class="p-3 text-center flex flex-col justify-center items-center">
        <div v-if="query?.isFetching" class="animate-pulse flex h-7 w-12 bg-slate-200 rounded"></div>
        <span v-else class="text-xl font-bold block uppercase tracking-wide text-slate-700">{{ query?.data?.followers
          }}</span>
        <span class="text-sm text-slate-400">Followers</span>
      </div>

      <div class="p-3 text-center flex flex-col justify-center items-center">
        <div v-if="query?.isFetching" class="animate-pulse flex h-7 w-12 bg-slate-200 rounded"></div>
        <span v-else class="text-xl font-bold block uppercase tracking-wide text-slate-700">{{ query?.data?.following
          }}</span>
        <span class="text-sm text-slate-400">Following</span>
      </div>
    </div>
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