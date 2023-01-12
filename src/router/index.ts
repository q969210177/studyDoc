// import { el } from "element-plus/es/locale";
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import loginView from "../views/loginView.vue";
import layoutView from "../views/layoutView.vue";

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
    // children: [
    //   {
    //     path: "chartPage/chartPageIndex",
    //     name: "chartPageIndex",
    //     component: import("@/views/chartPage/chartPageIndex.vue"),
    //   },
    // ],
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
// router.beforeEach((to, form, next) => {
//   console.log(to);
//   const token = window.sessionStorage.getItem("token");
//   if (token) {
//     next();
//   } else {
//     console.log(form.fullPath);

//     if (to.path === "/login") {
//       console.log(to.path === "/login");
//     } else {
//       next("/login");
//     }
//   }
//   // next();
// });
export default router;
