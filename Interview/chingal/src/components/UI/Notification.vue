<template>
  <div aria-live="assertive" class="fixed inset-0 flex items-end px-4 py-6 pointer-events-none sm:p-6">
    <div class="w-full flex flex-col space-y-4 sm:items-end">
      <transition enter-active-class="transform ease-out duration-300 transition" enter-from-class="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2" enter-to-class="translate-y-0 opacity-100 sm:translate-x-0" leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
        <div v-if="show" class="max-w-sm w-full bg-surface-900 shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden">
          <div class="p-4">
            <div class="flex flex-row-reverse justify-between items-center">
              <div class="flex flex justify-start">
                <p class="text-surface-100">{{ props.message }}</p>
              </div>
              <div class="flex-shrink-0 flex">
                <button @click="show = false" class="inline-flex focus:outline-none">
                  <span class="sr-only">Close</span>
                  <CloseIcon class="fill-surface-100 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import CloseIcon from '../icons/close.vue'

const props = defineProps({
  message: {
    require: true,
    default: 'با موفقیت انجام شد',
  }
})
const show = ref(true)

setTimeout(() => {
  show.value = false
}, 4000);
</script>