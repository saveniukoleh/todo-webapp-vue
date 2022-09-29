<template>
  <v-list-item
    class="pa-0"
    :to="{ name: 'event-show', params: { id: event.id } }"
  >
    <v-col class="pa-0">
      <v-divider></v-divider>
      <v-list-item-content class="pa-3">
        <v-list-item-title
          class="text-h6 mb-1"
          v-text="event.title"
        ></v-list-item-title>
        <v-list-item-subtitle>
          {{ event.time + " on " + event.date }}
        </v-list-item-subtitle>
      </v-list-item-content></v-col
    >
  </v-list-item>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: ["event"],
});
</script>
