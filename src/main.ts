import { createApp } from "vue";
import { createPinia } from "pinia";
import OhVueIcon from "@/config/constants/icons";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);
app.component("v-icon", OhVueIcon);
app.use(createPinia());
app.use(router);

app.mount("#app");
