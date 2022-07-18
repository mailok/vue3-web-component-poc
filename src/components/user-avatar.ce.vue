<template>
  <div class="relative">
    <div
      v-if="isFetching"
      class="
        animate-pulse align-middle border-none absolute -m-16 -ml-16 lg:-ml-16
      "
    >
      <div class="rounded-full bg-slate-200 h-32 w-32"></div>
    </div>
    <img
      v-else
      :src="data?.avatar"
      class="shadow-xl rounded-full align-middle border-none absolute -m-16 -ml-16 lg:-ml-16 max-w-[150px]"
      alt="profile-image"
    />
  </div>
</template>

<script setup lang="ts">
import user from "@/utils/user";

const { data, isFetching } = user.useQuery();
</script>
<style scoped>
@import "../assets/main.css";
</style>
