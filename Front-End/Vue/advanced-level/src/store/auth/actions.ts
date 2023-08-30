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

  function register(payload: any) {
    http.post("register", payload)
  }

  return {
    login,
    register
  };
});
