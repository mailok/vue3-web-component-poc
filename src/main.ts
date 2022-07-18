import WebComponent from "@/utils/web-component";
import "./assets/main.css";
import UserCard from "./components/user-card.ce.vue";
import UserHeader from "./components/user-header.ce.vue";
import UserAvatar from "./components/user-avatar.ce.vue";
import UserDetails from "./components/user-details.ce.vue";
import UserStatistics from "./components/user-statistics.ce.vue";
import UserName from "./components/user-name.ce.vue";
import UserBio from "./components/user-bio.ce.vue";
import UserCountry from "./components/user-country.ce.vue";
import UserFetchButton from "./components/user-fetch-button.ce.vue";

WebComponent.register([
  { component: UserCard, name: "user-card" },
  { component: UserHeader, name: "user-header" },
  { component: UserAvatar, name: "user-avatar" },
  { component: UserDetails, name: "user-details" },
  { component: UserStatistics, name: "user-statistics" },
  { component: UserName, name: "user-name" },
  { component: UserCountry, name: "user-country" },
  { component: UserBio, name: "user-bio" },
  { component: UserFetchButton, name: "user-fetch-button" },
]);

/*import { createApp } from "vue";
import App from "./App.vue";
import "./assets/main.css";
createApp(App).mount("#app");*/
