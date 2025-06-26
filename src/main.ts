import { createPinia } from "pinia";
import piniaPersist from "pinia-plugin-persistedstate";
import { createApp } from "vue";
import App from "./App.vue";
import "virtual:uno.css";

const pinia = createPinia();
pinia.use(piniaPersist);
const app = createApp(App);
app.use(pinia);
app.mount("#app");
