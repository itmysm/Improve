<template>
  <div>
    <button @click="onLogin">Login</button>
  </div>
</template>

<script setup>
import { useAuth } from "@/store/auth/index.ts";
const authStore = useAuth();

function onLogin() {
  authStore.login({
    username: "itmysm",
    email: "itmysm@gmail.com",
    password: "gmail.com",
  });
}
</script>
