// https://github.com/vuejs/pinia/issues/802

import { defineStore } from "pinia";
import { useState } from "./state";

export const useGetters = defineStore("repo.getters", () => {
  const state = useState();

  // const foobar = computed((): string => {
  //   return `foo-${state.foo}`
  // })

  return {
    // foobar
  };
});
