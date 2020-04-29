export default class NavBar {
  constructor() {
    this.template();
  }

  template() {
    document.querySelector(".app").innerHTML += /*html*/ `
    <!-- tabbar navigation -->
    <nav class="tabbar">
      <a href="#home">Home</a>
      <a href="#beers">Add Beer</a>
      <a href="#info">Beer Info</a>
    </nav>
    `;
  }
}
