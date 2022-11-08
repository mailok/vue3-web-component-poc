import { createApp } from "vue";
import App from "./App.vue";
import "./assets/main.css";
import { highlight } from "@/highlight/directive";
const app = createApp(App);
app.directive("highlight", highlight);

app.mount("#app");
