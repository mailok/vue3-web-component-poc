<template>
  <h3
    class="text-[length:var(--size-user-name)] text-[color:var(--color-user-name)] font-bold leading-normal mb-1"
  >
    {{ data?.name }}
  </h3>
</template>

<script setup lang="ts">
import user from "@/utils/user";

const { data } = user.useQuery();
</script>

<style scoped>
@import "../assets/main.css";
</style>
