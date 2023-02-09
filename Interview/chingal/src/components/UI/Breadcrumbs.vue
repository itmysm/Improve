<template>
  <ol class="breadcrumb flex items-center">
    <li class="text-surface-900" v-for="(breadcrumb, index) in breadcrumbs" :key="index">
      <router-link
        class="after:content-[url('../../assets/icons/arrow-left.png')] after:relative after:top-[6px] after:mx-3"
        :to="breadcrumb.path">{{
  breadcrumb.name
        }}</router-link>
    </li>
  </ol>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';


const breadcrumbs = computed(() => {
  let route = useRoute()
  let breadcrumbs = []



  if (route.matched.length > 0) {
    route.matched.forEach(matchedRoute => {
      breadcrumbs.unshift({ name: matchedRoute.name, path: matchedRoute.path })
    });
  } else {
    while (route) {
      breadcrumbs.unshift({ name: route.name, path: route.path })
      route = route.meta.breadcrumb
    }
  }

  return breadcrumbs
})
</script>

