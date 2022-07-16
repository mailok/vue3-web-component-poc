<script setup lang="ts">
import UserStatistics from "./components/user-statistics.vue";
import UserHeader from "./components/user-header.vue";
import UserAvatar from "./components/user-avatar.vue";
import UserName from "./components/user-name.vue";
import UserDetails from "./components/user-details.vue";
import UserBio from "./components/user-bio.vue";
import UserCountry from "./components/user-country.vue";
import UserCard from "./components/user-card.vue";
import UserFetchButton from "./components/user-fetch-button.vue";

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