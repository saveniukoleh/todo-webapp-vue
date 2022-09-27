import Vue from "vue";
import Vuex from "vuex";
import EventService from "../services/EventService";

Vue.use(Vuex);

interface State {
  user: { id: string; name: string };
  categories: Array<string>;
  events: Array<{ id: number }>;
  event: { id: number } | undefined;
}

export default new Vuex.Store({
  state: (): State => {
    return {
      user: { id: "abc123", name: "Adam Jahr" },
      categories: [
        "sustainability",
        "nature",
        "animal welfare",
        "housing",
        "education",
        "food",
        "community",
      ],
      events: [],
      event: undefined,
    };
  },
  mutations: {
    ADD_EVENT(state, event) {
      state.events.push(event);
    },
    SET_EVENTS(state, events) {
      state.events = events;
    },
    SET_EVENT(state, event) {
      state.event = event;
    },
  },
  actions: {
    createEvent({ commit }, event) {
      return EventService.postEvent(event).then(() => {
        commit("ADD_EVENT", event);
      });
    },
    fetchEvents({ commit }) {
      EventService.getEvents()
        .then((response) => {
          commit("SET_EVENTS", response.data);
        })
        .catch((error) => {
          console.log("There was an error:" + error.message);
        });
    },
    fetchEvent({ commit, getters }, id) {
      const event = getters.getEventById(id);
      if (event) {
        commit("SET_EVENT", event);
      } else {
        EventService.getEvent(id)
          .then((response) => {
            commit("SET_EVENT", response.data);
          })
          .catch((error) => {
            console.log("There was an error:" + error.message);
          });
      }
    },
  },
  modules: {},
  getters: {
    getEventById: (state) => (id: number) => {
      return state.events.find((event) => event.id === id);
    },
  },
});
