<template>
  <div class="text-center p-2">
    <button @click="fetch" :class="variants[props.variant || 'outline']">
      <slot></slot>
    </button>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import user from "@/utils/user";

type Variant = "outline" | "filled";

const variants: Record<Variant, string> = {
  outline:
    "p-2 pl-5 pr-5 bg-transparent border-2 border-blue-500 text-blue-500 text-lg rounded-lg hover:bg-blue-500 hover:text-gray-100 focus:border-4 focus:border-blue-300",
  filled:
    "p-2 pl-5 pr-5 bg-blue-500 text-gray-100 text-lg rounded-lg focus:border-4 border-blue-300",
};

interface Props {
  variant?: Variant;
}

const props = defineProps<Props>();

const { fetch } = user.useQuery();
</script>
<style>
@import "../assets/main.css";
</style>
