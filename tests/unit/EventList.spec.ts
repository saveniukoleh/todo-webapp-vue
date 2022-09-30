import { createLocalVue, shallowMount } from "@vue/test-utils";
import EventList from "@/views/EventList.vue";
import store from "@/store";
import Vuex from "vuex";
import Vuetify from "vuetify";

describe("EventList", () => {
  const localVue = createLocalVue();
  localVue.use(Vuex);
  let vuetify: Vuetify;

  beforeEach(() => {
    vuetify = new Vuetify();
  });

  it("should render the events", () => {
    const wrapper = shallowMount(EventList, { localVue, store, vuetify });
    expect(wrapper.exists()).toBeTruthy();
  });

  describe("page title", () => {
    it("is rendered with the correct text", () => {
      const wrapper = shallowMount(EventList, { localVue, store, vuetify });
      const title = wrapper.find("[data-testid=event-list-title]");
      expect(title.exists()).toBeTruthy();
      expect(title.text()).toContain("Events Listing");
    });
  });
});
