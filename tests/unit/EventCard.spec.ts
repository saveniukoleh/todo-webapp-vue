import { mount } from "@vue/test-utils";
import EventCard from "@/components/EventCard.vue";

describe("EventCard", () => {
  it("renders the event's data successfully", () => {
    const event = {
      id: "ABC123",
      title: "Go Shopping",
      description: "Go to the grocery store for some groceries.",
      date: "2022-11-26",
      time: "15:00",
      lastUpdate: "2022-10-10",
    };

    const wrapper = mount(EventCard, {
      propsData: {
        event: event,
      },
    });

    const wrapperHtml = wrapper.html();
    expect(wrapperHtml).toContain(event.title);
    expect(wrapperHtml).toContain(event.time);
    expect(wrapperHtml).toContain(event.date);

    // expect(wrapperHtml).not.toContain(event.id);
    // expect(wrapperHtml).not.toContain(event.description);
    // expect(wrapperHtml).not.toContain(event.lastUpdate);
  });
});
