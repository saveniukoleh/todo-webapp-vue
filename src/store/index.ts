import Vue from "vue";
import Vuex from "vuex";
import EventService, { TodoEvent } from "../services/EventService";

Vue.use(Vuex);

interface State {
  events: Array<TodoEvent>;
  event: TodoEvent | object;
}

export default new Vuex.Store({
  state: (): State => {
    return {
      events: [],
      event: {},
    };
  },
  mutations: {
    ADD_EVENT(state: State, event: TodoEvent) {
      state.events.push(event);
    },
    UPDATE_EVENT(state: State, event: TodoEvent) {
      state.events.splice(state.events.indexOf(event), 1);
      state.events.push(event);
    },
    DELETE_EVENT(state: State, event: TodoEvent) {
      state.events.splice(state.events.indexOf(event), 1);
    },
    SET_EVENTS(state: State, events: Array<TodoEvent>) {
      state.events = events;
    },
    SET_EVENT(state: State, event: TodoEvent) {
      state.event = event;
    },
  },
  actions: {
    updateEvent({ commit }, event: TodoEvent) {
      return EventService.updateEvent(event)
        .then(() => {
          commit("UPDATE_EVENT", event);
        })
        .catch((error) => {
          console.log("There was an error: " + error.message);
        });
    },
    deleteEvent({ commit }, event: TodoEvent) {
      return EventService.deleteEvent(event)
        .then(() => {
          commit("DELETE_EVENT", event);
        })
        .catch((error) => {
          console.log("There was an error: " + error.message);
        });
    },
    createEvent({ commit }, event: TodoEvent) {
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
    fetchEvent({ commit, getters }, id: string) {
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
  getters: {
    getEventById: (state: { events: TodoEvent[] }) => (id: string) => {
      return state.events.find((event: TodoEvent) => event.id === id);
    },
  },
});
