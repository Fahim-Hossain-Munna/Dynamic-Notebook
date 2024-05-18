import axios from "axios";
import { defineStore } from "pinia";

export const useCategoryStore = defineStore("categories", {
  state: () => ({
    categories: [],
  }),
  actions: {
    async fetchData(url) {
      try {
        const response = await axios.get(url);
        this.categories = response.data.data; // Assign response data to store state
      } catch (error) {
        console.error("Error fetching latest data:", error);
        // Handle error appropriately, e.g., show error message to user
      }
    },
  },
});
