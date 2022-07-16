<script setup lang="ts">
import UserStatistics from "./components/user-statistics.ce.vue";
import UserHeader from "./components/user-header.ce.vue";
import UserAvatar from "./components/user-avatar.ce.vue";
import UserName from "./components/user-name.ce.vue";
import UserDetails from "./components/user-details.ce.vue";
import UserBio from "./components/user-bio.ce.vue";
import UserCountry from "./components/user-country.ce.vue";
import UserCard from "./components/user-card.ce.vue";
import UserFetchButton from "./components/user-fetch-button.ce.vue";

// variant="filled" | outline

// @user-fetched="print"
/*function print(user: any) {
  console.log('Listen @user-fetched event:', user);
}*/

</script>
<template>
  <user-card>
    <user-header>
      <user-avatar></user-avatar>
    </user-header>
    <user-statistics />
    <user-details>
      <user-name></user-name>
      <user-country></user-country>
    </user-details>
    <user-bio></user-bio>
    <user-fetch-button>Fetch User</user-fetch-button>
  </user-card>
</template>
