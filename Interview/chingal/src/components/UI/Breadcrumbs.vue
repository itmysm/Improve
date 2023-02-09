<template>
  <ol class="breadcrumb flex items-center">
    <li class="text-surface-900" v-for="(breadcrumb, index) in breadcrumbs" :key="index">
      <router-link class="group flex items-center transition-color duration-300" :to="breadcrumb.path">
        <p class="mr-3 group-hover:text-primary-600">{{breadcrumb.name}}</p>
        <ArrowIcon class="fill-surface-900 group-hover:fill-primary-600"/>
      </router-link>
    </li>
  </ol>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import ArrowIcon from '../icons/arrow.vue'


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

