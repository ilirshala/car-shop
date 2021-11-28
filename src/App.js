import React from "react";
import "./App.css";
import Footer from "./Components/Shared/Footer";
import Navbar from "./Components/Shared/Navbar";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Brands from "./Pages/Brands";
import Acura from "./Pages/Acura";
import AlfaRomeo from "./Pages/AlfaRomeo";
import Audi from "./Pages/Audi";
import Checkout from "./Components/Shared/Checkout";
import BMW from "./Pages/BMW";
import Chevrolet from "./Pages/Chevrolet";
import Fiat from "./Pages/Fiat";
import Ford from "./Pages/Ford";
import Hyndai from "./Pages/Hyndai";
import Nissan from "./Pages/Nissan";
import Jeep from "./Pages/Jeep";
import VW from "./Pages/VW";
import Volvo from "./Pages/Volvo";
import Benz from "./Pages/Benz";
import Porsche from "./Pages/Porsche";
import LandRover from "./Pages/LandRover";
import ScrollToTop from "./ScrollToTop";
import About from "./Pages/About";
import NewCars from "./Pages/NewCars";
import Signup from "./Pages/Signup";
import CarDetail from "./Pages/CarDetail";

function App() {
  return (
    <Router>
      <Navbar />
      <div className='app'>
        <ScrollToTop />
        <Switch>
          <Route path='/checkout' component={Checkout} />
          <Route path='/brands/acura' component={Acura} />
          <Route path='/brands/bmw' component={BMW} />
          <Route path='/brands/alfa-romeo' component={AlfaRomeo} />
          <Route path='/brands/audi' component={Audi} />
          <Route path='/brands/chevrolet' component={Chevrolet} />
          <Route path='/brands/ford' component={Ford} />
          <Route path='/brands/fiat' component={Fiat} />
          <Route path='/brands/hyundai' component={Hyndai} />
          <Route path='/brands/jeep' component={Jeep} />
          <Route path='/brands/nissan' component={Nissan} />
          <Route path='/brands/vw' component={VW} />
          <Route path='/brands/volvo' component={Volvo} />
          <Route path='/brands/benz' component={Benz} />
          <Route path='/brands/porsche' component={Porsche} />
          <Route path='/brands/land-rovers' component={LandRover} />
          <Route path='/brands' component={Brands} />
          <Route path='/signUp' component={Signup} />
          <Route path='/about-us' component={About} />
          <Route path='/new-cars' component={NewCars} />
          <Route path='/car/:carId' component={CarDetail} />
          <Route path='/' component={Home} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
