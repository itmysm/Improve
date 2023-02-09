<template>
  <div class="bg h-screen bg-surface-100">
    <header>
      <TheHeader />
    </header>

    <hr class="w-full h-[2px] bg-surface-300">

    <div class="w-full flex justify-between mt-16 px-12">
      <NewUser />
      <Breadcrumbs />
    </div>

    <RouterView class="px-12" />
  </div>
</template>

<script setup>
import TheHeader from './components/TheHeader.vue'
import Breadcrumbs from './components/UI/Breadcrumbs.vue'
import NewUser from './components/UI/Modal-User.vue'
import { onMounted } from 'vue';
import { useMainStore } from './stores';

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

