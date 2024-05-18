import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SingleBlog from "../views/SingleBlog.vue";
import SearchPage from "../views/SearchPage.vue";
import CategoryBlogsPage from "@/views/CategoryBlogsPage.vue";
import TagBlogsPage from "@/views/TagBlogsPage.vue";
import Error404 from "@/views/Error404.vue";
import Register from "@/views/Register.vue";
import Login from "@/views/Login.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/register",
      name: "registration",
      component: Register,
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/single/blog/:id",
      name: "singleblog",
      component: SingleBlog,
    },
    {
      path: "/search/page",
      name: "searchpage",
      component: SearchPage,
    },
    {
      path: "/category/blogs/:slug",
      name: "categoryBlogs",
      component: CategoryBlogsPage,
    },
    {
      path: "/tag/blogs/:slug",
      name: "tagBlogs",
      component: TagBlogsPage,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "errorpage",
      component: Error404,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
  ],
});

export default router;
