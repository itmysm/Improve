import { extractStore } from "@/util/types/@store.ts";
import { defineStore } from "pinia";
import { useActions } from "./actions";
import { useGetters } from "./getters";
import { useState } from "./state";

export const useAuth = defineStore("useAuth", () => {
  return {
    ...extractStore(useState()),
    ...extractStore(useGetters()),
    ...extractStore(useActions()),
  };
});
