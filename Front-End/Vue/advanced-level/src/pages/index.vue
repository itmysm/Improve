<template>
  <div>Normal Page</div>
</template>

<script lang="ts" setup>
import { useAuth } from "../store/auth/index.ts";
const authStore = useAuth()

authStore.onGetUsers()

definePageMeta({
  layout: "default",
});
</script>
