import axios from "axios";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useAuthorStore = defineStore("Authors", {
  state: () => ({
    authors: [],
    isAuthenticate: localStorage.getItem("isAuthenticate")
      ? JSON.parse(localStorage.getItem("isAuthenticate"))
      : ref(false),
    authCustomer: localStorage.getItem("auth")
      ? JSON.parse(localStorage.getItem("auth"))
      : [],
    authToken: localStorage.getItem("authToken")
      ? JSON.parse(localStorage.getItem("authToken"))
      : "",
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
    // fetch author method start
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
    // register method start
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
    // login method start

    async login(url, email, password) {
      try {
        let response = await axios.post(url, {
          email: email,
          password: password,
        });
        this.authToken = response.data.token;
        localStorage.setItem("authToken", JSON.stringify(this.authToken));

        let getAuth = await axios.get("http://127.0.0.1:8000/api/user", {
          headers: {
            Authorization: `Bearer ${this.authToken}`,
          },
        });

        this.authCustomer = getAuth.data;
        localStorage.setItem("auth", JSON.stringify(this.authCustomer));
        localStorage.setItem("isAuthenticate", JSON.stringify(true));
        this.isAuthenticate = true;
        this.successMsg.login = "Login Successfully Completed";
      } catch (error) {
        if (error.response.data.message.includes("creadential")) {
          this.errors.email = error.response.data.message;
        }
        error.response.data.errors.map((item) => {
          if (item.includes("email")) {
            this.errors.email = item;
          }
          if (item.includes("password")) {
            this.errors.password = item;
          }
        });
      }
    },
    // logout start
    logout() {
      localStorage.removeItem("isAuthenticate");
      localStorage.removeItem("authToken");
      localStorage.removeItem("auth");
      this.isAuthenticate = false;
      this.authToken = "";
      this.authCustomer = null;
    },
    // logout end
  },
});
