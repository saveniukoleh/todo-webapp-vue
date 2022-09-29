<template>
  <v-card class="mx-auto" max-width="460" min-width="280">
    <v-card-title>
      <h1 class="display-2 font-weight-bold mb-3">Create an Event</h1>
    </v-card-title>
    <v-card-text>
      <v-form @submit.prevent="createEvent">
        <v-text-field
          v-model="event.title"
          label="Title"
          required
        ></v-text-field>
        <v-text-field
          v-model="event.description"
          label="Description"
          required
        ></v-text-field>
        <v-date-picker
          full-width
          v-model="event.date"
          class="mt-4"
          min="2000-01-01"
          max="2030-01-01"
        ></v-date-picker>
        <v-divider class="mb-3"></v-divider>
        <v-time-picker
          full-width
          ampm-in-title
          v-model="event.time"
        ></v-time-picker>
        <v-divider class="mb-3"></v-divider>
        <v-card-actions>
          <v-btn :disabled="disableSubmit" color="success" @click="createEvent">
            Submit
          </v-btn>
        </v-card-actions>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      event: this.createFreshEvent(),
    };
  },
  methods: {
    createEvent() {
      this.event.lastUpdate = new Date().toISOString().split("T")[0];
      this.$store
        .dispatch("createEvent", this.event)
        .then(() => {
          this.$router.push({
            name: "event-list",
          });
          this.event = this.createFreshEvent();
        })
        .catch((error) => {
          console.log("There was an error: ", error.message);
        });
    },
    createFreshEvent() {
      return {
        title: "",
        description: "",
        date: "",
        time: "",
        lastUpdate: "",
      };
    },
  },
  computed: {
    disableSubmit() {
      const allInputsFilled = !!(
        this.event.title &&
        this.event.description &&
        this.event.time &&
        this.event.date
      );
      return !allInputsFilled;
    },
  },
});
</script>
