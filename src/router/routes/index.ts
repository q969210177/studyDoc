import type { RouteRecordRaw } from "vue-router";
import BasicLayout from "@/layout/basic.vue";
import { mergeRouteModules } from "../utils";

const dynamicRouteFiles = import.meta.glob("./modules/**/*.ts", {
  eager: true,
});

/** 动态路由 */
const dynamicRoutes: RouteRecordRaw[] = mergeRouteModules(dynamicRouteFiles);
console.log(dynamicRouteFiles, "dynamicRouteFiles");

/** 外部路由列表，访问这些页面可以不需要Layout，可能用于内嵌在别的系统(不会显示在菜单中) */
const staticRoutes: RouteRecordRaw[] = [];
const externalRoutes: RouteRecordRaw[] = [];
const coreRoutes: RouteRecordRaw[] = [
  {
    component: BasicLayout,
    meta: {
      hideInBreadcrumb: true,
      title: "Root",
    },
    name: "Root",
    path: "/",
    // redirect: preferences.app.defaultHomePath,
    children: [...dynamicRoutes, ...staticRoutes],
  },
];
/**
 * 路由列表，由基本路由、外部路由和404兜底路由组成
 *  无需走权限验证（会一直显示在菜单中）
 */
const routes: RouteRecordRaw[] = [...externalRoutes];

/** 基本路由列表，这些路由不需要进入权限拦截 */
// const coreRouteNames = traverseTreeValues(coreRoutes, (route) => route.name);

/** 有权限校验的路由列表，包含动态路由和静态路由 */
export { coreRoutes, routes };
