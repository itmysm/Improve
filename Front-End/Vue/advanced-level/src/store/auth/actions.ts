import { defineStore } from "pinia";
import { useState } from "./state";
import createHttpClient from "@/util/http";

const http = createHttpClient({
  prefixUrl: "https://reqres.in/api/",
});

console.log("All Environment Variables:", process.env);

export const useActions = defineStore("repo.actions", () => {
  const state = useState();

  function onGetUsers() {
    http.get("users");
  }

  return {
    onGetUsers,
  };
});
