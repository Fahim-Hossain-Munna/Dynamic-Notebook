import axios from "axios";
import { defineStore } from "pinia";

export const useAuthorStore = defineStore("Authors", {
  state: () => ({
    authors: [],
    img_link: "",
  }),
  actions: {
    async fetchData(url) {
      try {
        const response = await axios.get(url);
        this.authors = response.data.data; // Assign response data to store state
        this.img_link = response.data.img_path; // Assign response data to store state
      } catch (error) {
        console.error("Error fetching latest data:", error);
        // Handle error appropriately, e.g., show error message to user
      }
    },
  },
});
