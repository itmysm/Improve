<template>
  <div class="bg min-h-screen bg-surface-100">
    <header>
      <TheHeader />
    </header>

    <hr class="w-full h-[2px] bg-surface-300">

    <div class="w-full flex justify-end my-12 px-12">
      <Breadcrumbs />
    </div>

    <RouterView class="px-12 h-fit" />
    <Notification />
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useMainStore } from './stores';

import TheHeader from './components/TheHeader.vue'
import Breadcrumbs from './components/UI/Breadcrumbs.vue'
import Notification from './components/UI/Notification.vue'

onMounted(() => {
  useMainStore().applyAppearance()
})
</script>

<style>
.bg {
  background-image: url('./assets/icons/noise.png');
  background-repeat: repeat;
}
</style>

