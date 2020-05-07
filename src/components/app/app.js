import React from 'react';

import Header from "../header";
import RandomPokemon from "../random-pokemon";
import { PokeServiceProvider } from "../poke-service-context";
import pokeService from "../../service/pokeService/pokeService";
import PokePage from "../pages/poke-page";
import ItemsPage from "../pages/item-page";
import LocationPage from "../pages/location-page";
import {BrowserRouter as Router, Route } from "react-router-dom";
import { Animated } from "react-animated-css";
import LocationDetails from "../poke-components/location-details";

class App extends React.Component {

    pokeService = new pokeService();

    render() {

          return (
              <PokeServiceProvider value={this.pokeService}>
                  <Router>
                      <div className="App">
                          <Header />
                          <RandomPokemon />

                          <Route path="/" render={() => (
                              <Animated animationIn="fadeIn" animationOut="fadeOut" animationInDuration={3000} isVisible={true}>
                                      <h2>
                                          Welcome to Pokemon API application!
                                      </h2>
                              </Animated>

                          )} exact />
                          <Route path="/pokemon/:id?" component={PokePage} />
                          <Route path="/items" component={ItemsPage} />
                          <Route path="/locations" component={LocationPage} exact/>
                          <Route path="/locations/:id" render={({match}) => {
                              const { id } = match.params;
                              return <LocationDetails itemId={id} />
                          }} />
                      </div>
                  </Router>
              </PokeServiceProvider>
        );
    }

}

export default App;
