<template>
  <div>
    <h1>Create an Event</h1>
    <form @submit.prevent="createEvent">
      <h3>Name & describe your event</h3>
      <div class="field">
        <label>Title</label>
        <input
          v-model="event.title"
          type="text"
          placeholder="Add an event title"
        />
      </div>
      <div class="field">
        <label>Description</label>
        <input
          v-model="event.description"
          type="text"
          placeholder="Add a description"
        />
      </div>
      <h3>When is your event?</h3>
      <div class="field">
        <label>Date</label>
        <datepicker v-model="event.date" placeholder="Select a date" />
      </div>
      <div class="field">
        <label>Select a time</label>
        <select v-model="event.time">
          <option v-for="time in times" :key="time">{{ time }}</option>
        </select>
      </div>
      <input type="submit" class="button -fill-gradient" value="Submit" />
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Datepicker from "vuejs-datepicker";

export default defineComponent({
  components: {
    Datepicker,
  },
  data() {
    const times = [];
    for (let i = 1; i <= 24; i++) {
      times.push(i + ":00");
    }
    return {
      event: this.createFreshEvent(),
      times,
    };
  },
  methods: {
    createEvent() {
      this.$store
        .dispatch("createEvent", this.event)
        .then(() => {
          this.$router.push({
            name: "event-show",
            params: { id: this.event.id },
          });
          this.event = this.createFreshEvent();
        })
        .catch(() => {
          console.log("There is a problem");
        });
    },
    createFreshEvent() {
      const id = Math.floor(Math.random() * 10000000);
      return {
        id: id,
        title: "",
        description: "",
        date: "",
        time: "",
      };
    },
  },
});
</script>

<style scoped>
.field {
  margin-bottom: 24px;
}
</style>
