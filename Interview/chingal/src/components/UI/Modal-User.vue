<template>
  <div>
    <Button text="کاربر جدید" @click="open = true" />

    <TransitionRoot as="template" :show="open">
    <Dialog as="div" class="relative z-10" @close="open = false">
      <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
        <div class="fixed inset-0 backdrop-blur-sm transition-opacity" />
      </TransitionChild>

      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
            <DialogPanel class="relative bg-surface-100 transform overflow-hidden rounded-lg text-left shadow-xl transition-all px-10 sm:my-8 sm:w-full sm:max-w-lg">
              <div class="flex justify-end border-b-2 border-surface-300 mt-10 pb-5">
                <h3 class="text-2xl	text-surface-900 mr-4">کاربر جدید</h3>
                
                <button @click="open = false">
                  <CloseIcon class="!fill-surface-900"/>
                </button>
              </div>

              <div class="flex justify-center items-center my-11">
                <img class="border-[2px] border-primary rounded-full p-4" src="../../assets/icons/Service-Verification.png" alt="" />
              </div>

              <ModalForm /> 

              <div class="grid grid-cols-2 gap-6 my-10">
                <Button class="text-xl shadow-confirm" text="تایید" @status="open = false" />
                <Button class="bg-transparent border border-primary text-xl" text="لغو" @status="open = false" />
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import CloseIcon from '../icons/close.vue'
import Button from '../UI/Button.vue'
import ModalForm from '../UI/Form.vue'
import { Dialog, DialogPanel, TransitionChild, TransitionRoot } from '@headlessui/vue'

const open = ref(false)
</script>