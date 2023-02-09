<template>
  <div class="">
    <Switch v-model="theme"
      class="relative inline-flex items-center h-[44px] w-[80px] bg-surface--gradient shrink-0 cursor-pointer rounded-xl bg-surface--input border-t border-x border-surface-300 transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
      <span class="sr-only"></span>

      <span aria-hidden="true" :class="theme ? 'translate-x-10' : 'translate-x-[3px]'"
        class="flex items-center justify-center pointer-events-none inline-block h-[34px] w-[34px] transform rounded-lg bg-primary shadow-xl ring-0 transition duration-200 ease-in-out">
        <img src="../../assets/icons/MoonFill.png" alt="" v-show="theme == false" />
        <img src="../../assets/icons/SunFill.png" alt="" v-show="theme == true" />
      </span>

      <span class="w-full absolute px-2 flex justify-between">
        <img src="../../assets/icons/Moon.png" alt="" :class="theme ? 'opacity-100' : 'opacity-0'" />
        <img src="../../assets/icons/Sun.png" alt="" :class="theme ? 'opacity-0' : 'opacity-100'" />
      </span>
    </Switch>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Switch } from '@headlessui/vue'

const theme = ref(false)
</script>
