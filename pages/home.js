import beerService from "../services/beers.js";

export default class HomePage {
  constructor() {
    this.template();
    this.initData();
  }

  async initData() {
    let beers = await beerService.loadBeers();
    this.appendBeers(beers);
  }

  template() {
    document.querySelector(".app").innerHTML += /*html*/ `
      <section id="home" class="page">
        <header class="topbar">
          <h2>My Beer Collection</h2>
        </header>
                      
        <div id="grid-home" class="grid-container">
        </div>
      </section>
    `;
  }

  appendBeers(beers) {
    let template = "";
    for (let beer of beers) {
      template += /*html*/ `
        <article>
          <figure>
            <img src="${beer.image_url}">
            <figcaption>
             ${beer.name}
            </figcaption>
          </figure>
        </article>
        `;
    }
    document.querySelector("#grid-home").innerHTML = template;
  }

  addNewBeer() {
    let name = document.querySelector("#name").value;
    let brewery = document.querySelector("#name_breweries").value;
    let img = document.querySelector("#img").value;

    if (name && brewery && img) {
      beers.push({
        name,
        brewery,
        img,
      });

      appendBeers(beers);
      navigateTo("home");
      document.querySelector("#name").value = "";
    } else {
      alert("Please fill out all fields");
    }
  }
}
