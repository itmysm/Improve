<template>
  <div @click="authStore.onGetUsers">
    <button @click="useRouter().push('/auth')">Go somewhere</button>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  middleware: ["auth"],
  // or middleware: 'auth'
});
import { useAuth } from "../store/auth/index.ts";
const authStore = useAuth();

definePageMeta({
  layout: "default",
  middleware: "auth"
});
</script>
