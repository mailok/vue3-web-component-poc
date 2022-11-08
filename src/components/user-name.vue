<template>
  <h3
    class="text-[length:var(--size-user-name)] text-[color:var(--color-user-name)] font-bold leading-normal mb-1"
  >
    {{ query?.data?.name }}
  </h3>
</template>

<script setup lang="ts">
import User from "@/utils/user";
import { useObservable } from "@vueuse/rxjs";


const query = useObservable(User.query$);
</script>

<style scoped>
@import "../assets/main.css";
</style>
