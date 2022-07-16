<template>
  <div
    class="relative max-w-md mx-auto md:max-w-2xl mt-6 min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-xl mt-16 px-6">
    <slot></slot>
  </div>
</template>
<script setup lang="ts">
import useFetchUser from "@/utils/useFetchUser";
import { watch, defineEmits, provide } from "vue";

const { user, error, isFetching, fetchUser } = useFetchUser();

provide("user", user);
provide("fetchUser", fetchUser);
provide("isFetching", isFetching);
provide("error", error);

const emit = defineEmits<{
  (e: 'userFetched', user: any): void
}>()

watch(user, (user, prevUser) => {
  emit('userFetched', user)
})


</script>