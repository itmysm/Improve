<template>
  <div>
    <button @click="onLogin">Login</button>
    <button class="mx-2" @click="onRegister">Register</button>
    <button class="mx-2" @click="useRouter().push('/')">Back</button>
  </div>
</template>

<script setup>
definePageMeta({
  middleware: 'auth'
})

import { useAuth } from "@/store/auth/index.ts";
const authStore = useAuth();

function onLogin() {
  authStore.login({
    email: "itmysm@gmail.com",
    username: "itmysm",
    password: "gmail.com",
  });
}

function onRegister() {
  authStore.register({
    email: "itmysm@gmail.com",
    username: "itmysm",
    password: "gmail.com",
  });
}
</script>
