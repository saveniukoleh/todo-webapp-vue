import Vue from "vue";
import Vuex from "vuex";
import EventService from "../services/EventService";

Vue.use(Vuex);

interface State {
  events: Array<{ id: number }>;
  event: { id: number } | undefined;
}

export default new Vuex.Store({
  state: (): State => {
    return {
      events: [],
      event: undefined,
    };
  },
  mutations: {
    ADD_EVENT(state, event) {
      state.events.push(event);
    },
    UPDATE_EVENT(state, event) {
      state.events.splice(state.events.indexOf(event), 1);
      state.events.push(event);
    },
    DELETE_EVENT(state, event) {
      state.events.splice(state.events.indexOf(event), 1);
    },
    SET_EVENTS(state, events) {
      state.events = events;
    },
    SET_EVENT(state, event) {
      state.event = event;
    },
  },
  actions: {
    updateEvent({ commit }, event) {
      return EventService.updateEvent(event)
        .then(() => {
          commit("UPDATE_EVENT", event);
        })
        .catch((error) => {
          console.log("There was an error: " + error.message);
        });
    },
    deleteEvent({ commit }, event) {
      return EventService.deleteEvent(event)
        .then(() => {
          commit("DELETE_EVENT", event);
        })
        .catch((error) => {
          console.log("There was an error: " + error.message);
        });
    },
    createEvent({ commit }, event) {
      return EventService.postEvent(event).then(() => {
        commit("ADD_EVENT", event);
      });
    },
    fetchEvents({ commit }) {
      EventService.getEvents()
        .then((querySnapshot) => {
          commit(
            "SET_EVENTS",
            querySnapshot.docs.map((doc) => {
              return { id: doc.id, ...doc.data() };
            })
          );
        })
        .catch((error) => {
          console.log("There was an error: " + error.message);
        });
    },
    fetchEvent({ commit, getters }, id) {
      const event = getters.getEventById(id);
      if (event) {
        commit("SET_EVENT", event);
      } else {
        EventService.getEvents()
          .then((querySnapshot) => {
            const events = querySnapshot.docs.map((doc) => {
              return { id: doc.id, ...doc.data() };
            });
            const event = events.find((event) => event.id === id);
            commit("SET_EVENT", event);
          })
          .catch((error) => {
            console.log("There was an error: " + error.message);
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
