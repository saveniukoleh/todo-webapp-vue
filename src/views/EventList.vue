<template>
  <v-card class="mx-auto overflow-hidden" max-width="460" min-width="280">
    <v-list class="pa-0">
      <p class="text-sm-h3 font-weight-bold pa-3 mb-2 mt-2">Events Listing</p>
      <v-list-item
        class="pa-0 fullwidth"
        v-for="event in events"
        :key="event.id"
      >
        <EventCard :event="event"
      /></v-list-item>
    </v-list>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import EventCard from "@/components/EventCard.vue";
import { mapState } from "vuex";

export default defineComponent({
  components: {
    EventCard,
  },
  created() {
    this.$store.dispatch("fetchEvents");
  },
  computed: mapState(["events"]),
});
</script>
