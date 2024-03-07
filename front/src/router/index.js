// router/index.js
import { createRouter, createWebHistory } from "vue-router";
import Form from "../views/Form.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Form,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
