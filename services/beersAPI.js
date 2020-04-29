class BeerApiService {
  constructor() {}

  async loadBeersApi() {
    try {
      let response = await fetch("https://api.punkapi.com/v2/beers");
      let jsonData = await response.json();
      console.log(jsonData);
      return jsonData;
    } catch (error) {
      console.log(error);
    }
  }
}

const beerApiService = new BeerApiService();
export default beerApiService;
