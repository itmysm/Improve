<template>
  <div>
    <div class="flex flex-col pb-8" v-if="true">
      <table class="w-full" dir="rtl">
        <thead class="w-full">
          <tr class="border border-surface-300 rounded-xl text-surface-500 text-sm rounded-lg text-center">
            <th class="py-2 px-5 cursor-pointer transition-colors select-none" :class="[sortColumn == head.code ? 'bg-primary text-surface-900 flex justify-center items-center' : '', tableHeads.length - 1 <= index ? '' : 'border-l border-surface-300']"
             v-for="(head, index) in tableHeads" :key="index" @click="sortTable(head.code)">
              {{ head.name }}
              <ArrowUpIcon class="fill-surface-900 mr-2 transition-all" :class="sortOrder == 1 ? 'rotate-180' : 'rotate-0'" v-show="sortColumn == head.code" />
            </th>
          </tr>
        </thead>

        <tbody class="max-h-screen w-full overflow-y-scroll">
          <tr class="text-center" :class="index % 2 ? 'bg-transparent' : 'bg-surface-200'"
            v-for="(user, index) in sortedTable" :key="index">

            <td class="border border-surface-300 px-5 py-7 w-[140px]">
              <p class="text-sm text-surface-600">{{ user.name || empty }}</p>
            </td>

            <td class="border border-surface-300 px-5 py-7 w-[120px]">
              <p class="text-surface-900">{{ user.age || empty }}</p>
            </td>

            <td class="bigCell border border-surface-300 px-5 py-7 w-[344px]">
              <p class="text-surface-900">{{ user.phoneNumber || empty }}</p>
            </td>

            <td class="bigCell border border-surface-300 px-5 py-7 max-w-[344px]">
              <p class="text-sm text-surface-600">{{ user.email || empty }}</p>
            </td>

            <td class="bigCell border border-surface-300 px-5 py-7 max-w-[344px]">
              <p class="text-surface-900">{{ user.street || empty }}</p>
            </td>

            <td class="bigCell border border-surface-300 px-5 py-7 max-w-[344px]">
              <p class="text-surface-900">{{ user.company || empty }}</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <section v-else>
      <RouterView></RouterView>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, reactive } from 'vue';
import ArrowUpIcon from '../../components/icons/Arrow-up.vue';
import { useUsersStore } from '../../stores/dashboard/usersList';

const userStore = useUsersStore()
userStore.fetchUsers() // fetch users

const tableHeads = reactive([
  {
    name: 'نام کاربری',
    code: 'name',
  },
  {
    name: 'سن',
    code: 'age',
  },
  {
    name: 'شماره تلفن',
    code: 'phoneNumber',
  },
  {
    name: 'ایمیل',
    code: 'email',
  },
  {
    name: 'ادرس',
    code: 'address',
  },
  {
    name: 'شرکت',
    code: 'company',
  },
])

const users = computed(() => userStore.getUsersList)
const sortColumn = ref('name');
const sortOrder = ref(1);
const empty = '~'

const sortedTable = computed(() => {
  // eslint-disable-next-line vue/no-side-effects-in-computed-properties
  return users.value.sort((a, b) => {
    console.log(sortColumn.value, sortColumn.value);
    const sortValue = sortOrder.value * (a[sortColumn.value] > b[sortColumn.value] ? 1 : -1);
    return sortValue;
  });
})

function sortTable(column) {
  console.log(sortOrder.value);
  if (sortColumn.value === column) {
    sortOrder.value = -sortOrder.value;
  } else {
    sortColumn.value = column;
    sortOrder.value = 1;
  }
}
</script>