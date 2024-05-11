import { createApp } from "vue";
import "./index.css";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Software from "./views/Software.vue";
import Experience from "./views/Experience.vue";
import Hobbies from "./views/Hobbies.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Home },
    { path: "/about-me", component: About },
    { path: "/software-projects", component: Software },
    { path: "/experience", component: Experience },
    { path: "/hobbies", component: Hobbies },
    { path: "/:pathMatch(.*)", redirect: "/" }, //TODO: funny 404 err page
  ],
});

createApp(App).use(router).mount("#app");
