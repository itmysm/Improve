<template>
  <header>
    <h1 class="bg-surface-500 text-2xl p-4">this is atest</h1>
  </header>

  <RouterView />
</template>

<script setup>
import { onMounted } from 'vue';
import { useMainStore } from './stores';

onMounted(() => {
  useMainStore().applyAppearance()
})
</script>

