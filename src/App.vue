<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title><h3>Todo App Vue</h3></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn rounded class="mx-3" text :to="{ name: 'event-list' }">List</v-btn>
      <v-btn rounded text :to="{ name: 'event-create' }">Create</v-btn>
    </v-app-bar>

    <v-main> <router-view /> </v-main>

    <v-footer padless>
      <v-card flat tile width="100%" class="primary lighten-1 text-center">
        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>Vue</strong>
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
