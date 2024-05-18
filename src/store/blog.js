import axios from "axios";
import { defineStore } from "pinia";

export const useBlogStore = defineStore("blogs", {
  state: () => ({
    featureBlog: [],
    PopularBlog: [],
    SingleBlog: [],
    userImagePath: localStorage.getItem("userpath")
      ? JSON.parse(localStorage.getItem("userpath"))
      : "",
    BlogImagePath: localStorage.getItem("blogpath")
      ? JSON.parse(localStorage.getItem("blogpath"))
      : "",
  }),
  actions: {
    async fetchFeatureBlog(url) {
      let response = await axios.get(url);
      this.featureBlog = response.data.data;
      this.BlogImagePath = response.data.img_path_blog;
      this.userImagePath = response.data.img_path_user;
      localStorage.setItem("blogpath", JSON.stringify(this.BlogImagePath));
      localStorage.setItem("userpath", JSON.stringify(this.userImagePath));
    },
    async fetchPopularBlog(url) {
      let response = await axios.get(url);
      this.PopularBlog = response.data.data;
      this.BlogImagePath = response.data.img_path_blog;
      this.userImagePath = response.data.img_path_user;
      localStorage.setItem("blogpath", JSON.stringify(this.BlogImagePath));
      localStorage.setItem("userpath", JSON.stringify(this.userImagePath));
    },
    async fetchSingleBlog(url) {
      let response = await axios.get(url);
      this.SingleBlog = response.data.data;
      this.BlogImagePath = response.data.img_path_blog;
      this.userImagePath = response.data.img_path_user;
    },
  },
});
