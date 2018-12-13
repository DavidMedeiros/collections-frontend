import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Navbar from './components/Navbar/Navbar'
import Home from "./components/Home/Home";
import Collection from "./components/Collection/Collection";
import Album from "./components/Album/Album";

import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { userLogged: false }

    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin = loggedUser => {
      this.setState({ userLogged: loggedUser });
  };

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Navbar userLogged={ this.state.userLogged } login={ this.handleLogin }/>
            <Switch>
              <Route exact path='/' render={ () => (<Home userLogged={ this.state.userLogged } />) }/>
              {/*<Route exact path="/" component={Home} teste={this.state.userLogged} />*/}
              <Route exact path="/collection/:collectionId" component={Collection} />
              <Route exact path="/album/:albumId" component={Album} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
