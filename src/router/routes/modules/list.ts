import type { RouteRecordRaw } from "vue-router";

// import { $t } from '#/locales';

const routes: RouteRecordRaw[] = [
  {
    name: "ACGList",
    path: "/acglist",
    component: () => import("@/views/ACGList/acgList.vue"),
    meta: {
      affixTab: true,
      icon: "lucide:area-chart",
      title: "page.dashboard.analytics",
    },
  },
  {
    name: "StrokeList",
    path: "/strokelist",
    component: () => import("@/views/StrokeList/strokeList.vue"),
    meta: {
      affixTab: true,
      icon: "lucide:area-chart",
      title: "page.dashboard.analytics",
    },
  },
  {
    name: "StrokeForm",
    path: "/strokeForm",
    component: () => import("@/views/StrokeList/strokeForm.vue"),
    meta: {
      affixTab: true,
      icon: "lucide:area-chart",
      title: "page.dashboard.analytics",
    },
  },
  {
    name: "Index",
    path: "/index",
    component: () => import("@/views/index.vue"),
    meta: {
      affixTab: true,
      icon: "lucide:area-chart",
      title: "page.dashboard.analytics",
    },
  },
];

export default routes;
