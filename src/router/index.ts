import NProgress from "nprogress";
import { createRouter, createWebHashHistory } from "vue-router";
import BasicLayout from "@/layout/basic.vue";
import { useAccessStore } from "@/store/useAccessStore";

/**
 *  @zh_CN 创建vue-router实例
 */
const router = createRouter({
  history: createWebHashHistory("/"),
  // history:
  //   import.meta.env.VITE_ROUTER_HISTORY === "hash"
  //     ? createWebHashHistory(import.meta.env.VITE_BASE)
  //     : createWebHistory(import.meta.env.VITE_BASE),
  // 应该添加到路由的初始路由列表。
  routes: [
    {
      path: "/login",
      component: () => import("@/views/login.vue"),
    },
    {
      component: BasicLayout,
      meta: {
        hideInBreadcrumb: true,
        title: "Root",
      },
      name: "Root",
      path: "/",
      redirect: "/acglist",
      children: [
        {
          path: "/acglist",
          component: () => import("@/views/ACGList/acgList.vue"),
        },
      ],
      // children: [...dynamicRoutes, ...staticRoutes],
    },
  ],
  scrollBehavior: (to, _from, savedPosition) => {
    if (savedPosition) {
      return savedPosition;
    }
    return to.hash ? { behavior: "smooth", el: to.hash } : { left: 0, top: 0 };
  },
  // 是否应该禁止尾部斜杠。
  // strict: true,
});

// const resetRoutes = () => resetStaticRoutes(router, routes);

// 创建路由守卫
// createRouterGuard(router);
const whiteList: string[] = ["/login"];

// 全局前置守卫
router.beforeEach((to, from, next) => {
  NProgress.start();
  if (whiteList.includes(to.path) || to.meta.noNeedLogin) {
    // 在免登录白名单，直接进入
    next();
    NProgress.done();
    return;
  }
  const { isLogin } = useAccessStore();
  if (!isLogin) {
    next({ path: "/login", query: { redirect: to.fullPath } });
    NProgress.done();
    return;
  }
  console.log(isLogin, "isLogin");

  // // 1. 获取用户token（根据实际项目调整）
  // const token = localStorage.getItem("token");

  // // 2. 如果目标路由需要认证且无token，跳转到登录页
  // if (to.meta.requiresAuth && !token) {
  //   next({ path: "/login", query: { redirect: to.fullPath } });
  // }
  // // 3. 如果已登录却访问登录页，跳转到首页
  // else if (to.path === "/login" && token) {
  //   next("/");
  // }
  // // 4. 其他情况正常放行
  // else {
  //   next();
  // }
  NProgress.done();
  next();
});
export { router };
