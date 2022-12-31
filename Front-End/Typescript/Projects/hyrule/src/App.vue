<template>
  <div class="app">
    <header>
      <div class="order">
        <button @click="handleClick('title')">order by title</button>
        <button @click="handleClick('salary')">order by salary</button>
        <button @click="handleClick('location')">order by location</button>
      </div>
    </header>

    <jobList :jobs="jobs" :order="order" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import jobList from "./components/JobList.vue";
import OrderTerm from "./types/OrderTerm";
import Job from "./types/Job";

export default defineComponent({
  name: "App",
  components: {
    jobList,
  },

  setup() {
    const jobs = ref<Job[]>([
      { title: "farm worker", location: "lon lon", salary: 30000, id: "1" },
      { title: "flute player", location: "argentina", salary: 44444, id: "2" },
      { title: "fisherman", location: "spain", salary: 221234, id: "3" },
      { title: "prison guard", location: "england", salary: 53232, id: "4" },
      { title: "quarry", location: "turkey", salary: 11111, id: "5" },
      { title: "builder", location: "LA", salary: 32245, id: "6" },
    ]);

    const order = ref<OrderTerm>("title");
    const handleClick = (term: OrderTerm) => {
      order.value = term;
    };

    return { jobs, handleClick, order };
  },
});
</script>



<style>
header {
  text-align: center;
}
header .order {
  margin-top: 20px;
}
button {
  margin: 0 10px;
  color: #1195c9;
  border: 3px solid #1195c9;
  background: #d5f0ff;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
}
</style>

