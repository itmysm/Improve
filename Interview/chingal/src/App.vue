<template>
  <div class="h-screen bg-surface-100">
    <header>
      <TheHeader />
    </header>

    <hr class="w-full h-[2px] bg-surface-200">

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

