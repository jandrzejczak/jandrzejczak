import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import { OhVueIcon, addIcons } from "oh-vue-icons";
import {
  IoLanguage,
  CoTypescript,
  IoLogoVue,
  SiGit,
  SiAdobephotoshop,
  SiAdobeaftereffects,
  CoMysql,
  CoSassAlt,
  SiHtml5,
  CoJest,
  CoDocker,
  LaNode,
  CoGraphql,
  BiBehance,
  BiGithub,
  BiLinkedin,
  BiInstagram,
} from "oh-vue-icons/icons";

addIcons(
  IoLanguage,
  CoTypescript,
  IoLogoVue,
  SiGit,
  SiAdobephotoshop,
  SiAdobeaftereffects,
  CoMysql,
  CoSassAlt,
  SiHtml5,
  CoJest,
  CoDocker,
  LaNode,
  CoGraphql,
  BiBehance,
  BiGithub,
  BiLinkedin,
  BiInstagram,
);

const app = createApp(App);
app.component("v-icon", OhVueIcon);
app.use(createPinia());
app.use(router);

app.mount("#app");
