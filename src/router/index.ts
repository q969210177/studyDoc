import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import loginView from "../views/loginView.vue";
import layoutView from "../views/loginView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/login",
    name: "login",
    component: loginView,
  },
  {
    path: "/",
    name: "layout",
    component: layoutView,
  },
  // {
  //   path: "/about",
  //   name: "about",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  // },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
router.beforeEach((to, form, next) => {
  console.log(to, form);

  next();
});
export default router;
