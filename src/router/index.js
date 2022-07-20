import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
const principleComponents = import.meta.glob("../views/PrincipleView*.vue", {
  eager: true,
});

console.log("principleComponents", principleComponents);

const routes = Object.keys(principleComponents).map((key) => {
  const principle = principleComponents[key].default;
  const index = key.match(/\/PrincipleView(.*)\.vue$/)[1];
  return {
    path: "/principle" + index,
    name: "Principle" + index,
    component: principle,
  };
});

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    ...routes,
  ],
});

export default router;
