<template>
  <div v-if="true" class="mt-2 flex flex-col gap-1 items-center justify-center">
  </div>
  <div class="py-6 border-t border-slate-200 text-center">
    <div class="flex flex-wrap justify-center">
      <div
        v-if="isFetching"
        class="animate-pulse flex w-full px-4 h-20 bg-slate-200 rounded"
      ></div>
      <div v-else class="w-full px-4">
        <p class="font-light leading-relaxed text-slate-600 mb-4">
          An artist of considerable range, Mike is the name taken by
          Melbourne-raised, Brooklyn-based Nick Murphy writes, performs and
          records all of his own music, giving it a warm.
        </p>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import user from "@/utils/user";

const { isFetching } = user.useQuery();
</script>
<style>
@import "../assets/main.css";
</style>
