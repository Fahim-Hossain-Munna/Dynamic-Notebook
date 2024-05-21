import axios from "axios";
import { defineStore } from "pinia";

export const useAuthorStore = defineStore("Authors", {
  state: () => ({
    authors: [],
    authCustomer: [],
    errors: [
      {
        firstname: "",
        lastname: "",
        email: "",
        password: "",
      },
    ],
    successMsg: [
      {
        register: "",
        login: "",
      },
    ],
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
    async register(url, firstname, lastname, email, password) {
      try {
        let response = await axios.post(url, {
          firstname: firstname,
          lastname: lastname,
          email: email,
          password: password,
        });

        if (response.data.status == 200) {
          this.successMsg.register = "Registration Successfully Complete";
        }
      } catch (error) {
        error.response.data.errors.map((item) => {
          if (item.includes("firstname")) {
            this.errors.firstname = item;
          }
          if (item.includes("lastname")) {
            this.errors.lastname = item;
          }
          if (item.includes("email")) {
            this.errors.email = item;
          }
          if (item.includes("password")) {
            this.errors.password = item;
          }
        });
      }
    },
  },
});
