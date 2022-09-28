<template>
  <!-- <router-link
    class="event-link"
    :to="{ name: 'event-show', params: { id: event.id } }"
  > -->
  <v-list-item :to="{ name: 'event-show', params: { id: event.id } }">
    <v-list-item-content>
      <v-list-item-title
        class="text-h6 mb-2"
        v-text="event.title"
      ></v-list-item-title>
      <v-list-item-subtitle>
        {{ event.time + " on " + event.date }}
      </v-list-item-subtitle>
      <v-divider class="pa-n3"></v-divider>
    </v-list-item-content>
  </v-list-item>
  <!-- <div class="event-card -shadow">
      <span class="eyebrow">@{{ event.time }} on {{ event.date }}</span>
      <h4 class="title">{{ event.title }}</h4>
    </div> -->
  <!-- </router-link> -->
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: ["index", "event"],
});
</script>

<style scoped>
.event-card {
  padding: 20px;
  margin-bottom: 24px;
  transition: all 0.2s linear;
  cursor: pointer;
}
.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}
.event-card > .title {
  margin: 0;
}

.event-link {
  color: black;
  text-decoration: none;
  font-weight: 100;
}
</style>
