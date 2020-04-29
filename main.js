// import your hideAllPages
import HomePage from "./pages/home.js";
import BeerInfoPage from "./pages/beerInfo.js";
import BeersPage from "./pages/beers.js";
import NavBar from "./components/navbar.js";

// import your services
import spaService from "./services/spa.js";

// Declare and init pages
let homePage = new HomePage();
let beerInfoPage = new BeerInfoPage();
let beersPage = new BeersPage();
let navbar = new NavBar();

// init services
spaService.init();

window.pageChange = () => spaService.pageChange();
