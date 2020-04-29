import beerApiService from "../services/beersAPI.js";

export default class BeersPage {
  constructor() {
    this.template();
    this.initData();
  }

  async initData() {
    let beersApi = await beerApiService.loadBeersApi();
    this.appendBeersApi(beersApi);
  }

  template() {
    document.querySelector(".app").innerHTML += /*html*/ `
        <section id="beers" class="page">
          <header class="topbar">
            <h2>Add a beer</h2>
          </header>
          <div id="form-wrapper">
          <form>
          <input id="name" type="text" name="name" placeholder="Name" />
          <input
            id="name_breweries"
            type="text"
            name="brewery"
            placeholder="Brewery"
          />
          <input id="img" type="text" name="img" placeholder="Image URL" />
          <button type="button" name="button" onclick="addNewBeer()">Save</button>
        </form>
        </div>
          <div id="grid-beers" class="grid-container"></div>
        </section>
      `;
  }

  appendBeersApi(beersApi) {
    let template = "";
    for (let beerApi of beersApi) {
      template += /*html*/ `
        <article>
          <figure>
            <img src="${beerApi.image_url}">
            <figcaption>
            ${beerApi.name}
            </figcaption>
          </figure>
        </article>
        `;
    }
    document.querySelector("#grid-beers").innerHTML = template;
  }
}
