class MainPage {
  async open(path) {
    return browser.url(`https://accounts.spotify.com/`);
  }
}
export default new MainPage();
