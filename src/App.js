import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Navbar from './components/Navbar/Navbar'
import Home from "./components/Home/Home";
import Collection from "./components/Collection/Collection";
import Album from "./components/Album/Album";

import API from "./api";

import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { userLogged: false, checked: false };

    this.handleLogin = this.handleLogin.bind(this);
  }

  componentDidMount() {
    let statusUser = localStorage.getItem('userLogged');

    if (statusUser == null) {
      this.setState({ userLogged: false, checked: true });
    } else if (statusUser === 'true'){
      API.get('/api/auth')
        .then(response => {
          if (response.status === 200) {
            if (response.data.status) {
              this.setState({ userLogged: true, checked: true });
            } else {
              this.setState({ userLogged: false, checked: true });
            }
          }
        });
    } else {
      this.setState({ userLogged: statusUser === 'false', checked: true });
    }
  }

  handleLogin = loggedUser => {
    this.setState({ userLogged: loggedUser });

    localStorage.setItem('userLogged', loggedUser);
  };

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            {this.state.checked && <Navbar userLogged={ this.state.userLogged } login={ this.handleLogin }/> }

            <Switch>
              {this.state.checked && <Route exact path='/' render={ () => (<Home userLogged={ this.state.userLogged } />) }/>}
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
