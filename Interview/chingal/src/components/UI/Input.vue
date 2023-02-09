<template>
  <div>
    <label class="relative text-gray-400 focus-within:text-gray-600 block">

      <img src="@/assets/icons/search.png"
        class="pointer-events-none text-surface-500 w-5 h-5 absolute top-1/2 transform -translate-y-1/2 right-3" alt="">

      <input
        class="w-full rounded-full text-base focus:outline-none w-80 h-9 p-6 pr-10 border-t border-x border-surface-300 bg-surface--input"
        type="text" placeholder="جستجو" dir="auto">
    </label>
  </div>
</template>


<style lang="css">
.bg-surface--input {
  background: linear-gradient(200.68deg, rgb(var(--color-surface-300) / 0%), rgb(var(--color-surface-300) / 82.07%));
}
</style>