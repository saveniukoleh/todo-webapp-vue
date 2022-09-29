import App from "../pageobjects/app.page";

describe("Vue.js app", () => {
  it("should open and render", async () => {
    await App.open();
    await expect(App.heading).toHaveText("Todo App Vue");
  });
});
