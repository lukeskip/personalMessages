// router/index.js
import { createRouter, createWebHistory } from "vue-router";
import Form from "../components/Form.vue";
import Hello from "../components/HelloWorld.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Form,
  },
  {
    path: "/about",
    name: "About",
    component: Hello,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
