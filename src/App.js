import "./App.css";
import Home from "./components/home/home";
import Navbar from "./components/navbar/navbar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Footer from "./components/footer/footer";
import Tours from "./components/tours/tours";
import About from "./components/about/about.js";
import Restaurants from "./components/restaurants/restaurants";
import Map from "./components/map/map";
import Shop from "./components/shop/shop";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
            <Tours />
            <Map />
            <About />
          </Route>
          <Route path="/restaurants">
            <Restaurants />
          </Route>
          <Route path="/shop">
            <Shop />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
