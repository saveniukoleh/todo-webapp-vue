class App {
  /**
   * elements
   */
  get heading() {
    return $("h3");
  }

  /**
   * methods
   */
  async open(path = "/") {
    await browser.url(path);
  }
}

export default new App();
