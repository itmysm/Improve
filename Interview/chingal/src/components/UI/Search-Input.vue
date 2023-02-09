<template>
  <div>
    <label class="relative block">

      <img src="@/assets/icons/search.png"
        class="pointer-events-none text-surface-500 w-5 h-5 absolute top-1/2 transform -translate-y-1/2 right-3" alt="">

      <input
        class="w-80 text-surface-500 bg-surface--gradient rounded-full text-base focus:outline-none w-80 h-9 p-6 pr-10 border-t border-x border-surface-300"
        type="text" placeholder="جستجو" @input="inputUpdated" :dir="!!input ? 'auto' : 'rtl'">
    </label>
  </div>
</template>

<script setup>
import { ref } from "vue";

const input = ref('')

function inputUpdated(event) {
  input.value = event.target.value
}
</script>