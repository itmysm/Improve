<template>
  <button
    :class="btnActive ? 'scale-[.9]' : 'scale-100'" @click="emit('status', true)" @mousedown="btnActive = true" @mouseup="btnActive = false" @mouseleave="btnActive = false"
    class="bg-primary text-gray-900 hover:bg-primary-900 hover:text-gray-0 px-[24px] py-[16px] rounded-xl transition-color duration-300 focus:outline-none">
    {{ props.text }}
  </button>
</template>

<script setup>
import { ref } from 'vue';
const emit = defineEmits(['status'])
const props = defineProps({
  text: {
    require: true,
  }
})



const btnActive = ref(false)
</script>
