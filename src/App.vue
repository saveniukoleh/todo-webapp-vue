<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>ToDo WebApp</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn class="mx-3" color="#1919d2" :to="{ name: 'event-list' }"
        >List</v-btn
      >
      <v-btn color="#19d2d2" :to="{ name: 'event-create' }">Create</v-btn>
    </v-app-bar>

    <v-main> <router-view /> </v-main>

    <v-footer padless>
      <v-card flat tile width="100%" class="primary lighten-1 text-center">
        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>ToDo WebApp</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "App",
});
</script>
