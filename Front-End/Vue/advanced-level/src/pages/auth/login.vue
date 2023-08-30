<template>
  <div>
    <button @click="onLoginEvent">Login</button>
  </div>
</template>

<script setup>
console.log("hello script setup");

function onLoginEvent() {
  console.log('login');
}
</script>
