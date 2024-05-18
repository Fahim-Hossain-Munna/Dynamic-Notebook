import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
// import the package
import VueAwesomePaginate from "vue-awesome-paginate";

// import the necessary css file
import "vue-awesome-paginate/dist/style.css";

const pinia = createPinia();
const app = createApp(App);

app.use(router);
app.use(VueAwesomePaginate);
app.use(pinia);
app.mount("#app");
