import axios from "axios";
import { defineStore } from "pinia";

export const useTagStore = defineStore("tags", {
  state: () => ({
    tags: [],
  }),
  actions: {
    async fetchData(url) {
      let response = await axios.get(url);
      this.tags = response.data.data;
    },
  },
});
