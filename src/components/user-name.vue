<template>
  <h3 class="text-2xl text-slate-700 font-bold leading-normal mb-1">
    {{user?.name}}
  </h3>
</template>

<script setup lang="ts">
import useUserCard from "@/utils/useUserCard";
const [{ user }] = useUserCard()

</script>
