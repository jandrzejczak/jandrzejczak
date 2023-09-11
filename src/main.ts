import { createApp } from "vue";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import OhVueIcon from "@/config/constants/icons";

import App from "./App.vue";
import router from "./router";

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

const app = createApp(App);
app.component("v-icon", OhVueIcon);
app.use(pinia);
app.use(router);

app.mount("#app");
