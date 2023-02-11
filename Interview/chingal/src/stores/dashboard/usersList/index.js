import { defineStore } from "pinia"
import axios from 'axios'


export const useUsersStore = defineStore('users', {
  state: () => ({
    users: []
  }),

  getters: {
    getUsersList: (state) => state.users,
  },

  actions: {
    async fetchUsers() {
      console.log('s');
      try {
        const response = await axios.get('https://63c2988fe3abfa59bdaf89f6.mockapi.io/users')
        this.users = response.data
      } catch (error) {
        console.error(error)
      }
    }
  },
})