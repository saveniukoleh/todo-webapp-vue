<template>
  <v-card class="mx-auto overflow-hidden" max-width="460" min-width="280">
    <v-list class="pa-0">
      <p class="text-sm-h3 font-weight-bold pa-3 pt-5 ma-0">Events Listing</p>
      <v-list-item-action>
        <v-row class="pl-3">
          <v-btn class="ma-3" @click="orderByCriteria = 'title'" text
            >Sort by Title</v-btn
          >
          <v-btn class="mt-3" @click="orderByCriteria = 'date'" text
            >Sort by Date</v-btn
          >
        </v-row>
      </v-list-item-action>
      <draggable @start="drag = true" @end="drag = false">
        <v-list-item
          class="pa-0 fullwidth"
          v-for="event in orderBy(events, orderByCriteria)"
          :to="{ name: 'event-show', params: { id: event.id } }"
          :key="event.id"
        >
          <EventCard :event="event"
        /></v-list-item>
      </draggable>
    </v-list>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import EventCard from "@/components/EventCard.vue";
import { mapState } from "vuex";
import Vue2Filters from "vue2-filters";
import draggable from "vuedraggable";

export default defineComponent({
  components: {
    EventCard,
    draggable,
  },
  data() {
    return {
      orderByCriteria: "title",
    };
  },
  created() {
    this.$store.dispatch("fetchEvents");
  },
  computed: mapState(["events"]),
  mixins: [Vue2Filters.mixin],
});
</script>
