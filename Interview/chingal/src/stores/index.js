import { defineStore } from "pinia"
import { appearanceSetter } from '../utils/appearance'

export const useMainStore = defineStore('main', {
  state: () => ({
    appearance: {
      theme: 'default',
      lang: 'en',
    }
  }),

  actions: {
    applyAppearance() {
      const savedAppearance = localStorage.getItem('appearance') // Get previous settings

      if (savedAppearance) {
        appearanceSetter(JSON.parse(savedAppearance))

      } else {
        localStorage.setItem('appearance', JSON.stringify(this.appearance)) // add default setting
        appearanceSetter(this.appearance)
      }
    }
  },
})