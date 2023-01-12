export interface IRouterItem {
  path: string;
  name: string;
  component: string;
}
// src/
export const addRouterArr: IRouterItem[] = [
  {
    path: "chartPage/chartPageIndex",
    name: "chartPageIndex",
    component: "@/views/chartPage/chartPageIndex.vue",
  },
];
