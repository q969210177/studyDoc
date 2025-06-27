import type { RouteRecordRaw } from "vue-router";

// import { $t } from '#/locales';

const routes: RouteRecordRaw[] = [
  {
    meta: {
      icon: "lucide:layout-dashboard",
      order: -1,
      title: "page.dashboard.title",
    },
    name: "Dashboard",
    path: "/dashboard",
    children: [
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
    ],
  },
];

export default routes;
