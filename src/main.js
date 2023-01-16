import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import Toaster from '@meforma/vue-toaster';

// import "./assets/main.css";

const app = createApp(App).use(Toaster);

app.use(createPinia());

app.mount("#app");
