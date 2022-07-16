<template>
  <div v-if="isFetching" class="mt-2 flex flex-col gap-1 items-center justify-center">
    <div v-if="true" class="animate-pulse flex h-10 w-44 bg-slate-200 rounded"></div>
    <div v-if="true" class="animate-pulse flex h-4 w-44 bg-slate-200 rounded"></div>
  </div>
  <div v-else class="text-center mt-2">
    <slot></slot>
  </div>
</template>
<script setup lang="ts">
import useUserCard from "@/utils/useUserCard";
const [{ isFetching }] = useUserCard()
</script>