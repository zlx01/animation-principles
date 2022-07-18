import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
];
for (let i = 0; i < 12; i++) {
  routes.push({
    path: `/principle${i + 1}`,
    name: `principle${i + 1}`,
    component: () => import(`../views/PrincipleView${i + 1}.vue`),
  });
}

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
