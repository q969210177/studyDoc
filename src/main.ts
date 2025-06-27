import { createPinia } from "pinia";
import piniaPersist from "pinia-plugin-persistedstate";
import TDesign from "tdesign-mobile-vue";
import { createApp } from "vue";
import App from "./App.vue";
import { router } from "./router";
import "nprogress/nprogress.css"; // 导入样式文件

import "virtual:uno.css";
import "tdesign-mobile-vue/es/style/index.css";
import "@/style/index.scss";

const pinia = createPinia();
pinia.use(piniaPersist);
const app = createApp(App);
app.use(TDesign);
app.use(pinia);
app.use(router);
app.mount("#app");
