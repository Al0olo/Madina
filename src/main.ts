import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

import { IonicVue } from '@ionic/vue';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* @import '@ionic/vue/css/palettes/dark.always.css'; */
/* @import '@ionic/vue/css/palettes/dark.class.css'; */
import '@ionic/vue/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';
import { createI18n } from "vue-i18n";
import ar from "./locales/ar.json";
import en from "./locales/en.json";

/* Multi Lang Support */
const messages = {ar,en};

export const i18n = createI18n({
  locale:
    navigator.language.split("-")[0] || import.meta.env.VUE_APP_I18N_LOCALE || "en",
  fallbackLocale: import.meta.env.VUE_APP_I18N_FALLBACK_LOCALE || "en",
  messages ,
  legacy: false,
});


const app = createApp(App)
  .use(IonicVue)
  .use(i18n)
  .use(router);

router.isReady().then(() => {
  app.mount('#app');
});
