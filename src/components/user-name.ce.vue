<template>
  <h3
    class="text-[length:var(--size-user-name)] text-[color:var(--color-user-name)] font-bold leading-normal mb-1"
  >
    {{ user?.name }}
  </h3>
</template>

<script setup lang="ts">
import useUserCard from "@/utils/useUserCard";

const [{ user }] = useUserCard();
</script>

<style>
:root {
  --color-user-name: theme("colors.slate.700");
  --size-user-name: theme("spacing.8");
}
</style>
