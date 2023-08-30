import { defineStore } from "pinia";
import { useState } from "./state";
import createHttpClient from "@/util/http";

const http = createHttpClient({
  prefixUrl: "https://reqres.in/api/",
});

export const useActions = defineStore("repo.actions", () => {
  const state = useState();

  function login(payload: any) {
    http.post("login", payload);
  }

  return {
    login,
  };
});
