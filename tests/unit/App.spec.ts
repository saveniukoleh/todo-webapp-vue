import { shallowMount } from "@vue/test-utils";
import App from "@/App.vue";
import Vuetify from "vuetify";

describe("App", () => {
  let vuetify: Vuetify;

  beforeEach(() => {
    vuetify = new Vuetify();
  });

  it("should open and render the header", () => {
    const wrapper = shallowMount(App, { vuetify });
    expect(wrapper.find("h3").isVisible()).toBe(true);
  });
});
