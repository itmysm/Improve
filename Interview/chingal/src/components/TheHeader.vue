<template>
  <header class="flex justify-between items-center bg-surface-100 py-4 px-8">
    <div class="flex items-center">
      <ThemeSwitcher class="mr-6" />
      <SearchInput />
    </div>
    <img class="h-20" src="../assets/logos/head-logo.svg" alt="">
  </header>
</template>

<script setup>
import SearchInput from '@/components/UI/Search-Input.vue'
import ThemeSwitcher from '@/components/UI/Theme-Switch.vue'
</script>