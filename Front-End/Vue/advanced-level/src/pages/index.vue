<template>
  <div @click="authStore.onGetUsers">Normal Page</div>
</template>

<script lang="ts" setup>
import { useAuth } from "../store/auth/index.ts";
const authStore = useAuth();

definePageMeta({
  layout: "default",
});
</script>
