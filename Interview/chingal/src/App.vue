<template>
  <header>
    <TheHeader />
  </header>

  <RouterView />
</template>

<script setup>
import TheHeader from './components/TheHeader.vue'
import { onMounted } from 'vue';
import { useMainStore } from './stores';

onMounted(() => {
  useMainStore().applyAppearance()
})
</script>

