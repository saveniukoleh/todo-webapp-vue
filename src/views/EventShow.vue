<template>
  <v-card class="mx-auto" max-width="460" min-width="280">
    <v-card-title>
      <h1 class="display-2 font-weight-bold">
        {{ event.title }}
      </h1>
    </v-card-title>
    <v-card-text>
      <p class="text-body-1 mb-3">{{ event.time }} on {{ event.date }}</p>
      <p class="text-h5 mb-3">Event details</p>
      <p class="text-body-1 mb-3">{{ event.description }}</p>
      <p class="text-caption ma-0">Last updated {{ event.lastUpdate }}</p>
    </v-card-text>
    <v-card-actions>
      <v-btn :to="{ name: 'event-edit' }" class="pa-4" rounded text
        >Update</v-btn
      >
      <v-spacer></v-spacer>
      <v-btn class="pa-4" rounded text color="red" @click="deleteEvent"
        >Delete</v-btn
      >
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState } from "vuex";

export default defineComponent({
  props: ["id"],
  created() {
    this.$store.dispatch("fetchEvent", this.id);
  },
  methods: {
    deleteEvent() {
      this.$store
        .dispatch("deleteEvent", this.event)
        .then(() => {
          this.$router.push({
            name: "event-list",
          });
        })
        .catch((error) => {
          console.log("There was an error: " + error.message);
        });
    },
  },
  computed: mapState(["event"]),
});
</script>
