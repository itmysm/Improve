<template>
  <div class="grid grid-cols-2 gap-x-7 gap-y-8">
    <label v-for="(basicInfo, index) in formFields.basic" :key="index"
      class="flex flex-col items-end form-label inline-block">

      <p class="mb-1 text-surface-500">{{ basicInfo.label }}</p>

      <input type="text"
        class="bg-transparent placeholder:text-surface-400 text-surface-400  border border-surface-400 rounded-lg py-3 px-3 focus:outline-none focus:border-primary focus:text-surface-900"
        :placeholder="basicInfo.placeholder" :value="formData[basicInfo.key]"
        :dir="!!formData[basicInfo.key] ? 'auto' : 'rtl'" />
    </label>
  </div>

  <div class="grid grid-cols-4 mt-5 gap-x-2 max-w-[100%] overflow-hidden">
    <label v-for="(filed, index) in formFields.address.reverse()" :key="index"
      class="overflow-hidden flex flex-col items-end mt-6">

      <p class="mb-1 text-surface-500">{{ filed.label }}</p>

      <input type="text"
        class="max-w-[85px] bg-transparent text-sm placeholder:text-surface-400 text-surface-400 border border-surface-300 rounded-lg py-3 px-3 focus:outline-none focus:border-primary focus:text-surface-900"
        :placeholder="filed.placeholder" :value="formData[filed.key]" :dir="!!formData[filed.key] ? 'auto' : 'rtl'" />
    </label>
  </div>

  <div class="w-full">
    <label v-for="(filed, index) in formFields.company" :key="index"
      class="flex flex-col items-end form-label inline-block mt-10">

      <p class="mb-1 text-surface-500">{{ filed.label }}</p>

      <input type="text"
        class="bg-transparent placeholder:text-surface-400 text-surface-400 w-full border border-surface-400 rounded-lg py-3 px-3 focus:outline-none focus:border-primary focus:text-surface-900"
        :placeholder="filed.placeholder" :value="formData[filed.key]"
        :dir="!!formData[filed.key] ? 'auto' : 'rtl'" />
    </label>
  </div>
</template>

<script setup>
import { reactive } from 'vue';

const formFields = reactive({
  basic: [
    {
      label: 'سن',
      placeholder: 'سن خود را وارد کنید',
      key: 'age'
    },

    {
      label: 'نام کاربری',
      placeholder: 'نام کاربری خود را وارد کنید',
      key: 'username'
    },

    {
      label: 'ایمیل',
      placeholder: 'ایمیل خود را وارد کنید',
      key: 'email'
    },

    {
      label: 'شماره تلفن',
      placeholder: 'شماره تلفن خود را وارد کنید',
      key: 'phone'
    }
  ],

  address: [
    {
      label: 'کد پستی',
      placeholder: 'کد پستی',
      key: 'zip',
    },

    {
      label: 'خیابان',
      placeholder: 'خیابان',
      key: 'street',
    },

    {
      label: 'شهر',
      placeholder: 'شهر',
      key: 'city',
    },

    {
      label: 'کشور',
      placeholder: 'کشور',
      key: 'country',
    },
  ],

  company: [
    {
      label: 'شرکت',
      placeholder: 'نام شرکت خود را وارد کنید',
      key: 'company',
    }
  ]
})

const formData = {
  username: '',
  age: '',
  email: '',
  phone: '',
  country: '',
  city: '',
  street: '',
  zip: '',
  company: ''
}
</script>
