import { OhVueIcon } from "oh-vue-icons";
import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

//import route components
import Home from "./pages/Home.vue";
import Guides from "./pages/Guides.vue";
import NotFound from "./pages/NotFound.vue";

import { createRouter, createWebHistory } from "vue-router";
const routes = [
  { path: "/", component: Home },
  { path: "/guides", component: Guides },
  { path: "/:pathMatch(.*)*", component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);

app.component("v-icon", OhVueIcon);
app.use(router).mount("#app");
