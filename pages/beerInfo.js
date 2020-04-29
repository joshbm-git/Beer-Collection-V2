import beerService from "../services/beers.js";

export default class BeerInfoPage {
  constructor() {
    this.template();
    this.initData();
  }

  async initData() {
    let beerInfo = await beerService.loadBeers();
    this.appendBeerInfo(beerInfo);
  }

  template() {
    document.querySelector(".app").innerHTML += /*html*/ `
        <section id="info" class="page">
          <section id="beer-container">
        
        </section>
        </section>
      `;
  }
  appendBeerInfo(beerInfo) {
    let template = "";

    template += /*html*/ `
      <figure>
      <img src="${beerInfo[0].image_url}">
      </figure>
      <article>
      <h3>${beerInfo[0].name}</h3>
      <p>
      At Carlsberg, the pursuit of better beer is in our DNA. More than
                  100 years after our founder J.C. Jacobsen mastered the art of
                  brewing great Pilsner, we're still looking for ways to improve our
                  beer. Our perfectly balanced Danish Pilsner is wonderfully crisp and
                  refreshing, with a full flavour and a distinctive hoppy aroma. Skål!
      </p>
      
      <h4>Beer type: European Pale Lager</h4>
      <h4>ABV: 5%</h4>
      </article>
        `;

    document.querySelector("#beer-container").innerHTML = template;
  }
}
